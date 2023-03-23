# toolbox-challenge

## Introduction

This application has a frontend and an API. It fulfills the function of the main component of obtaining secret files data.

### Running the two artifacts with Docker Compose

The following command will do everything needed, including creating and maintaining the services:

```sh
$ docker-compose up
```

When you see that the console indicates that everything has been created and is ready, you can check the status of the api at [http://localhost:8080/status](http://localhost:8080/status) and you can visualize the frontend at [http://localhost:3000](http://localhost:3000).

## About the API

The application is made from scratch. The technology stack is full Javascript with [NodeJS](https://nodejs.org).

The project uses the following dependencies (libraries), fundamental for the solution:

- [**N**odeJs](https://nodejs.org): Runtime environment
- [**E**xpress](http://expressjs.com): Backend framework

### Setting

#### Requirements

1. [Node.js](https://nodejs.org) installed.

#### Installing dependencies (libraries)

First, enter the api folder of the project:

```sh
$ cd challenge-toolbox/api
```

Then install the dependencies:

```sh
$ npm install
```

### Running the application

```sh
$ npm run start
```

The api will run in the following url: `http://localhost:8080`.

### Live app monitoring

The app has two endpoints that respond to an http status code: `200` to monitor if it is alive.

> `GET:` [http://localhost:3000/status](http://localhost:3000/status) > `HEAD:` [http://localhost:3000/status](http://localhost:3000/status)

### Viewing the documentation

The app has an endpoint to view the documentation of the services. It was generated with [Swagger](https://swagger.io/).

> [http://localhost:8080/documentation](http://localhost:4000/documentation)

## About the Frontend

The application was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The project uses the following dependencies (libraries), fundamental for the solution:

- [**R**eactJs](https://es.reactjs.org/)
- [**B**ootstrap](https://getbootstrap.com/)

### Setting

#### Requirements

1. [Node.js](https://nodejs.org) installed.

#### Installing dependencies (libraries)

First, enter the api folder of the project:

```sh
$ cd challenge-toolbox/frontend
```

Then install the dependencies:

```sh
$ npm install
```

### Running the application

```sh
$ npm run start
```

The app will run in the following url: `http://localhost:3000`.

### Running the tests

```sh
$ npm run test
```
