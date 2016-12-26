
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
        </ul>
      </div>
    );
  }
});

var ObjectRow = React.createClass({
  render: function() {
    var rows = [];
    this.props.products.forEach((product) => {
      rows.push( <li className="item" >{product.name}</li> );
    });
    return (  //jsx的class 要用className
      <div>
         {rows}
      </div>
    );
  }
});


var Left = React.createClass({
  render: function() {




    return (  //jsx的class 要用className
      <div className="left_panel">
        <h4>商品分類</h4>
        <ul>
          <ObjectRow products={PRODUCTS}/>
        </ul>
      </div>
    );
  }
});

var PRODUCTS = [
  { name: '24h購物'},
  { name: '243C'},
  { name: '24通訊'},
  { name: '24周邊'},
  { name: '24NB'},
  { name: '24數位'},
  { name: '24家電'},
  { name: '24生活'},
  { name: '24日用'},
  { name: '24食品'},
  { name: '24休閒'},
  { name: '24時尚'},
  { name: '24美妝'},
  { name: '24書店'}
];

var Template = React.createClass({ //包含全部小組件
  render : function(){
      return (
        <div>
           <Nav />
           <Left />
        </div>
    )
  }
});


var template = <Template />;
React.render(
  template,
  document.getElementById('nav_panel')
);
