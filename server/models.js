const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    img: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    about: { type: String, required: true },
    price: { type: Number, required: true },
    year: { type: String, required: true },
    model: { type: String, required: true }
  },
  { collection: 'catalog' }
);

module.exports = model('InternetShop', schema);
