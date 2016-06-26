var myApp=angular.module( 'myApp', []);

console.log('in client.js');

myApp.controller( 'recordCreate', ['$scope', '$http', function( $scope, $http ){

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
    $scope.petNameIn = '';
    $scope.animalTypeIn = '';
    $scope.ageIn = '';
    $scope.urlIn = '';
  };//end animalRecord


}]);//end my app controller
