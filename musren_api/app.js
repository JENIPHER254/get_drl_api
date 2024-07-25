const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const callbackRouter = require("./apis/getCallback/callback.router.js");
const statusRouter = require("./apis/getStatuses/status.router.js");

const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Musren APIs",
      version: "1.0.0",
      description: "API to receive and handle DLR callbacks and statuses",
    },
    servers: [
      { url: "http://localhost:3000", description: "Development server" },
    ],
  },
  apis: ["./apis/*/*.js",],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use("/api", callbackRouter);
app.use("/api", statusRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
