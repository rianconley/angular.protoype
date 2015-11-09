  "use strict";

  (function () {

   var shoes = [{"name": "DryJoys Casual"},{"name": "FJ ICON Spikeless"},{"name": "D.N.A. BOA"},{"name":"M:Project"},{"name":"FJ City"}]
   var collection={};

   for(var i=0;i<6;i++){

   	collection[i]=shoes;

   }


 angular.module('App.Services', [])
	.factory('Collection', [

		function ($http, $q) {
		
	                return {
		                    query: function () {
		                        return shoes;
		                    },
		                    get:function(ix){
		                    	return shoes[ix];
		                    }

	                    
	               
	                  }
	           }

	 ])



}());


