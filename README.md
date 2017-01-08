# codenight
The Intention of this project is to explain the Angular 2 practically.

Here I have used Typescript for coding the application. TypeScript is a superset of JavaScript. It extends the Javascript and brings options like static typing, classes, interfaces. That means the JavaScript code is understood by the TypeScript. You can Take any JavaScript File and change the extension to .ts and run it through the TypeScript parser, and it will be able to understand. One of the most prominent features of the TypeScript is its optional typing system. Utilizing the types however makes the code clean and can be easily understandeable. Another important feature of typescript is its "interfaces" which can be used as types throughout the application.

ex : interface SampleType {
          member1 : number,
          member2 : string,
          member3 : boolean
     }

There are two main ways to compile the TypeScript and serve an Angular 2 application and that is via "webpack" and "systemjs".The process of compiling the TypeScript is called Transpiling and is done by the typescript compiler(tsc).

<b>Typings</b>

Typescript forces you to define the types before using them. This has great advantages as any errors are detected at the compile time rather than at the run time.

But our application is going to use a lot of Third Party Javascript libraries in our application. Being written in Javascript, they do not have types defined in them. The typescript compiler will throw an error as it does not recognize them.

This where type definition files come into play. They provide the type information to these javascript libraries. We need to download type definition files for each of these libraries. That is done using the typings.

<b>Webpack:</b>
Webpack is a module loader that takes the modules with dependencies and generates static assets.

Webpack is a bundler, which scans your web application looking for javascript files and merges them into one ( or more) big file. This helps the browser to download a single file upon the user request. Otherwise the browser has to download all the files individually and its a time waste process. Webpack has the ability to bundle any kind of file like JavaScript, CSS, SASS, LESS, images, HTML, & fonts etc. Webpack also comes with Development Server that supports hot module reloading.

<b>tsconfig.json:</b>
This file is used to tell the angular 2 how to compile our typescript code and what compiler we have to use. There are two important properties that we need to configure in this file those are <b>target</b> and <b>module</b> . Here we set <b>target : ES5</b> and <b>module : commonjs</b>. That means we are setting our ECMAScript version to ES5 and indicating that we want to generate our modules in the <b>commonjs</b> format.


Rxjs or Reactive Extensions(Rx) : is a library for composing asynchronous and event-based programs using Observable sequences and LINQ-style query operator.

Zone.js : is used for change detection.

Core-js : is a ES6 polyfill for typescript.

@Component annotation above in a component declaration is called as the class decorator it provides the Metadata about the component. Angular uses this Metadata to create the view.

