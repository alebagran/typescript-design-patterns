import store from 'store';

// O Adapter é um padrão de projeto estrutural que permite objetos
// com interfaces incompatíveis colaborarem entre si.
// Fonte: https://refactoring.guru/pt-br/design-patterns/adapter

// A função do padrão é " converter uma interface de uma classe
// para outra esperada pelo cliente, possibilitando que classes
// com interfaces incompatíveis trabalhem juntas."

// Um exemplo que ilustra bem a função do adapter, são os adaptadores
// de tomada que permitem ligar a tomada de 3 pinos em um encaixe de 2 pinos.

// O padrão Adapter é comumente usado para trabalhar com interfaces legadas, APIs
// diferentes ou quando simplesmente precisamos integrar uma nova API/interface em nosso
// sistemae não podemos modificar a implementação no cliente.
// Fonte: https://blog.fullstacktraining.com/adapter-pattern-in-typescript/

// Para um exemplo simples, imagine uma simples aplicação web que permite
// ao usuário criar uma lista de tarefas. Primeiro vamos criar a classe Tarefa
class Tarefa {
  private titulo: string;
  private descricao: string;

  constructor(titulo: string, descricao: string) {
    this.titulo = titulo;
    this.descricao = descricao;
  }

  getTitulo() {
    return this.titulo;
  }

  getDescricao() {
    return this.descricao;
  }
}

// Essa lista de tarefas é armazenada em Local Storage. Para tal, vamos criar uma
// classe responsável pela persistência dessas tarefas:
class RepositorioTarefas {
  private chave: string;
  private armazenamento: Storage;
  // O repositório recebe no construtor uma chave para or armazenamento das
  // tarefas e um objeto que implementa a interface Storage,
  // da Web Storage API da própria linguagem (Local Storage ou o Session Storage).
  // Fontes: https://developer.mozilla.org/en-US/docs/Web/API/Storage
  constructor(chave: string, armazenamento: Storage) {
    this.chave = chave;
    this.armazenamento = armazenamento;
  }

  async adicionar(tarefa: Tarefa): Promise<void> {
    let tarefas = await this.todos();
    tarefas.push(tarefa);
    this.gravarTarefas(tarefas);
  }

  protected gravarTarefas(tarefas: Array<Tarefa>): void {
    this.armazenamento.setItem(this.chave, JSON.stringify(tarefas));
  }

  async todos(): Promise<Array<Tarefa>> {
    return this.tarefas();
  }

  protected tarefas(): Array<Tarefa> {
    const itensStr: string | null = this.armazenamento.getItem(this.chave);
    let itens: Array<Tarefa> = [];
    if (itensStr) {
      itens = JSON.parse(itensStr) as Array<Tarefa>;
    }
    return itens;
  }
}

// Vamos testar nosso repositório de tarefas
const tarefa1: Tarefa = new Tarefa('Alimentar o Bob', 'Encher o pote de ração do meu gato antes de sair.');
const tarefa2: Tarefa = new Tarefa('Vender o jogo', 'Levar o jogo Days Gone para vender.');
const tarefa3: Tarefa = new Tarefa('Mercado', 'Fazer as compras do m6es.');

// Armazenando as tarefas
const repositorioTarefas = new RepositorioTarefas('tarefas', localStorage);
repositorioTarefas.adicionar(tarefa1);
repositorioTarefas.adicionar(tarefa2);
repositorioTarefas.adicionar(tarefa3);

// Vamos pedir nossas tarefas para o repositório e logar para ver se elas foram salvas
const tarefasDoLocalStorage = repositorioTarefas.todos();
console.log('Tarefas do localStorage: ', tarefasDoLocalStorage);

// Mas se em algum momento quisermos trocar para uma API de armazenamento que
// não implemente a interface Storage, por exemplo, a store-js, que possui
// assinaturas de métodos diferentes da interface Storage
// Fonte: https://github.com/marcuswestin/store.js/
class StorageAdapter implements Storage {
  private store: any;
  public length: number = 0;
  // Usaremos aqui o tipo any pois se trata de uma biblioteca em JS.
  // O repositório DefinitelyTyped busca criar tipos em TS para as bibliotecas
  // em JS que não dão suporte nativo a Typescript, mas para o propósito do exemplo,
  // não vamos implementar esses tipos
  // Fonte: https://github.com/DefinitelyTyped/DefinitelyTyped
  constructor(store: any) {
    this.store = store;
  }

  // Agora implementamos os métodos da interface Storage,
  // E na implementação de cada método, chamamos os métodos
  // equivalentes da biblioteca store-js
  // Fonte: https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.storage.html
  setItem(key: string, value: string): void {
    this.store.set(key, value);
  }

  getItem(key: string): string | null {
    return this.store.get(key);
  }

  clear(): void {
    this.store.clearAll();
  }

  key(index: number): string | null {
    // Não vamos precisar implementar este método para o exemplo
    return null;
  }

  removeItem(key: string): void {
    // Não vamos precisar implementar este método para o exemplo
  }
}

// Por fim, instanciamos o repositório passando nossa nova storage adaptada
// par a interface Storage, que é esperada pelo repositório
const storeAdaptada = new StorageAdapter(store);

const repositorioTarefasComAdapter = new RepositorioTarefas('tarefas', storeAdaptada);
repositorioTarefasComAdapter.adicionar(tarefa1);
repositorioTarefasComAdapter.adicionar(tarefa2);
repositorioTarefasComAdapter.adicionar(tarefa3);

const tarefasDoStoreJS = repositorioTarefasComAdapter.todos();
console.log('Tarefas do store-js: ', tarefasDoStoreJS);
