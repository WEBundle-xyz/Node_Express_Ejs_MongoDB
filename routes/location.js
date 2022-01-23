const express = require('express');

const router = express.Router();

const lacationStorage = {
	locations: [],
};

router.post('/add-location', (req, res, next) => {
	locationStorage.locations.push({
		id: Math.random(),
		address: req.body.address,
		coord: { lat: req.body.lat, lng: req.body.lng },
	});
	res.json({ message: 'Stored location!' });
});

router.get('/add-location', (req, res, next) => {});


module.exports = router;


