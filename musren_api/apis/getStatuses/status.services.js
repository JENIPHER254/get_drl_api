// getting required documents
const pool = require("./../../config/database");

/**
 * Handles fetching status data from the Musren database.
 *
 * @param {Object} data - The query parameters used for filtering.
 * @param {Function} callback - The callback function to handle the result or error.
 */
const getStatusData = (data, callback) => {
  // Construct the SQL query based on the provided data.
  const query = "SELECT * FROM dlr_callbacks";
  const queryParams = [data.doneDate, data.submitDate]; // Add more parameters as needed

  pool.query(query, queryParams, (error, results) => {
    if (error) {
      console.log(error);
      return callback(error);
    }
    return callback(null, results); // Return the actual query results
  });
};

module.exports = {
  getStatusData,
};
