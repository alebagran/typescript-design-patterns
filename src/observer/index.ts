// Padrão Observer

/**
 * Definição do livro Head First Design Patterns: Uma dependência de um para muitos entre objetos,
 * de modo que quando o objeto observado muda de estado, todos os seus dependentes são automaticamente
 * notificados e atualizados.
 * 
 * Para implementar o padrão Observer, vamos utilizar duas interfaces: Observavel e Observador.
 */

/**
* Quem está sendo observado precisa manter uma lista de observadores para poder notificá-los
* quando o observado receber um novo valor para seus dados. Sendo assim, o objeto que estiver sendo observado deve
* implementar a interface Observavel, com os seguintes métodos:
* 
* - registrar: O objeto observado registra em sua lista de observadores um objeto que implemente a interface Observador.
* - remover: O objeto observado remove um observador de sua lista de observadores.
* - notificar: O objeto observado notifica suas mudanças de estado aos observadores registrados.
* 
*/

/* 
interface Observavel{
  registrar(o: Observador);
  remover(o: Observador);
  notificar(parametros);
}
*/

/**
* Os observadores implementam a interface Observador e devem implementar o método receberNotificacao.
* O objeto observado invoca o método notificar toda vez que seu estado interno é atualizado.
* Dentro do método notificar, o objeto observado varre sua lista de observadores registrados,
* chamando o método receberNotificacao de cada observador, passando os parâmetros correspondentes ao
* que os observadores querem observar do objeto observado.
*/

/* 
interface Observador{
  receberNotificacao(parametro: tipo);
} 
*/

/**
 * Exemplo concreto: Carrinho de Compras
 * 
 * Em um site de compras online, o usuário pode adicionar ao carrinho quantos produtos desejar
 * antes de finalizar a compra. Há três elementos da interface que precisam rastrear o estado interno
 * do carrinho: caixa com a lista de itens do carrinho, localizada no topo da página; a caixa com a informação do total
 * do pedido, localizado logo abaixo da lista de itens do carrinho, e a caixa de sugestão de itens 
 * de compra casada, exibida em algum ponto de todas as páginas do site. Cada observador do carrinho
 * precisa da lista atualizada de itens do carrinho para se manterem atualizados em relação à mesma.
 */

 // Vamos definir de forma simplificada uma classe para os itens do carrinho.
 // Em um sistema real teríamos um item de carrinho que faria referência um
 // objeto de produto pré-cadastrado, mas para sermos mais diretos nesse exemplo,
 // vamos usar diretamente uma classe ItemCarrinho que possui apenas nome e preço.
class ItemCarrinho {
  private nome: string;
  private quantidade: number;
  private preco: number;

  constructor(nome: string, quantidade: number, preco: number) {
    this.nome = nome;
    this.quantidade = quantidade;
    this.preco = preco;
  }

  getNome(): string {
    return this.nome;
  }

  getQuantidade(): number {
    return this.quantidade;
  }

  getPreco(): number {
    return this.preco;
  }
}

// Primeiro criamos as interfaces
interface Observavel{
  registrar(o: Observador): void;
  remover(o: Observador): void;
  notificar(itens: ItemCarrinho[]): void;
}

interface Observador{
  // É através desde método que passaremos a lista de itens atualizada do carrinho
  // sempre que ela sofrer uma alteração
  receberNotificacao(itens: ItemCarrinho[]): void;
}

// Definimos a classe para representar o estado do carrinho no código.
// Esta classe representa o objeto observado, portanto implementamos os métodos da interface Observavel
class Carrinho implements Observavel {
  private observadores: Observador[] = [];
  private itens: ItemCarrinho[] = [];

  registrar(o: Observador): void {
    this.observadores.push(o);
  }

  remover(o: Observador): void {
    this.observadores = this.observadores.filter(observador => observador !== o);
  }

  notificar(itens: ItemCarrinho[]): void {
    // Notifica cada observador passando a lista de itens atualizada
    this.observadores.map(o => {
      o.receberNotificacao(itens);
    });
  }

  adicionarItem(i: ItemCarrinho): void {
    // Adiciona o item ao carrinho e emite uma notificação a todos os
    // observadores, passando a lista atualizada de itens
    this.itens.push(i);
    console.log(`Item ${i.getNome()} adicionado ao carrinho.`);
    this.notificar(this.itens);
  }

  removerItem(i: ItemCarrinho): void {
    // Remove um item do carrinho e emite uma notificação a todos os
    // observadores, passando a lista atualizada de itens
    this.itens = this.itens.filter(item => i !== item);
    this.notificar(this.itens);
  }

  // Outros métodos...
}

// Agora vamos declarar os observadores do Carrinho

// Começando pela parte da UI que lista os itens do carrinho
class UIListagemCarrinho implements Observador {
  // Implementa o método para receber a notificação da do Carrinho.
  // Nesse caso, a notificação é a própria lista de itens no carrinho
  receberNotificacao(itens: ItemCarrinho[]) {
    console.log(`UIListagemCarrinho: Recebeu uma notificação com os seguintes itens: ${JSON.stringify(itens)}`);
    console.log("UIListagemCarrinho: Varre a lista e adiciona à UI o HTML correspondente a cada item");
  }

  // Outros métodos...
}

// Em seguida a parte da UI responsável pela informação do total
class UITotalCarrinho implements Observador {
  receberNotificacao(itens: ItemCarrinho[]) {
    console.log(`UITotalCarrinho: Recebeu uma notificação com os seguintes itens: ${JSON.stringify(itens)}`);
    console.log("UITotalCarrinho: Soma os valores dos itens e atualiza a UI com o total");
  }

  // Outros métodos...
}

// Por último as sugestões de compra casada com base no conteúdo do carrinho
class UICompraCasada implements Observador {
  receberNotificacao(itens: ItemCarrinho[]) {
    console.log(`UICompraCasada: Recebeu uma notificação com os seguintes itens: ${JSON.stringify(itens)}`);
    console.log("UICompraCasada: Envia os itens para um serviço que retorna uma lista de sugestões para ser exibida na página");
  }

  // Outros métodos...
}

// Aplicando o padrão...

// Instanciamos os observadores
const uiListagemCarrinho: UIListagemCarrinho = new UIListagemCarrinho();
const uiTotalCarrinho: UITotalCarrinho = new UITotalCarrinho();
const uiCompraCasada: UICompraCasada = new UICompraCasada();

// Instanciamos o carrinho
const carrinho = new Carrinho();

// Registramos os observadores
carrinho.registrar(uiListagemCarrinho);
carrinho.registrar(uiTotalCarrinho);
carrinho.registrar(uiCompraCasada);

console.log("---------------------------------------------------------------\n");

// Adicionamos os itens ao carrinho
const item1: ItemCarrinho = new ItemCarrinho("God of War (PS4)", 50.00, 1);

// Ao adicionar cada item, o carrinho vai notificar todos os observadores
// passando a lista de itens atualizada.
console.log("Adicionando item 1 - God of War (PS4)");
carrinho.adicionarItem(item1);


console.log("---------------------------------------------------------------\n");


const item2: ItemCarrinho = new ItemCarrinho("Horizon Zero Dawn (PS4)", 30.00, 2);

carrinho.adicionarItem(item2);


console.log("---------------------------------------------------------------\n");


const item3: ItemCarrinho = new ItemCarrinho("Ghost of Tsushima (PS4)", 200.00, 1);

carrinho.adicionarItem(item3);
