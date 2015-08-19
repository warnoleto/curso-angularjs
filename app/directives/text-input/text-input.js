/**
 * Created by warley.noleto on 18/08/2015.
 */
angular.module('oobjDirectives')

    .directive('textInput', function(){
        return {
            restrict:'E',
            templateUrl: '/app/directives/text-input/text-input.html',
            scope:{
                ngModel: '=',
                label: '@', //@ one-bind
                ngDisabled: '=?', // =? opcional
                ngRequired: '=?',
                colspan: '@'
            },
            link: function ($scope, element, attrs){
                $scope.classInputText = 'col-sm-3';

                if (angular.isDefined($scope.colspan)){
                    $scope.classInputText = 'col-sm-'+$scope.colspan;
                }
            }
        }
    });