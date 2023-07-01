const {DataTypes} = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
        roomId: {
            type: DataTypes.INTEGER
        },
        content: {
            type: DataTypes.TEXT
        },
        rate: {
            type: DataTypes.INTEGER
        },
    });

    return Comment;
};