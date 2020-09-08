
const logService = {

    logSignIn: async function(data) {

        try {

            console.log(data)
            return 200;
            
        } catch (err) {
            console.log(err); 
        }
    }

}

module.exports = logService;