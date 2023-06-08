const RSClient = require("./lib/rsclient");
//

//console.log(RSClient);
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




