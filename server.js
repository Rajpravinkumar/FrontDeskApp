const express = require("express");
const mongoose = require('mongoose');
const { MONGODB_URI , PORT } = require('./utils/config');
const app = express();


app.get("/", (request, response) => {
  response.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`server is running @ http://localhost:3001`);
});

mongoose.connect(MONGODB_URI)

    .then(() => {
        console.log('Connectin to Mongoose...');
    })
   .catch((error) => {
       console.log('Error connection  to Mongoose', error);
   })

