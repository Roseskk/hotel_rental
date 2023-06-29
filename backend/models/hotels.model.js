const {DataTypes} = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const Hotel = sequelize.define("hotel", {
        position: {
            type: DataTypes.STRING
        },
        hotel_name: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.STRING
        },
        rate: {
            type: DataTypes.STRING
        },
        coordinates: {
            type: DataTypes.JSON
        },
    });

    return Hotel;
};