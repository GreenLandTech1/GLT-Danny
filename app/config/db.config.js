module.exports = {
    HOST: "localhost",
    USER: "danny",
    PASSWORD: "D&A31052018",
    DB: "testdb",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};