// "Visitor é um padrão de projeto comportamental que permite adicionar novos
// comportamentos a uma hierarquia de classes sem precisar alterar nenhum código"

// As classes que precisam da funcionalidade do Visitor implementam uma interface
// que possui o método receberVisita (o nome do método usado normalmente é accept,
// mas aqui eu vou usar receberVisitando pois acho que fica mais claro), que receberá como
// argumento um objeto que implementa a interface Visitante.

/*
interface Anfitriao {
  receberVisita(visitante: Visitante): void;
}
*/

// A interface visitante declara uma série de métodos, cada um correspondente
// a um tipo de anfitrião. Cabe a cada anfitrião saber qual método do
// visitante chamar quando recebê-lo através do método receberVisita.

/* 
interface Visitante {
  visitarAnfitriaoA(anfitriao: AnfitriaoA)  : void{
    // chamar métodos do AnfitriaoA
  }

  visitarAnfitriaoB(anfitriao: AnfitriaoB): void {
    // chamar métodos do AnfitriaoB
  }

  // mais métodos de visita para outras classes da mesma hierarquia
}
*/

/*
Exemplo prático: Editor de Texto
Em um programa de edição de texto, há uma hierarquia de componentes
que representa os elementos que compõem uma página de texto.
No código, o objeto Pagina possui uma lista desses componentes. Um componente de página pode
ser um componente de texto (ComponenteTexto), que guarda um trecho de texto digitado;
um elemento de código fonte (ComponenteCodigoFonte), que guarda um bloco de código de programação;
um componente de imagem (ComponenteImagem), que guarda o endereço de uma imagem para ser renderizada no editor, entre outros.
Todos herdam de um mesmo ancestral, o componente de página (ComponentePagina).
O programa deve permitir que as páginas sejam exportadas nos formatos PDF e DOC.
Cada componente de página tem suas particularidades, e deve ser exportado de maneira distinta.
Para adicionarmos essa capacidade de exportação, poderíamos adicionar um método de exportação
à classe de cada tipo de componente de página, mas talvez estivéssemos adicionando responsabilidade
demais aos componentes. É aí que entra o padrão Visitor. Nós podemos ter dois visitantes que podem fazer o serviço
de exportação, um cuidando de cada formato: o ExportadorPDF e o ExportadoDOC.
*/

// Vamos declarar a interface Visitante.
// Nela, temos uma assinatura de método de visita
// para cada tipo de componente de página
interface Visitante {
  visitarComponenteTexto(componente: ComponenteTexto): void;
  visitarComponenteCodigoFonte(componente: ComponenteCodigoFonte): void;
  visitarComponenteImagem(componente: ComponenteImagem): void;
}

// Criamos os visitantes concretos
class ExportadorPDF implements Visitante {
  visitarComponenteTexto(componente: ComponenteTexto): void {
    console.log("Exportando Componente de Texto em PDF: ", componente.getConteudo());
  }

  visitarComponenteCodigoFonte(componente: ComponenteCodigoFonte): void {
    console.log("Exportando Componente de Código Fonte em PDF: ", componente.getConteudo());
  }

  visitarComponenteImagem(componente: ComponenteImagem): void {
    console.log("Exportando Componente de Imagem em PDF: ", componente.getConteudo());
  }
}

class ExportadorDOC implements Visitante {
  visitarComponenteTexto(componente: ComponenteTexto): void {
    console.log("Exportando Componente de Texto em DOC: ", componente.getConteudo());
  }

  visitarComponenteCodigoFonte(componente: ComponenteCodigoFonte): void {
    console.log("Exportando Componente de Código Fonte em DOC: ", componente.getConteudo());
  }

  visitarComponenteImagem(componente: ComponenteImagem): void {
    console.log("Exportando Componente de Imagem em DOC: ", componente.getConteudo());
  }
}

// Declaramos a página e seus componentes
class Pagina {
  private componentes: ComponentePagina[] = [];

  adicionarComponente(componente: ComponentePagina): void {
    this.componentes.push(componente);
  }

  getComponentes(): ComponentePagina[] {
    return this.componentes;
  }

  // outros métodos...
}

// A interface ComponentePagina contém o método receberVisita
// para receber os visitantes que farão o trabalho de exportação
// do conteúdo do componente
interface ComponentePagina {
  receberVisita(visitante: Visitante): void;
  getConteudo(): string;
}

// Declaramos os filhos, que implementam a interface Anfitriao para
// receberem os visitantes. Cada componente deve saber o método
// correspondente que deve chamar do visitante.
// Ao chamar o método do visitante,
// o componente deve passar a si mesmo (this);
class ComponenteTexto implements ComponentePagina {
  private texto: string;

  constructor(texto: string) {
    this.texto = texto;
  }

  receberVisita(visitante: Visitante): void {
    visitante.visitarComponenteTexto(this);
  }

  getConteudo(): string {
    return this.texto;
  }

  // Outros métodos...
}

class ComponenteCodigoFonte implements ComponentePagina {
  private codigo: string;

  constructor(codigo: string) {
    this.codigo = codigo;
  }

  receberVisita(visitante: Visitante): void {
    visitante.visitarComponenteCodigoFonte(this);
  }

  getConteudo(): string {
    return this.codigo;
  }

  // Outros métodos...
}

class ComponenteImagem implements ComponentePagina {
  private source: string;

  constructor(source: string) {
    this.source = source;
  }

  receberVisita(visitante: Visitante): void {
    visitante.visitarComponenteImagem(this);
  }

  getConteudo(): string {
    return this.source;
  }

  // Outros métodos...
}

// Executando...

// Criamos a página
const pagina = new Pagina();

// Na medida que o usuário usa o editor, o programa vai criando os componentes
// e esses são adicionados à página.
// Para o exemplo, usaremos apenas um componente de cada tipo.
const componenteTexto = new ComponenteTexto('Texto qualquer');
pagina.adicionarComponente(componenteTexto);

const componenteCodigoFonte = new ComponenteCodigoFonte('if(else){ wtf(); }');
pagina.adicionarComponente(componenteCodigoFonte);

const imageSource = 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_7/SI_N64_SuperMario64.jpg';
const componenteImagem = new ComponenteImagem(imageSource);
pagina.adicionarComponente(componenteImagem);

// Se o usuário selecionar a opção de exportar em PDF do editor, basta
// que o código varra a lista dos componentes da página, passando o 
// visitante ExportadorPDF para cada componente de página

// Criamos o exportador de PDF
const exportadorPDF = new ExportadorPDF();

const componentes = pagina.getComponentes();

componentes.map((componente: ComponentePagina) => {
  componente.receberVisita(exportadorPDF);
});

// Repetimos o mesmo processo para exportar em DOC
const exportadorDOC = new ExportadorDOC();

componentes.map((componente: ComponentePagina) => {
  componente.receberVisita(exportadorDOC);
});
