# Entendendo algumas coisas

* Um dos objetivos do Decorator é aumentar a compsosição do software, porem se voce olhar, ele usa herança, a razão de utilizar a herança é para conseguir que o Objeto decorador tenha o mesmo tipo do objeto decorado, ou seja, não usamos herança para obter comportamentos e sim para igualar tipos.

* O Decorator é um wrapper do mesmo tipo que o seu objeto decorador, onde ele pega o comportamento do objeto decorado e coloca algo a mais antes ou depois da execução do método principal.

* Esse padrão vai de encontro com os principios SOLID , na segunda letra "Open for 
extension, but closed for modification". pois ele não altera o comportamento de nenhuma classe, ele adiciona a possibilidade de criar suas proprias classes para modificar o comportamento.