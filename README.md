# TutorialAngularMaterial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

## Angular Material Setup

* `npm install --save @angular/material @angular/cdk @angular/animations`
* create a shared material module
* include a theme in style.css
* gesture support: `npm install --save hammerjs`
* add material icons: add link in index.html
* change to use scss: `ng config schematics.@schematics/angular:component.styleext scss`, and change all css to scss


## Angular cmds

    `ng new my-app`  create a new application "my-app"
    
    `ng s --open` start local server and monitoring changes
    
    `ng g c my-comp` generate a new component "my-comp"
    
    `ng g s my-svc` generate a new service "my-svc"
    
    `ng g m my-module --flat --module=app` generate a new module "my-module"
    
    `ng generate class hero` generate a standalone class called "Hero"
    
    `--dry-run` try the command but don't generate actual files
    
    `--flat` no additional folder structure
    
    `--no-spec` no spec file
    
    `--inline-style` no separate style file
    
    `--inline-template` no separate html template file

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
