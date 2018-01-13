import * as errorHandler from "errorhandler";

const app = require("./express");

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

const server = app.listen(app.get("port"), () => {
    console.log(("  API is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop \n");
});

export = server;