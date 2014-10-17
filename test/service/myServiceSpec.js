describe('PizzasService', function() {
    // Declarando as variaveis a serem utilizadas nos testes
    var PizzasService,
        $httpBackend;

    // Injetando o modulo app nos testes
    beforeEach(module('app'));

    // Injeção das dos serviços nos testes
    // Obs. Pode-se também passar por parametro somente a variavel $injector e 
    // utilizar o metodo get dessa variavel para injetar os serviço. Essa tecnica
    // é util quando existem nomes de serviço com pontos ou também para reduzir a
    // quantidade de variaveis passada por parametros
    //          ex. 
    //              PizzasService = $injector.get('PizzasService');
    //              $httpBackend = $injector.get('$httpBackend');
    beforeEach(inject(function(_PizzasService_, _$httpBackend_) {
        // Referenciando o serviço 'PizzasService' na variavel global
        PizzasService = _PizzasService_;

        // Referenciando o serviço '$httpBackend' na variavel global
        $httpBackend = _$httpBackend_;

        // Simulando uma requisição do tipo GET na url '/pizzas' e 
        // respondendo com um novo Array
        $httpBackend.whenGET('/pizzas').respond([{
            nome: 'calabresa'
        }]);
    }));

    afterEach(function() {
        // A cada teste será verificado se não existe nenhum flush do $httpBackend pendente
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('getPizzas: ', function() {
        it('deveria startar o array de pizzas', function() {
            // Executando o metodo a ser testado
            PizzasService.getPizzas().then(function() {
                // O teste deve ser executado apos ter resolvido a promise.
                expect(PizzasService.pizzas).toEqual(jasmine.any(Array));
            });

            // Executando as requisições pendentes
            $httpBackend.flush();
        });
    });

    describe('addPizza: ', function() {
        it('deveria adicionar uma pizza no array', function() {
            // Executando o metodo a ser testado
            PizzasService.addPizza({
                nome: 'portuguesa'
            });
            // Validando que o Array (PizzasService.pizzas) possui um elemento adicionado
            expect(PizzasService.pizzas.length).toBe(1);

            // Executando novamente o metodo para ter certeza que os testes estão sendo executados
            PizzasService.addPizza({
                nome: 'calabresa'
            });

            // Validando que o tamanho do Array (PizzasService.pizzas) foi alterado
            expect(PizzasService.pizzas.length).toBe(2);
        });
    });
});
