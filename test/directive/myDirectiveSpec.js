describe('PizzaDirective', function() {
    // Declarando as variaveis a serem utilizadas nos testes
    var $compile,
        $rootScope;

    // Injetando o modulo app nos testes
    beforeEach(module('app'));

    // Injetando os serviços nos testes
    beforeEach(inject(function(_$compile_, _$rootScope_) {
        // Referenciando o $compile na variável global.
        // O $compile realiza a compilação do html passado como String no parametro
        $compile = _$compile_;

        // Referenciando o $rootScope na variavel global
        $rootScope = _$rootScope_;
    }));

    it('deveria renderizar o texto no html', function() {
    	// Compiladno o elemento html da diretiva no $rootScope e referenciando na variavel 'elemento'
        var elemento = $compile('<pizza-directive></pizza-directive>')($rootScope);

        // Atualizando os valores do $rootScope
        $rootScope.$digest();

        // Testando que o html da variavel elemento contem a frase já compilada
        expect(elemento.html()).toContain('Eu sou uma pizza, 42');
    });
});
