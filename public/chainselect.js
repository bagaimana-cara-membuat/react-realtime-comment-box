var MoodBox = React.createClass({
  getInitialState:function(){
  	return {feels: [], mood_id:0};
  },
  loadFeelsFromServer: function(mood) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: mood,
      success: function(data) {
        //this.setState({feels: data});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleMoodChange:function(e){
    var mood_id = e.target.value;
    //console.log(mood_id);
    this.setState({'mood_id':mood_id});
    this.props.onMoodChange({'mood_id':mood_id});
  	//this.loadFeelsFromServer({'mood_id':mood_id});
  },
  render: function() {
    var moodNodes = this.props.moods.map(function(mood){
    	return (
      	<option value={mood.id} key={mood.id}>{mood.name}</option>
      );
    });
  	return (
    	<div className="MoodBox">
      	<select className="form-control" onChange={this.handleMoodChange}>
          <option value="0">-- What is your mood? --</option>
          {moodNodes}
        </select>
      </div>
    );
  }
});

var FeelBox = React.createClass({

  render: function() {
    if(this.props.feels){
      var feelNodes = this.props.feels.map(function(feel){
      	return (
        	<option value={feel.id} key={feel.id}>{feel.name}</option>
        );
      });
    } else {
      var feelNodes = [].map(function(feel){
      	return (
        	<option value={feel.id} key={feel.id}>{feel.name}</option>
        );
      });
    }
  	return (
    	<div className="FeelBox">
      	<select className="form-control">
          <option value="0">-- How do you feel? --</option>
          {feelNodes}
        </select>
      </div>
    );
  }
});

var ChainselectBox = React.createClass({
  getInitialState:function(){
  	return {moods: [], feel: []};
  },
  loadMoodsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({moods: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleMoodChange:function(mood){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: mood,
      success: function(data) {
        this.setState({feels: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadMoodsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
  	return (
    	<div className="chainselectBox">
      	<h1>Chained Select Boxes :</h1>
        <MoodBox moods={this.state.moods} url="/select-one" onMoodChange={this.handleMoodChange}  />
        <div>&nbsp;</div>
        <FeelBox feels={this.state.feels} />
      </div>
    );
  }
});

ReactDOM.render(
  <ChainselectBox url="/select-one" pollInterval={2468} />,
  document.getElementById('chainselect')
);
