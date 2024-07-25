const { insertDLRCallback } = require("./callback.services");

/**
 * @swagger
 * /dlr:
 *   get:
 *     description: Get callback data from Onphone Provider
 *     parameters:
 *       - in: query
 *         name: doneDate
 *         schema:
 *           type: string
 *         required: true
 *         description: The date when the callback was done
 *       - in: query
 *         name: submitDate
 *         schema:
 *           type: string
 *         required: true
 *         description: The date when the message was submitted
 *       - in: query
 *         name: errorCode
 *         schema:
 *           type: string
 *         required: false
 *         description: Error code if any
 *       - in: query
 *         name: shortMessage
 *         schema:
 *           type: string
 *         required: true
 *         description: The short message content
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *         required: true
 *         description: The status of the callback
 *       - in: query
 *         name: messageID
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the message
 *       - in: query
 *         name: mobile
 *         schema:
 *           type: string
 *         required: true
 *         description: The mobile number associated with the callback
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Error
 */
const handleDLRCallback = (req, res) => {
  const data = req.query;

  insertDLRCallback(data, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).send(error);
    }
    return res.status(200).send(result);
  });
};
module.exports = {
  handleDLRCallback,
};
