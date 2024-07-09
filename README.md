# VTE_System
This is a VTE management system

## Installation

### React Frontend Project

*Prerequisite*

1. Make sure in the directory `frontend`
2. Make sure NodeJS is installed on your device.(Quick installation [<u>here</u>](https://nodejs.org/en/download/package-manager))

Use package manager `npm` to install all the dependencies need for the project

```shell
npm install
```

Start the project(Default port number: 3000)

```shell
npm start
```

### Spring Boot Backend Project

### Configuration

Create a `Config.java` file to configure the interaction with the frontend project. For the details, please refer to the source code.

#### Bug Fixes

1. Wrong configuration of the collection name will cause the model file to be not recognized!

2. If you have default configuration of other database, especially the relational databases, please add this line to your `application.properties` file

   ```xml
   spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
   ```

## MongoDB

Refer to the `application.properties` file for detailed configuration.

