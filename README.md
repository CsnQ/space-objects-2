# Space Objects - Angular, Services and Angular Google Maps - A work in progress 


## About this project
Every time an object burns up in the Earth's atmosphere and is observed, that observation is logged in the fireball data API (https://ssd-api.jpl.nasa.gov/doc/fireball.html). 
The aim of this project is to use Angular, Angular Google Maps, Typescript and Typescript services to display that data on a map and allow users to search that data for themselves

## Check List for creating v1.0
- [x] Setup connection to Google Maps API
- [x] Create Service that connects to the Fireball Data API
- [x] Get data from Fireball API and have that processed in another component
- [ ] 'Hydrate' data to provide cleaner dataset to components
- [ ] Write a function that will translate the DMS coordinates from the fireball data api into coordinates that can be processed by Google maps 
- [ ] Display the location data for fireballs on a map with a marker
- [ ] Create component that allows a user to call the API with different parameters (i.e a date)
- [ ] Dynamically update the page based on the user input
- [ ] Organise components on to one page
- [ ] Add styling 

## Key Technologies:
* Angular
* Typescript
* Angular Google Maps

## Key Angular Concepts:
* creation of components with inputs and outputs 
* creation of Services 
* connecting services to APIs

## Other Concepts:
* Creating Interfaces
* Promises in Javascript
* Processing JSON messages 

## Google Maps API
My API key is stored in a config folder I have added to my git ignore. This is to prevent misuse. If you want to utilise the map function you will need your own API key and you can map that information in the *app.module.ts*

# Angular Info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

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
