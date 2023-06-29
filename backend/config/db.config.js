module.exports = {
    HOST: "localhost",
    port: 5001,
    USER: "postgres",
    PASSWORD: "123456",
    DB: "ostrov",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
};