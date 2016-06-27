var myApp=angular.module( 'myApp', []);

console.log('in client.js');

myApp.controller( 'recordCreate', ['$scope', '$http', function( $scope, $http ){
  $scope.allTheRecords = [];

  $scope.addRecord = function(){
    var objectOut = {
      pet_name : $scope.petNameIn,
      animal_type : $scope.animalTypeIn,
      age : $scope.ageIn,
      animal_url : $scope.urlIn
    };
    console.log('animal record created: ' + objectOut.pet_name);
    //commence sending of objectOut
    $http({
      method: 'POST',
      url: '/postAnimal',
      data: objectOut
    });
    //clears input values
    $scope.petNameIn = '';
    $scope.animalTypeIn = '';
    $scope.ageIn = '';
    $scope.urlIn = '';
  };//end addRecord

  //create retrievel function to display data
  var populatePage = $scope.getRecords = function(){
    $http({
      method: 'GET',
      url: '/retrieveData',
    }).then(function(response){
      $scope.allTheRecords = response.data;
      console.log(response);
    });
  };//end getRecords
  populatePage();
}]);//end myapp controller recordCreate
