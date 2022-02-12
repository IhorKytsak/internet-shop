const { Router } = require('express');
const InternetShop = require('./models');
const url = require('url');
const cors = require('cors');

const router = Router();
router.use(cors());

router.get('/', async (req, res) => {
  try {
    const urlParams = url.parse(req.url, true);

    let findJSON = {};

    if (urlParams.query.year) {
      findJSON.year = urlParams.query.year;
    }

    if (urlParams.query.model) {
      findJSON.model = urlParams.query.model;
    }

    if (urlParams.query.price) {
      urlParams.query.price === 'less'
        ? (findJSON.price = { $lt: 600 })
        : (findJSON.price = { $gte: 600 });
    }

    const data = await InternetShop.find(findJSON);
    res.send(data);
  } catch (e) {
    console.log(e, e.message);
    res.status(500).json({ message: 'Something went wrong!' });
  }
});

module.exports = router;
