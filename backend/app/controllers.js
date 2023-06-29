// const db = require("../models");
// const Hotel = db.hotels;
// const Op = db.Sequelize.Op;

// Retrieve all Tutorials from the database.
// exports.findAll = (req, res) => {
//     console.log(req)
//     const position = req.query.position;
//     let condition = position ? { position: { [Op.iLike]: `%${position}%` } } : null;
//
//     Hotel.findAll({ where: condition })
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while retrieving tutorials."
//             });
//         });
// };