const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use('/catalog', require('./roures'));
app.use(cors());

const PORT = 5000;
const mongoUri =
  'mongodb+srv://myPassword@cluster0.p3q2j.mongodb.net/InternetShop?retryWrites=true&w=majority';

async function start() {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    app.listen(PORT, () => console.log('app has been started...'));
  } catch (e) {
    console.log('Server error', e.message);
    process.exit(1);
  }
}
start();
