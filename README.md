# MyReads Project

O MyReads é um projeto acadêmico desenvolvido no curso [Desenvolvedor React](https://br.udacity.com/course/react-nanodegree--nd019/) 
da [Udacity](https://br.udacity.com/). Esse projeto foi desenvolvido utilizando as metodologias de desenvolvimento BDD, TDD e a técnica de refatoração para gerar um código limpo e componentes reutilizáveis através do ReactJS.  

<p align="center">
  <img src="https://raw.githubusercontent.com/brolam/reactnd-myreads/master/docs/images/main_screen.png" width="600" />
</p>  

## Funcionalidade do aplicativo
Neste aplicativo, a página principal exibe uma lista de "estantes" (ou seja, categorias), cada uma das quais contém uma série de livros. As três estantes são:

- Currently Reading (lendo atualmente)
- Want to Read (quer ler)
- Read (já leu) 

## Instalação e execução:

* Instalando todas as dependências `npm install`
* Iniciando o servidor local `npm start`
* Executando os casos de testes `npm test`
* Visualizando a cobertura dos testes `npm run test -- .test --coverage`

## Estutura do projeto
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md
├── package.json 
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    |── components # Organizar todos os componentes reutilizáveis do aplicativo;
    │   ├──__tests__ # Organizar todos os testes( BDD e TDD ) do aplicativo;
    │   ├──Book.js # Exibir a imagem, título, autores e uma opção para alterar a "estante" do livro; 
    │   ├──BookImage.js # Exibir a imagem do Livro;
    │   ├──BookSearch.js # Pesquisar e adicionar um livro em uma "estante";
    │   ├──BookShelf.js # Exibir um tipo de "estante";
    │   ├──BookShelfChanger.js # Permitir ao usuário alterar o tipo da "estantes" do livro;
    │   ├──BookShelves.js # Exibir três tipos de "estantes": Currently Reading (lendo atualmente), Want to Read (quer ler) a Read (já leu);
    ├── App.css
    ├── App.js # Componente principal do aplicativo;
    ├── BooksAPI.js # API para fornecer as informações dos livros;
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css
    └── index.js
```

## Resultado dos testes unitários e de aceitacão.

<p align="center">
  <img src="https://raw.githubusercontent.com/brolam/reactnd-myreads/master/docs/images/test_coverage.png" width="600" />
</p>  

## Fundamentos de React
- Por que React;
- Renderização da UI com o React;
- Gerenciamento de estados;
- Renderizando a UI com dados externos;
- Gerenciando a localização no aplicativo com o React Router;
- PROJETO MyReads.