
const authControllers = require("../controllers/auth");

const { Router } = require("express");

const router = Router();

const authRoutes = (app) => {

    router.get("/login", authControllers.postSignIn);

    app.use("/auth", router);
}

module.exports = authRoutes;