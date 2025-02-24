
const mongoose = require('mongoose');
const { MONGODB_URI, PORT } = require('./utils/config');
const app = require('./app')



mongoose.connect(MONGODB_URI)

    .then(() => {
        console.log('Connectin to Mongoose...');

    app.listen(PORT, () => {
      console.log(`server is running @ http://localhost:3001`);
    });

    })
   .catch((error) => {
       console.log('Error connection  to Mongoose', error);
   })

