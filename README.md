rsclient

rsclient is a lightweight and versatile RESTful API client for Node.js. It provides a simple and intuitive interface for making HTTP requests to RESTful APIs, handling responses, and managing request configurations.

Features :

1. Supports making HTTP requests using various methods: GET, POST, PUT, DELETE, and more.
2. Handles request and response data in JSON format.
3. Easily sets request headers and query parameters.
4. Supports authentication through headers or query parameters.
5. Handles response data and error handling.
6. Configurable timeout for requests.
7. Allows intercepting requests and responses.
8. Lightweight and easy to integrate into Node.js projects.



Installation :

You can install rsclient using a package manager like npm or yarn. Run the following command in your project directory:

shell -> npm install rsclient

            or

shell -> yarn add rsclient



Usage :

To use rsclient in your Node.js application, require the module:

javascript  -> const rsclient = require('rsclient');


Example : 

Here is an example to demonstrate how rsclient can be used:

const RSClient = require("rsclient");

const client = new RSClient('http://localhost:3000/employees');

client.setBasicAuth("admin", "test");

client.get().then(

    (response)  => {

        console.log(response);

    },
    (err) => {

      console.log(err);

    }
);