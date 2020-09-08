
const { Router } = require("express");

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const uploadRoutes = require("./routes/upload");
const commonRoutes = require("./routes/common");
const agentRoutes = require("./routes/agent");
const armyRoutes = require("./routes/army");
const campaignRoutes = require("./routes/campaign");

const loadRoutes = () => {

    const router = Router();

    authRoutes(router);
    uploadRoutes(router);
    commonRoutes(router);
    agentRoutes(router);
    armyRoutes(router);
    adminRoutes(router);
    campaignRoutes(router);

    return router;
}

module.exports = loadRoutes;
