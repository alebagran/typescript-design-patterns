# Entendendo algumas coisas

* O padrão de Projeto Strategy consiste em separar os comportamentos que se repetem e dar a capacidade de decidir qual comportamento usar em tempo de execução.

* O Exemplo do Ducks Simulator, retirado do livro Use a Cabeça, exemplifica um simulador de patos, onde existia uma classe pai chamada Duck, com comportamentos padrao como Nadar e Grasnar, porém após uma reunião é solicitado que os patos tenham a capacidade de voar, o desenvolvedor cria um novo comportamento na classe pai chamado Fly, durante a apresentação, um comportamento inesperado acontece, patos de borracha começam a voar pelo cenário. Apesar da solução ser simples, a Herança trouxe um problema maior, um comportamento indesejado para patos qeu nao deveriam ter esse comportamento. A solução final é separar o comportamento de voar da classe pai, e aplicar ela nas classes que precisam desse comportamento

* Quando eu separo o comportamento da classe abstrata e coloco ele sob uma interface, estou respeitando o conceito de aberto e fechado do SOLID, pois dessa forma posso criar noso comportamentos , sem precisar editar nenhum outro arquivo.

* Com o Strategy eu estou programando para uma interface, ou seja, As classes não dependem umas das ostras mas sim de uma interface.