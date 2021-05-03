(function () {
    'use strict'
angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope){
    $scope.name = "Dino";
    $scope.state = "wave1";

    $scope.sayMessage = function(){
        return $scope.name + " likes to eat healthy snacks at night";
    };

    $scope.wave = function(){
            $scope.state = "wave2";
    };
}
})();