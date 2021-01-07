'use strict'

const app = require("./app");
const port = process.env.port || 8080


app.listen(port, () => {
    console.log("servidor corriendo en el puerto 8080");
    });
