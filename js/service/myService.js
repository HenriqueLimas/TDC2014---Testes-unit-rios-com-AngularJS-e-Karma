(function() {
    'use strict';

    // Criando o controller PizzasService no modulo 'app'
    angular.module('app')
        .service('PizzasService',
            function($http) {
                var that = this;

                this.pizzas = [];
                this.getPizzas = function() {
                    return $http.get('/pizzas').success(function(pizzas) {
                        that.pizzas = pizzas;
                    });
                };

                this.addPizza = function(pizza) {
                    if (pizza) {
                        this.pizzas.push(pizza);
                    }
                };
            }
        );
})();
