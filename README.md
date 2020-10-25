# Clase_54_Proyectos_3_4
Ejemplo de pruebas unitarias

# Unit Tests

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)

<!-- ABOUT THE PROJECT -->
## About The Project
Example of unit tests using Jasmine, Karma and Phantom, contains the configuration of the different reports that Karma has, such as the console report and the code coverage report.

* uses Istanbul for coverage
* uses Jasmine for aspects
* uses PhantomJS as default development browser

### Built With
The frameworks that you'll use to  built the project
* [Karma](https://karma-runner.github.io)
* [Jasmine](https://jasmine.github.io)
* [Phantom](https://phantomjs.org/related-projects.html)

<!-- GETTING STARTED -->
## Getting Started

Clone the project using git clone:
```sh
$ git clone https://github.com/AcamicaDWFS/Clase_54_Proyectos_3_4.git
```

### Prerequisites
Node inatalled.

### Installation

1. Install NPM packages
```sh
npm install
```


<!-- USAGE EXAMPLES -->
## Usage

Once you download all the dependencies you can run the unit tests with:

```sh
npm test
```

You'll see the tests execution on command line, the reporter will be generated under `coverage` directore 
