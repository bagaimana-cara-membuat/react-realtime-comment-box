var SelectboxTwo = React.createClass({
  render: function(){
    return (
      <div className="box-two">
        <select className="form-control">
          <option>You have to choose your mood first</option>
        </select>
      </div>
    );
  }
});
var SelectboxOne = React.createClass({
  render: function(){
  	var moodNodes = this.props.moods.map(function(mood){
    	return (
        <option value={mood.id} key={mood.id}>{mood.name}</option>
      );
    });
    return (
      <div>
        <select className="form-control">
          {moodNodes}
        </select>
      </div>
    );
  }
});
var ChainedBox = React.createClass({
	loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(moods) {
        this.setState({moods: moods});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleSelectOneChange:function(komentar){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: komentar,
      success: function(feels) {
        this.setState({feels: feels});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState:function(){
  	return {moods: []};
  },
  componentDidMount:function(){
  	this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function(){
    return (
      <div className="chained-box">
        <h1>Chained Select Box</h1>
        <SelectboxOne moods={this.state.moods} />
        <p>&nbsp;</p>
        <SelectboxTwo />
      </div>
    );
  }
});

ReactDOM.render(
  <ChainedBox url="/select-one" pollInterval={2468} />,
  document.getElementById('chainselect')
);
