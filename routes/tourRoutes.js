const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

// This runs before the routes, it is a middleware for routes that has and :id parameter
router.param('id', tourController.checkID);

router.route('/').get(tourController.getAllTours).post(tourController.createTour);
router.route('/:id').get(tourController.getTour).patch(tourController.updateTour).delete(tourController.deleteTour);

module.exports = router;
