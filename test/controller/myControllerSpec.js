describe('PizzariaController', function() {
    // Declarando as variaveis a serem utilizadas nos testes
    var $scope,
        $httpBackend,
        PizzasService;

    // Injetando o modulo app nos testes
    beforeEach(module('app'));

    // Injetando os serviços nos testes
    // Obs. Pode-se também passar por parametro somente a variavel $injector e 
    // utilizar o metodo get dessa variavel para injetar os serviço. Essa tecnica
    // é util quando existem nomes de serviço com pontos ou também para reduzir a
    // quantidade de variaveis passada por parametros
    //          ex. 
    //              $rootScope = $injector.get('$rootScope');
    //              $httpBackend = $injector.get('$httpBackend');
    beforeEach(inject(function(_$rootScope_, _$httpBackend_, _PizzasService_, $controller) {
        // Criando um novo $scope para ser injetado no controller e 
        // referenciando na variavel global.
        $scope = _$rootScope_.$new();

        // Referenciando o serviço '$httpBackend' na variavel global
        $httpBackend = _$httpBackend_;

        // Referenciando o serviço 'PizzasService' na variavel global
        PizzasService = _PizzasService_;

        // Simulando uma requisição do tipo GET na url '/pizzas' e 
        // respondendo com um novo Array.
        $httpBackend.whenGET('/pizzas').respond([{
            nome: 'calabresa'
        }]);

        // Injetando no controller 'PizzariaController' as variaveis globais
        $controller('PizzariaController', {
            $scope: $scope,
            PizzasService: PizzasService
        });
    }));

    it('deveria inicializar o array pizzas no $scope', function() {
        // Executando as requisições pendentes
        $httpBackend.flush();

        // Atualiza o $scope e resolve as promise pendentes
        $scope.$digest();

        // Verificando se o retorno da requisição é um Array
        expect($scope.pizzas).toEqual(jasmine.any(Array));
    });
});
