var komentar = [
  {id: 1, author: "Candra", text: "Hey, I am *bold*, can't you see?"},
  {id: 2, author: "Rino", text: "Nice"}
];

var Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
  render: function() {
  	return (
    	<div className="comment">
      	<strong className="commentAuthor">
        	{this.props.author}
        </strong>
        &nbsp;says&nbsp;
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
  	var commentNodes = this.props.komentar.map(function(comment){
    	return (
      	<Comment author={comment.author} key={comment.id}>
        	{comment.text}
        </Comment>
      );
    });
  	return (
    	<div className="commentList">
      	{commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  getInitialState:function(){
    return {'author':'','text':''};
  },
  handleAuthorChange:function(e){
    this.setState({'author':e.target.value});
  },
  handleTextChange:function(e){
    this.setState({'text':e.target.value});
  },
  handleSubmit:function(e){
    e.preventDefault();
    var author = this.state.author.trim();
    var text   = this.state.text.trim();
    if(!text || !author){
      return;
    }
    this.props.onCommentSubmit({'author':author,'text':text});
    this.setState({'author':'','text':''});
  },
  render: function() {
  	return (
    	<div className="commentForm">
      	<form className="commentForm" onSubmit={this.handleSubmit}>

          <div className="form-group">
          	<label>Enter your name : </label>
            <input type="text"
                   className="form-control"
                   value={this.state.author}
                   onChange={this.handleAuthorChange}
            />
          </div>

          <div className="form-group">
          	<label>Enter your comment : </label>
            <textarea className="form-control"
                      value={this.state.text}
                      onChange={this.handleTextChange}
            ></textarea>
          </div>
          <input type="submit" value="Post" className="btn btn-primary" />
        </form>
      </div>
    );
  }
});

var CommentBox = React.createClass({
	loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(komentar) {
        this.setState({komentar: komentar});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit:function(komentar){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: komentar,
      success: function(komentar) {
        this.setState({komentar: komentar});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState:function(){
  	return {komentar: []};
  },
  componentDidMount:function(){
  	this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
  	return (
    	<div className="commentBox">
      	<h1>Latest Comments :</h1>
        <CommentList komentar={this.state.komentar} />
        <hr />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} url="/react-comments" />
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox url="/react-comments" pollInterval={2000} />,
  document.getElementById('content')
);
