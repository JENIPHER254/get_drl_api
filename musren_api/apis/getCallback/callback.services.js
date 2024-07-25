const pool = require("./../../config/database");

/**
 * Handles the insertion of DLR callback data into the database.
 *
 * @param {Object} data - The data object containing callback information.
 * @param {Function} callback - The callback function to handle the result or error.
 */
const insertDLRCallback = (data, callback) => {
  const {
    doneDate,
    submitDate,
    errorCode = null,
    shortMessage,
    status,
    messageID,
    mobile,
  } = data;

  pool.query(
    "INSERT INTO dlr_callbacks (done_date, submit_date, error_code, short_message, status, message_id, mobile) VALUES (?,?,?,?,?,?,?)",
    [doneDate, submitDate, errorCode, shortMessage, status, messageID, mobile],
    (error, result) => {
      if (error) {
        return callback(error);
      }
      return callback(null, "DLR received");
    }
  );
};

module.exports = {
  insertDLRCallback, // Ensure the name matches
};
