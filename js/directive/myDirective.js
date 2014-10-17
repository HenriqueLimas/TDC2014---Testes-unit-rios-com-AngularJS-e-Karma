(function() {
    'use strict';

    //Criando a diretiva pizzaDirective no modulo 'app'
    angular.module('app').directive('pizzaDirective', [
        function() {
            return {
                restrict: 'EA', // definindo que a diretiva pode ser um element ('E') ou um atributo ('A')
                replace: true, // Caso for verdadeiro, o elemento criando não vai ser considerado no DOM
                template: '<h1>Eu sou uma pizza, {{40 + 2}} </h1>' // Aplicando um template a diretiva
            };
        }
    ]);
})();
