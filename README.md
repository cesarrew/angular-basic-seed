# angular-basic-seed

A very simple seed that includes only the essential to start a project with Angular and PrimeNG.

Note: If you need a seed to a project that uses Java EE 7 on the back-end, use https://github.com/cesarrew/angular-wildfly-basic-seed.

## Features

- JiT (Just-in-Time) compiler to speed up de development using "start" task.
- AoC (Ahead-of-Time) compiler to optimize production builds using "build" task.
- Very simple structure, only a few files to configure the project.
- Some Visual Studio Code settings, like NPM tasks definition.

## Used tools and libraries

- NPM, Webpack 2, TypeScript, Angular and PrimeNG.

## How to configure

- All resources files, like modules, scripts and CSS should be declared in src/resources.ts file. Scripts and styles should not be manually included in index.html.

## How to start

Note that NPM 3 and NodeJS 6 or higher is required to build the project.

```bash
# Installs all dependencies declared in package.json.
$ npm install

# Starts development server. All changes will be in sync with the browser. The app will be available at http://localhost:3000.
$ npm start

# Updates dist folder with the ready production files.
$ npm run build
```

## Main files

- `package.json`: Used to configure the project, dependencies and tasks.
- `tsconfig.json`: Used to configure TypeScript transpilation options.
- `config/webpack.dev.js`: Used to configure development build.
- `config/webpack.prod.js`: Used to configure production build.
- `src/resources.ts`: Used to declare all resources, except polyfills. These are declared in polyfills.ts.
- `src/polyfills.ts`: Used to declare polyfills.

## Questions? Open a Issue!