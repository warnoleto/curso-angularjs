/**
 * Created by warley.noleto on 11/08/2015.
 */
(function() {

    angular.module('helloWorldApp')
        .controller('BootstrapController', BootstrapController);

    BootstrapController.$inject = ['$scope', '$growl'];

    function BootstrapController($scope, $growl) {
        $scope.pessoa = {};
        $scope.pessoas = [];
        var boxWarning = {class: 'warning', timeout: 4000};

        $scope.salvar = function () {

            if ($scope.myForm.$invalid) {
                $growl
                    .box('Error', 'Existem erros no preencimento do formulário.', boxWarning)
                    .open();
                return;
            }

            if ($scope.pessoas.indexOf($scope.pessoa) < 0) {
                $scope.pessoas.push($scope.pessoa);
                $scope.limpar();
            }

        };

        $scope.excluir = function () {
            if ($scope.pessoas.indexOf($scope.pessoa) >= 0) {
                $scope.pessoas.splice($scope.pessoas.indexOf($scope.pessoa, 1));
                $scope.limpar();
            }
        };

        $scope.limpar = function () {
            $scope.pessoa = {};
            $scope.myForm.$setPristine();
        };

        $scope.selecionar = function (item) {
            $scope.pessoa = item;
        };
    }


})();