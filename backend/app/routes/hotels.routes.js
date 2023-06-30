const express = require('express');
const {Op} = require("sequelize");
const router = express.Router();
const db = require("../../models/index");
const Hotel = db.hotels;
const Room = db.rooms;


// Position page route.
router.get('/position', function (req, res) {
    Room.belongsTo(Hotel)
    Hotel.hasMany(Room)
    Hotel.findAll({
        where: {
            position: {
                [Op.eq]: req.query.position
            }
        },
        include: [{
            model: Room,
            where: {
                dateFrom: {
                    [Op.lte]: new Date(req.query.dateFrom)
                },
                dateTo: {
                    [Op.gte]: new Date(req.query.dateTo)
                },
            }
        }]
    })
        .then((t) => res.json(t))
        .catch((err) => res.send(err))
})

router.get('/room',(req,res) => {
    Room.findAll().then(t => res.json(t))
})

module.exports = router;