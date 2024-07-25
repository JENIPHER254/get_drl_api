// importing relevant files
const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express")

// initializing an express application
const app = express();

// setting up swagger
const SwaggerOptions = {
    SwaggerDefinition:{
        info: {
            title: "Musren Callback API",
            version: "1.0.0",
        },
    },
    // include the route file for swagger
    apis:["app.js","./controller/*.js"]
}

const swaggerDocs =swaggerJSDoc(SwaggerOptions);
console.log(swaggerDocs);
app.use(cors());
app.use(express.json())
app.use("/api-docs", swaggerUI.serve), swaggerUI.setup(swaggerDocs);


// getting routes
const getCallbacks = require("./apis/getCallback/callback.controller");
const getStatusInfo = require("./apis/getStatuses/status.controller.js")

//use routes
app.use("/callbacks", getCallbacks);
app.use("/status",getStatusInfo);

//listen on localhost 5000
app.listen(5000, () => console.log("listening to 5000"))
