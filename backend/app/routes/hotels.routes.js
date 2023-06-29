const express = require('express');
const {Op} = require("sequelize");
const router = express.Router();
const db = require("../../models/index");
const {formatDate} = require("../../utils/dateUtil");
const Hotel = db.hotels;


// Position page route.
router.get('/position', function (req, res) {
    console.log(req.query.position)
    Hotel.findAll({
        where: {
            [Op.and]: [{
                position: {
                    [Op.eq]: req.query.position
                },
                dateFrom: {
                    [Op.lte]: new Date(req.query.dateFrom)
                },
                dateTo: {
                    [Op.gte]: new Date(req.query.dateTo)
                },
            }]
        }
    })
        .then((t) => res.json(t))
        .catch((err) => res.send(err))
})

module.exports = router;