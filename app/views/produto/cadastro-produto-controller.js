/**
 * Created by warley.noleto on 17/08/2015.
 */

(function() {

    angular.module('uiRouterEx1')
        .controller('CadastroProdutoController', CadastroProdutoController);


    CadastroProdutoController.$inject = ['$scope', '$stateParams'];


    function CadastroProdutoController($scope, $stateParams, $rootScope) {
        var id = $stateParams.id;

    }


})();