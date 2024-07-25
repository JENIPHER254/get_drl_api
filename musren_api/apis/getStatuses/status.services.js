// getting required documents
const pool = require("./../../config/database");

/**
 * 
 * Handles Fetching Callback information from Musren DB
 * 
 * 
 */

const getCallbackData =(data, callback) =>{

    pool.query(
        "SELECT FROM dlr_callbacks",
        (error, results)=>{
            if(error){
                console.log(error);
                return callback(error)
            }
            return callback(null, data)
        }
    )
}
module.exports = {
    getCallbackData,
}