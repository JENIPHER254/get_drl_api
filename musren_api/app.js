// importing relevant files
const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const router = require("./apis/getCallback/callback.router.js");

// initializing an express application
const app = express();

// setting up swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Musren APIs",
      version: "1.0.0",
      description: "API To receive and handle DLR callbacks",
    },
    servers: [
      { url: "http://localhost:3000", description: "Development server" },
    ],
  },
  // include the route file for swagger
  apis: ["./apis/getCallback/callback.controller.js"], // Ensure the path is correct
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Use router
app.use("/api", router);

const PORT = process.env.PORT || 3000;
// listen on localhost port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
