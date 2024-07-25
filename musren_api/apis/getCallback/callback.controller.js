const { insertDLRCallback } = require("./callback.services");

/**
 * @swagger
 * /dlr:
 *   get:
 *     description: Get callback data from Onphone Provider
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
