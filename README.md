# Visory

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

This is a simple web application that helps users browse and discover events that they might be interested in. Leverages the Ticketmaster event discovery API (https://developer.ticketmaster.com/api-explorer/).

The architecture of the application is as follows:

- There are four components and one service:
  - AppComponent: The root component of the application. It contains the main layout of the application.
  - DateRangePickerComponent: A component that allows users to select a date range.
  - LocationSearchComponent: A component that allows users to search for events by location.
  - EventListComponent: A component that displays a list of events that match the selected date range and location.
  - SharedService: A service that provides shared data between the components. This allows the components to communicate the date range and location selected by the user.

## Requirements

Please ensure that you have the following requirements before proceeding:

- Node.js and npm installed on your system.
- Install angular cli globally using the following command:

```
npm install -g @angular/cli
```

- A Ticketmaster API key. You can obtain one from the Ticketmaster developer portal (https://developer.ticketmaster.com/api-explorer/).
- Add the API key to the following file: src/environment/environment.ts

```
export const environment = {
  production: false,
  apiKey: 'your_api_key',
};

```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
