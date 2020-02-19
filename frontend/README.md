# Chat frontend

This is the SPA module of the Chat application, its responsible to send and receive the users' messages and configure some personal preferences.

The interface was based on some elements of the WhatsApp web application.

## Technologies

- [React](https://github.com/facebook/react) is a library for developing the visual elements of the application.
- [Create React App](https://github.com/facebook/create-react-app) is the tool that bootstraps the React application.
- [Redux](https://github.com/reduxjs/redux) is the library that manages the states of the application, it is responsible for updating the application with the new states, for example, when a value in the user settings is changed or a new message is received, Redux updates its state and the application is changed accordingly.
- [Redux-persist](https://github.com/rt2zz/redux-persist) is the library responsible for synchronizing part or all of the redux store with localStorage, it is used to store the user's settings in localStorage.
- [Redux-saga](https://github.com/redux-saga/redux-saga) is the library that is connected to the server via [socket.io-client](https://github.com/socketio/socket.io-client) and sends the new data to Redux to update the current state of the application.
- [Material-UI](https://github.com/mui-org/material-ui) is a component library following the implementation of [Google Material](https://material.io/) guides, it was used to avoid having to implement components (inputs, buttons, etc.) and theme control (dark and light).
- [Styled-components](https://github.com/styled-components/styled-components) is a visual styling library and was used to customize the application's components and also to build the structural layout.
- [React-intl](https://github.com/formatjs/react-intl) is the internationalization library.
- [Jest](https://github.com/facebook/jest) is an automated test execution and assertion library.
- [React Testing Library](https://github.com/testing-library/react-testing-library) is a React component rendering library to automated tests.
- The [eslint](https://github.com/eslint/eslint), [stylelint](https://github.com/stylelint/stylelint) and [sort-package-json](https://github.com/keithamus/sort-package-json) libraries were configured to maintain a code standard in the application.
- The [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky) libraries are used to `lint` the code before each commit.
- [http-server](https://github.com/http-party/http-server) is a library that runs an HTTP server, allowing you to serve the project after the build locally.

## Getting started
Before executing the commands, make sure that you are using the necessary versions specified in the root requirements section.

The commands must be executed in the **frontend** module directory.

You can access the folder via terminal, at the root of the repository, run in the terminal:

```sh
cd frontend
```

For all available tasks check the [package.json](package.json) file.

### Folder structure
This is what each folder correlates to:

```
chat/frontend/src
├── app/            # Initial application component that also changes structural things based on the state of the application (settings and messages)
├── commons/        # Common files in the application's features, such as structural components and utils functions
├── features/       # Screen components linked to features and application store (Containers)
├── locale/         # Directory with language files for translation
└── redux/          # Directories with files that are part of the configuration, management of the application state and side effects
```

The components were developed with the intention of being close to the other necessary components that are used only in that context.

Within each component folder, there may be a `styles` folder, with all components being styled-components only or overwriting an existing style.

There may also be a `components` folder which is where the components that were created to compose and create the component will be.

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
# Build the project
yarn build

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

