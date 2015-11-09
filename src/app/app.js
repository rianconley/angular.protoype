"use strict";

angular.module('App.Controller', [])

.controller('AppCtrl',['$scope','$log','Collection',function($scope,$log,Collection){
	
	$scope.formData={};
	$scope.collection=[]
	$scope.formData.shoes=[];
	$scope.results=[];

	/*dropdown state*/
	$scope.init=true;


	/*declare answers*/
	$scope.answers=["FJ ICON Spikeless","D.N.A. BOA","M:Project","FJ City","M:Project","FJ City"];
	

	var $data=$scope.formData;

	/*default values*/
	$data.firstname="firstname";
	$data.lastname="lastname";
	$data.email="email";
	$data.address1="address1";
	$data.address2="address2";
	$data.city="city";
	$data.state="state";

	for(var i=0;i<6;i++){
		/*set collections for each athlete */
		$scope.collection[i]=Collection.query();

		/*set default value for dropdowns*/
		$data.shoes[i]=$scope.collection[i][0];

		/*set default results */
		$scope.results.push(true);
	}
 
	$scope.submit=function(){

		/*show answers*/
		$scope.init=false;
		var log=function(){
			return	 JSON.stringify($data);
		}
		$log.info(log());
		
		/*test results*/
		for(i=0; i < $scope.answers.length;i++){

			if($data.shoes[i].name!=$scope.answers[i]){
				$scope.results[i]=false;
			}
		}
		$log.info("results: "+$scope.results);


	}
    
}])
  .directive('input', function() {
    return {
      restrict: 'E',
      link: function link(scope, element, attrs) {
	 element.bind("focus", function(){
	 	this.value='';
	 }

	 )
           }}
  });




