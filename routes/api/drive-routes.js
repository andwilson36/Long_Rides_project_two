const router = require("express").Router();
const { Driver } = require('../../models');
const withAuth = require('../../utils/auth');

// the /api/drive-routes endpoint

//driver

router.post('/', withAuth, async (req, res) => {
  console.log(req.body);
  const body = req.body;
    try {
        const newDrive = await Driver.create({ 
            destination: req.body.destination,
            pickup: req.body.pickup, 
            price: req.body.price,
            description: req.body.description,
            numberRiders: req.body.numberRiders,
            car: req.body.car, 
            driver_id: req.session.driver_id,
        });
        res.json(newDrive);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
      const [updatedEl] = await Driver.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
  
      if (updatedEl > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const [updatedEl] = Driver.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (updatedEl > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  