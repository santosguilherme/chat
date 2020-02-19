# Chat frontend

This is the SPA module of the Chat application, its responsible to send and receive the users' messages and configure some personal preferences.

## Technologies

- React é uma biblioteca para desenvolver os elementos visuais da aplicação.
- create-react-app é a ferramenta que faz o bootstrapp da aplicação react.
- Redux é a biblioteca que gerencia os estados da aplicação .
- Redux-persist é a biblioteca responsável por sincronizar parte do estado da aplicação com o localStorage.
- Redux-saga é a biblioteca que está conectada ao servidor via o socket.io-client e envia os novos dados para o Redux atualizar o estado atual.
- Material-UI é uma biblioteca de componentes seguindo a implementação do Google Material IO, foi utilizada para não precisar implementar componentes (inputs, botões, etc) e de controle de tema.
- Styled-components é uma biblioteca de estilização visual e foi utilizada para customizar os componentes da aplicação e também para montar o layout estrutural.
- React-intl é a biblioteca de internacionalização.

jest é uma biblioteca de exeução e asserção de testes automatizados
react testing library é a biblioteca de renderização dos componentes nos testes automatizados
As bibliotecas eslint, stylelint e sort-package-json foram configuradas para manter um padrão de código na aplicação.
As bibliotecas lint-staged e husky são utilizadas para executar o `lint` do código antes de cada commit.
http-server é uma biblioteca que executa um servidor HTTP, permitindo servir o projeto após o build localmente.


## Features

A interface foi baseada em alguns elementos da aplicação web do WhatsApp.

### Connection


### Sending and receiving messages


### Settings


## Getting started
Before executing the commands, make sure that you are using the necessary versions specified in the root requirements section.

The commands must be executed in the **frontend** module directory.

You can access the folder via terminal, at the root of the repository, run in the terminal:

```sh
cd frontend
```

### Folder structure
This is what each folder correlates to:

// TODO
```
chat
├── backend/         # Module with the application backend server
└── frontend/        # Module with the application's frontend layer (SPA)
```

### Running Locally
After you clone the project, perform the following steps to run the project locally.

In a terminal window, install and start the server:

```sh
# Install the dependencies
yarn install

# Start local development
yarn start

# open http://localhost:3000 to view it in the browser.
# the server will reload if you make edits
# errors will show up in the console
```

### Running the tests

In a terminal window:

```sh
# Start local tests
yarn test

# the tests will reload if you make edits
# errors will show up in the console
```

### Running the lint

In a terminal window:

```sh
# Start the lints validations
yarn lint

# errors will show up in the console
```

### Building and Running locally

In a terminal window:

```sh
# Start the project after the build
yarn build:serve

# open http://localhost:3000 to view it in the browser
```

### Building

In a terminal window:

```sh
# Start the project after the build
yarn build:serve

# the files will be ready on the build directory
```

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Improvements

### Connection to server lost
Implement some timeouts and attempts to make new connections to the WebSocket server, when the application initializes the server is not available, or when the server becomes unavailable in the middle of using the application.

### Implement e2e tests
Use [Cypress](https://github.com/cypress-io/cypress) to implement e2e tests, but mock the WebSocket so you don't need an available server when running e2e tests.

### Storybook
Use the [Storybook](https://github.com/storybookjs/storybook) to document what are the components used in the application and how to use them.

### Improve the Desktop Layout
The layout in desktop resolutions can be improved, as there is a lot of white space in the settings screen.

The suggestion would be to use something like the [Material UI Drawer](https://material-ui.com/components/drawers/#persistent-drawer) and render the settings screen along with the Chat screen on the desktop resolution.

### Server URL
An important point would be to parameterize the server URL configuration via an environment variable, suggestion for use would be the [custom environment variables](https://create-react-app.dev/docs/adding-custom-environment-variables/).

