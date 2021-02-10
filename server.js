const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' }); //this retrieves our config file contents  into  process.env

//Connect the app to the database
mongoose
  .connect(`${process.env.DATABASE}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('Connection to Database was successful 🔥 🔥 🔥 ');
  })
  .catch((err) => {
    console.log('Error Occured' + err + '🎆🎆🎆');
  });

const app = require('./app.js');
const PORT = process.env.PORT || 3300;

//listen for connction
app.listen(PORT, () => {
  console.log('Ogbeni, Server don dey run oo.....');
});
