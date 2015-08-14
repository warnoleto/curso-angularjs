(function() {


    angular.module('helloWorldApp', ['ngMessages', 'ui.growl','ui.grid','ui.grid.resizeColumns',
        'ui.grid.selection', 'ngMaterial'])


        .controller("HelloWorldController", HelloWorldController);

    HelloWorldController.$inject = ['$scope'];

    function HelloWorldController($scope) {
        $scope.nome = "Warley Ferreira noleto";

        $scope.myStyle = {};

        $scope.myStyle.width = '100px';
        $scope.myStyle.height = '100px';

        $scope.myClass = '';

        $scope.$watch('nome', function (newvalue, oldvalue) {

            if (newvalue == oldvalue) {
                return;
            }
            if (angular.isDefined(newvalue) && newvalue == 'oobj') {
                $scope.myStyle.backgroundColor = 'green';
                $scope.myClass = 'blue';
            } else {
                $scope.myStyle.backgroundColor = 'yellow';
                $scope.myClass = 'red';
            }
        })
    }
})();