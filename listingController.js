angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */

    $scope.addListing = function(newEntry) {
//Creates object called newEntry that contains the various fields needed ino order to add an entry
      var newEntry = {
        "code": this.code,
        "name": this.name,
        "address": this.address
      }
      $scope.listings.push(newEntry)
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };


  }
]);
