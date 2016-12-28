
var Nav = React.createClass({ //navBar
  render: function() {
    return (  //jsx的class 要用className
      <div>
        <ul className="nav nav-pills pull-left">
          <li className="logoTitle"><h2>網購好好玩</h2></li>
          <li><a>首頁</a></li>
          <li><a>賣東西</a></li>
          <li className="search"><span>搜尋</span><input type="text" /></li>
          <li><a>登入</a></li>
          <li>購物車</li>
        </ul>
      </div>
    );
  }
});

var ObjectRow = React.createClass({
  render: function() {
    return (  //jsx的class 要用className
      <div>
         <li className="item" >
           <i className={this.props.font} aria-hidden="true"></i>
              <span>{this.props.name}</span>
         </li>
      </div>
    );
  }
});


var Left = React.createClass({
  render: function() {
    var rows = [];
    PRODUCTS.forEach((product) => {
     rows.push( <ObjectRow name={product.name} font={product.font}/> );
    });

    return (  //jsx的class 要用className
      <div className="left_panel">
        <h4>商品分類</h4>
        <ul>
          {rows}
        </ul>
      </div>
    );
  }
});

var PRODUCTS = [
  { name: '3C周邊', font: 'fa fa-print'},
  { name: '電腦與平板', font: 'fa fa-laptop'},
  { name: '手機通訊', font: 'fa fa-mobile'}
];


class SliderShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl:[
        {
          url: "img/01.jpg"
        },
        {
          url: "img/02.jpg"
        }
      ],
      num : 0
    };

    this.right = this.right.bind(this);
  }


  right() {

    this.setState(  { num: this.state.num + 1 }  );
  }

  render() {
    return (  //jsx的class 要用className
      <div className="slidershow_panel">
          <div className="slidershow_img">
             <img src={ this.state.imgUrl[  this.state.num ].url } />

          </div>
          <div className="rightButton" onClick={this.right}></div>
      </div>
    );
  }
};


var UrlArray = [
  {
    url: "img/01.jpg"
  },
  {
    url: "img/02.jpg"
  }
];

var Template = React.createClass({ //包含全部小組件
  render : function(){
      return (
        <div>
           <Nav />
           <Left />
           <SliderShow />
        </div>
    )
  }
});


var template = <Template />;
React.render(
  template,
  document.getElementById('nav_panel')
);
