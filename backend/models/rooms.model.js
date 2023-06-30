const {DataTypes} = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("room", {
        hotelId: {
            type: DataTypes.INTEGER
        },
        isWifi: {
            type: DataTypes.BOOLEAN
        },
        isSmoking: {
            type: DataTypes.BOOLEAN
        },
        isPool: {
            type: DataTypes.BOOLEAN
        },
        isFitness: {
            type: DataTypes.BOOLEAN
        },
        isReserved: {
            type: DataTypes.BOOLEAN
        },
        isSafe: {
            type: DataTypes.BOOLEAN
        },
        isTv: {
            type: DataTypes.BOOLEAN
        },
        image: {
            type: DataTypes.BOOLEAN
        },
        cost: {
            type: DataTypes.BOOLEAN
        },
        type: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        dateFrom: {
            type: DataTypes.DATE
        },
        dateTo: {
            type: DataTypes.DATE
        },
        userId: {
            type: DataTypes.INTEGER
        }
    });

    return Room;
};