# Overview

This project has been built based on Laravel's UI (https://github.com/laravel/ui) reactjs preset.

# Dev environment

- [nodejs/npm (version 16.14.1 LTS as of time of writing this guide)](https://nodejs.org/en/)

# Project dependencies

- [React](https://reactjs.org)
- [React Router](https://reactrouter.com)
- [Recoil (react's state management library)](https://recoiljs.org/)
- [Bootstrap](https://getbootstrap.com)
- [Shoelace](https://shoelace.style)
- [Blueprintjs](https://blueprintjs.com)
- [Animate CSS Grid](https://github.com/aholachek/animate-css-grid)

# How to run

- install nodejs/npm

## run with hot reload (browser auto reload assets everytime you make changes)

- open cmd and run following command

```
cd path/to/project
npm install
npm run hot
```

- open another cmd and run following command
```
cd path/to/project
npm run web-sever
```

- open web browser and access [`http://localhost:3000`](http://localhost:3000)

## run with watch (assets will be compiled automatically but you will have to refresh browser manually to see changes)

- open cmd and run following command

```
cd path/to/project
npm install
npm run watch
```

- open `public/index.html` and modify `line 13` and `line 18`, change `//localhost:8080` into `//localhost`
- open another cmd and run following command
```
cd path/to/project
npm run web-sever
```

- open web browser and access [`http://localhost:3000`](http://localhost:3000)

# create new pages and components

- new page will be registered in `resources/js/Router.jsx`, component file for page will be created in `resources/js/`
- please refer to other components and official documentation to know how to compose new components

# styles

- since all major browsers support css variable (custom property) natively, please refrain from using sass's variable and use native variable whenever possible
- refer to `_variables.scss` and other `.scss` file to know how to define and use css variables

# note

- when incorporate with other back-end like laravel, there's no need to keep `public/web-server.js`, this one only serve the purpose of standalone front-end dev workflow

