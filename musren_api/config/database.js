const {createPool}= require("mysql");

const pool = createPool({
    port:"3306",
    host:"localhost",
    password:"",
    user:"root",
    database:"musren_callbacks",
    connectionLimit:10,
})

module.exports = pool;