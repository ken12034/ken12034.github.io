angular
  .module('app')
  .controller('boxCtrl', function( $scope ){
       $scope.boxs = [
         {
           name:"image1",
           title:"educoco雲端翻轉課堂",
           url:"http://www.educoco.com/"
         },
         {
           name:"image2",
           title:"不老船長追夢去",
           url:"http://www.educoco.com/captain2016"
         },
         {
           name:"image3",
           title:"第十屆聯合盃全國作文大賽",
           url:"http://www.educoco.com/writingcontest2016"
         },
         {
           name:"image4",
           title:"前端課程網站",
           url:"http://dtd.ntue.edu.tw/dtd-fron-end/"
         }
       ]
  })
