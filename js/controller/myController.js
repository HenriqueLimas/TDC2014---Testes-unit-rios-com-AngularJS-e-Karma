(function() {
    'use strict';

    // Criando o controller PizzariaController no modulo 'app'
    angular.module('app')
        .controller('PizzariaController',
            function($scope, PizzasService) {
                $scope.pizzas = [];
                PizzasService.getPizzas().then(function() {
                    $scope.pizzas = PizzasService.pizzas;
                });

                $scope.addPizza = function(pizza) {
                    $scope.pizzas.push(pizza);
                    PizzasService.addPizza(pizza);
                };
            }
        );
})();
