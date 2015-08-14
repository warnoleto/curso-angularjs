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

        $scope.gridOptions = {
            data: 'pessoas',
            columnDefs: [
                {name: 'Nome', field: 'nome', cellTemplate: "app/cellTemplate.html"},
                {name: 'Sobrenome', field: 'sobrenome', cellTemplate: "app/cellTemplate.html"},
                {name: 'Nascimento', field: 'nascimento', cellTemplate: "app/cellTemplate.html"},
                {name: 'Sexo', field: 'sexo', cellTemplate: "app/cellTemplate.html"},
                {name: 'Ações', field: 'acoes', width: '70',  cellTemplate: "app/cellTemplateButtons.html"}
            ],
            enableColumnMenus: false,
            rowTemplate:'app/rowTemplate.html'
        };

        var boxWarning = {class: 'warning', timeout: 4000};

        $scope.getRowStyle = function(row){
            var rowStyle = {};
            if (angular.isDefined( row.entity.cor)){
                rowStyle.backgroundColor = row.entity.cor;
            }
            return rowStyle;
        }

        $scope.salvar = function () {

            if ($scope.myForm.$invalid) {
                $growl
                    .box('Error', 'Existem erros no preencimento do formulário.', boxWarning)
                    .open();
                return;
            }

            var index = $scope.pessoas.indexOf($scope.pessoa);
            if (index < 0) {
                $scope.pessoas.push($scope.pessoa);
            }else{
                $scope.pessoas[index] = $scope.pessoa;
            }
            $scope.limpar();
        }

        $scope.editar = function ( item ) {
            $scope.pessoa = item;
        };

        $scope.excluir = function ( item ) {
            if ($scope.pessoas.indexOf(item) >= 0) {
                $scope.pessoas.splice($scope.pessoas.indexOf(item, 1));
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