[![Angular Logo](https://www.vectorlogo.zone/logos/angular/angular-icon.svg)](https://angular.io/) [![Electron Logo](https://www.vectorlogo.zone/logos/electronjs/electronjs-icon.svg)](https://electronjs.org/)

# Architecture Electron

Template Application to be used with [@ascendedco/architecture](https://www.npmjs.com/package/@ascendedco/architecture) accelerator libraries.

## Overview

### Objective

The goal of the Architecture project and its respective libraries, is to provide developers with the basis for a scalable and reliable building experience.

Primarily, by using this repository as a basis for Angular app development, you will reduce your learning curve and increase build quality.

Using the schematics will allow you to generate entire features that are well structured, make use of architecture best practices, and use modern front end techniques like uni-directional data flow (using NgRx).

Use of this project does not restrict developers from going beyond, or changing templates, but allows them to be more creative and balanced in their designs.

### Project Outline

Projects that make use of the Architecture project and its respective libraries, will have a folder structure that looks as follows:

- database (contains database gateway implementations)
- domain (contains network / database gateway abstractions)
- entity (contains entity representations)
- framework (contains platform-specific code)
- network (contains network gateway implementations)
- presentation (contains state / presentation logic, typically using the redux pattern)

## Usage

### CLI Commands

The following table contains the CLI commands that can be used to generate application architecture and user interfaces.

| Description | Command |
|---|---|
| Generate a **feature** (entity, domain, network, presentation) | ng g @ascendedco/schematics:feature |
| Generate a **component** (create, read, update, delete) | ng g @ascendedco/schematics:component |


Currently runs with:

- Angular v9.1.4
- Electron v8.2.5
- AngularFire v6.0.0
- Material v9.2.2
- NgRx v9.1.1
- Electron Builder v22.6.0

With this template, you can:

- Run your app in a local development environment with Electron & Hot reload
- Run your app in a production environment
- Package your app into an executable file for Linux, Windows & Mac

Hot reload only pertains to the renderer process. The main electron process is not able to be hot reloaded, only restarted.

## To build for development

- **in a terminal window** -> npm start

Voila! You can use your Angular + Electron app in a local development environment with hot reload !

The application code is managed by `main.ts`. In this sample, the app runs with a simple Angular App (http://localhost:4200) and an Electron window.
The Angular component contains an example of Electron and NodeJS native lib import.
You can disable "Developer Tools" by commenting `win.webContents.openDevTools();` in `main.ts`.

## Included Commands

|Command|Description|
|--|--|
|`npm run ng:serve:web`| Execute the app in the browser |
|`npm run build`| Build the app. Your built files are in the /dist folder. |
|`npm run build:prod`| Build the app with Angular aot. Your built files are in the /dist folder. |
|`npm run electron:local`| Builds your application and start electron
|`npm run electron:linux`| Builds your application and creates an app consumable on linux system |
|`npm run electron:windows`| On a Windows OS, builds your application and creates an app consumable in windows 32/64 bit systems |
|`npm run electron:mac`|  On a MAC OS, builds your application and generates a `.app` file of your application that can be run on Mac |

**Your application is optimised. Only /dist folder and node dependencies are included in the executable.**

## You want to use a specific lib (like rxjs) in electron main thread ?

YES! You can do it! Just by importing your library in npm dependencies section (not **devDependencies**) with `npm install --save`. It will be loaded by electron during build phase and added to your final package. Then use your library by importing it in `main.ts` file. Quite simple, isn't it ?

## Browser mode

Maybe you want to execute the application in the browser with hot reload ? Just run `npm run ng:serve:web`.
**Note that you can't use Electron or NodeJS native libraries in this case.** Please check `providers/electron.service.ts` to watch how conditional import of electron/Native libraries is done.

## Branch & Packages version

- Angular 4 & Electron 1 : Branch [angular4](https://github.com/ascendedco/architecture-electron/tree/angular4)
- Angular 5 & Electron 1 : Branch [angular5](https://github.com/ascendedco/architecture-electron/tree/angular5)
- Angular 6 & Electron 3 : Branch [angular6](https://github.com/ascendedco/architecture-electron/tree/angular6)
- Angular 7 & Electron 3 : Branch [angular7](https://github.com/ascendedco/architecture-electron/tree/angular7)
- Angular 8 & Electron 7 : Branch [angular8](https://github.com/ascendedco/architecture-electron/tree/angular8)
- Angular 9 & Electron 8 : (master)
