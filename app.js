var app = angular.module('barcodeSlipApp', ['ngMessages']);
app.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});
app.controller('barcodeCtrl', function($scope) {
$scope.text="";
 $scope.IsVisible = false;
    $scope.generateBarcode = function() {
     $scope.IsVisible = true;
        return JsBarcode("#barcode", $scope.product_id,{
  width:1.2,
  height:20,
  fontSize:12
});

    },
   $scope.printBarcode=function(){
   window.print();
   } ;
});
