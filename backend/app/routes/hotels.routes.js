const express = require('express');
const {Op} = require("sequelize");
const router = express.Router();
const db = require("../../models/index");
const Hotel = db.hotels;


// Home page route.
router.get('/', function (req, res) {
    Hotel.findAll({
        where: {
            position: {
                [Op.eq]: req.body.position
            }
        }
    })
        .then((t) => res.json(t))
        .catch((err) => res.send(err))
})

module.exports = router;