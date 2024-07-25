const { getStatusData } = require("./status.services");

/**
 * @swagger
 * /status:
 *   get:
 *     description: Get status data from Onphone Provider
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Error
 */
const handleStatusData = (req, res) => {
  const data = req.query;
  getStatusData(data, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).send(error);
    }
    return res.status(200).send(result);
  });
};

module.exports = {
  handleStatusData,
};
