var YourName = React.createClass({
  render: function() {
    return (  //jsx的class 要用className
      <div>
        <h3 className="content" >Hello {this.props.name}</h3>
        <h3 className="content" >Number is {this.props.num}</h3>
      </div>
    );
  }
});

var InputState = React.createClass({
  getInitialState : function(){
    return { enable : false }; //必須要有回傳直
  },
  handleClick : function(event){  //this.state. 抓取狀態的方式
    this.setState( {enable : !this.state.enable } );
  },
  render : function(){

    return(
      <p>
         <input type="text" disabled={this.state.enable}  />
         <button onClick={this.handleClick} >  change state</button>
      </p>
    );

  }
});

var LikeButton = React.createClass({
  getInitialState : function(){
    return {liked:false};
  },
  handleClick : function () {
    this.setState( {liked : !this.state.liked} );
  },
  render : function () {
    var st = this.state.liked ? 'like' : 'no like';
    return(
      <div>
      <button onClick={ this.handleClick }> 按</button>
      you <b>{st}</b> me!
      </div>
    );
  }
});

var Hello = React.createClass({
  getInitialState: function () {
    return {  //初始狀態是顯示
      opacity: 1.0
    };
  },
  componentWillMount : function(){

  },
  componentDidMount: function () {
    //函數 進入狀態之後執行
    this.timer = setInterval(function () {  //每10秒重複Render
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);
  },

  render: function () {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    );
  }
});

var Search = React.createClass({
    render: function(){
      return (
        <div>
          {this.props.searchType}: <input type="text" />
          <button>Search</button>
        </div>
      );
  }
});

var Page = React.createClass({ //包含全部小組件
    render : function(){
      return (
        <div>
           <YourName name="you" num="123" />
           <LikeButton />
           <InputState style="bg"/>
           <Search searchType="title" />
           <Search searchType="Content" />
        </div>
    )
  }
});

var page = <Page />;
React.render(
  page,
  document.getElementById('container')
);
