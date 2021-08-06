const router = require("express").Router();
const { Ride } = require('../../models');
const withAuth = require('../../utils/auth');

// the /api/drive-routes endpoint

//driver

router.post('/', async (req, res) => {
  console.log(req.body);
  const body = req.body;
    try {
        const newDrive = await Ride.create({ 
            destination: req.body.destination,
            pickup: req.body.pickup, 
            price: req.body.price,
            description: req.body.description,
            num_seats: req.body.num_seats,
            driver_name: req.body.driver_name,
            car: req.body.car, 
            driver_id: req.session.driver_id,
        });
        res.json(newDrive);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
    try {
      const [updatedEl] = await Ride.update(req.body, {
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
  
  router.delete('/:id', async (req, res) => {
    try {
      const [updatedEl] = Ride.destroy({
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
  