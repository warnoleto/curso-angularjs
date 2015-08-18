/**
 * Created by warley.noleto on 17/08/2015.
 */
(function() {

    angular.module('uiRouterEx1')
        .controller('RouterController', RouterController);

    RouterController.$inject = ['$scope', '$rootScope', '$state'];

    function RouterController($scope, $rootScope, $state) {

        $scope.breadcramp = ['/'];

        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams){
                $scope.breadcramp = toState.name.split(/\./g);
            });
    }

})();