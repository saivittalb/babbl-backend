# Babbl Backend

[![License](https://img.shields.io/badge/License-BSL-blue.svg)](https://opensource.org/licenses/BSL-1.0)
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![GitHub followers](https://img.shields.io/github/followers/saivittalb.svg?style=social&label=Follow)](https://github.com/saivittalb?tab=followers)
[![Twitter Follow](https://img.shields.io/twitter/follow/saivittalb.svg?style=social)](https://twitter.com/saivittalb)

<p align="center"><img src="https://user-images.githubusercontent.com/36305142/122650928-2f3dc480-d153-11eb-91dd-fa9b36da173a.png"></p>

A backend repository for Babbl – The Bible of Microblogging. A simple microblogging and social networking service which users post and interact with messages known as "babbles."

The microservice is deployed on Heroku. The URL is listed in this repo's description. Since Heroku makes an app go to sleep after being idle for a long time, wait for 10 seconds to get a response for the first request. Also, use responsibly and don't spam my database.

Tech stack used – MongoDB, Express, Node.js and Jest.

This is the backend repository for Babbl. If you are looking for the frontend repository, [click here](https://github.com/ShanmukhSreenivas/babbl-frontend).

Developed as a part of an end project for the course CS 474 – Enterprise Software Architecture.

###### Note

Following versions were used in the development of this project:

* Node.js 14.16.1.
* Node Package Manager (npm) 7.12.1.
* Editor used was Visual Studio Code 1.57.1.

## Table of contents

* [License](#license)
* [Instructions to setup locally](#instructions-to-setup-locally)
  * [Installing modules](#installing-modules)
* [Running the servers](#running-the-servers)
  * [Testing the APIs](#testing-the-apis)
* [APIs and their behavior](#apis-and-their-behavior)
* [Validations](#validations)
* [Contributing](#contributing)

## License

This project is licensed under the Boost Software License 1.0, a simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

<p align="center"> Copyright (c) 2021 Sai Vittal B. All rights reserved.</p>

## Instructions to setup locally

### Installing modules

* Run the following commands in the terminal/console window in the project directory:

```bash
$ cd babbl-backend

$ npm install
```

### Running the servers

* Create a ```.env``` file at the root of the project.
* Setup a MongoDB Atlas cluster under free tier plan and add it to the ```.env``` file under the following schema:

```env
MONGOURI="<YOUR-CONNECTION-STRING-HERE>"
```

* Also, add the following contents to the ```.env``` file under the following schema:

```env
NODE_ENV=development
JWT_SECRET=<ANY-SECRET-KEY>
JWT_EXPIRE=<EXPIRATION-DURATION> // Example: JWT_EXPIRE=30d
URI="<YOUR_FRONTEND-URL-HERE-FOR-ENABLING-CORS>"
```

* Run the following commands in the terminal/console window to run Babbl Microservice:

```bash
$ cd babbl-backend

$ npm start
```

* In case if you want to run the application dynamically whenever file changes in the directory are detected, replace ```node``` with ```nodemon```. For example,

```bash
$ nodemon src/server.js
```

### Testing the APIs

* You can run the basic unit tests written for all the controller functions using Jest by entering the following command:

```bash
$ npm run test
```

## APIs and their behavior

Since numerous number of routes are available for various purposes, it is advised to check the ```/src/routes``` directory to view all the available APIs. The functionality of the APIs are self-explanatory and their behavior can be understood by navigating to the respective controller functions in ```/src/controller``` directory.

## Validations

Basic unit tests are written for all the existing functions using Jest which can be viewed in the ```/test``` directory.

All the APIs perform necessary validations. These validations are self-explainable and can be seen in the codebase with comments wherever required.

All the corner cases are addressed appropriately. If you discover any failing test cases, you are encouraged to open an issue or a PR regarding it.

## Contributing

* Fork this project by clicking the ```Fork``` button on top right corner of this page.
* Open terminal/console window.
* Clone the repository by running following command in git:

```bash
$ git clone https://github.com/[YOUR-USERNAME]/babbl-backend.git
```

* Add all changes by running this command.

```bash
$ git add .
```

* Or to add specific files only, run this command.

```bash
$ git add path/to/your/file
```

* Commit changes by running these commands.

```bash
$ git commit -m "DESCRIBE YOUR CHANGES HERE"

$ git push origin
```

* Create a Pull Request by clicking the ```New pull request``` button on your repository page.

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/saivittalb/)
[![ForTheBadge powered-by-electricity](http://ForTheBadge.com/images/badges/powered-by-electricity.svg)](http://ForTheBadge.com)

<p align="center"> Copyright (c) 2021 Sai Vittal B. All rights reserved.</p>
<p align="center"> Made with ❤ by <a href="https://github.com/saivittalb">Sai Vittal B</a></p>
