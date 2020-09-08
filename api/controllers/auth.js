
const authService = require("../../services/AuthService");

const postSignIn = async (req, res) => {

    try {
        
        const data = await authService.SignIn();

        return res.status(200).json(data);

    } catch (err) {
        
        logger.error(`Failed SignIn, Internal Server Error => ip: ${ req.ipAddress } email: ${ signInData.email }`);
    }
}

module.exports = {
    postSignIn,
}