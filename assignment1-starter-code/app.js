(function(){
  'use strict'

angular.module('myapp',[])
.controller('assignment',['$scope','$filter',assignment]);





function assignment($scope,$filter){
  $scope.fullstring="";
  $scope.result="";


$scope.Checking= function(){


if ($scope.fullstring=="" || $scope.fullstring==null) {
  $scope.result="Please enter data first";}

else {

  var array = $scope.fullstring.split(",");

  if (array.length> 3) {
      $scope.result="Too much";
  }
  else {
      $scope.result="Enjoy";
  }
  }
}
}







})();
