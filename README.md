# Learning Angular

This repository is used to learn Angular.

## Getting Started

To get this project running on your computer follow the steps below. See [Deployment](#deployment) section for notes on how to deploy the project.

### Prerequisites

First of all you have to install [node](https://nodejs.org). Please, install the **current** version.

### Installing

Onece you have node installed in your computer, you have to install ```Angular CLI``` using ```npm install -g @angular/cli ```.

### Creating your first project

Onece you have Angular CLI installed, you have to create a project ```ng new your-project-name```

### Installing dependencies

To install dependencies like ```Bootstrap```, you can add the headers in your index.html or you can do it through the CLI.

1. Install Boostrap: In the project folder type ```npm install --save bootstrap```
2. Link the styling sheet in the ```.angular-cli.json``` file.
```js
"styles": [
	"../node_modules/bootstrap/dist/css/bootstrap.min.css",
	"styles.css"
],
```

## Deployment

For a quick deployment and test of your application, you have to navigate into your project folder and run the command ```ng serve```, this will start your application in a local server.  
To check that everything is working, open a browser and enter the address given by Angular CLI (typically ```localhost:4200```). The app will automatically reload if you change any of the source files.

## Authors

***Matías Dell'Oso*** - [mdelloso](https://github.com/mdelloso)