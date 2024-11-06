// GET ABOUT
const getAbout = async (req, res) => {
    
    try{
        res.status(200).render("main.pug", {page:'about', msj:"ABOUT US"}); 

    }catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
};


// GET LOCATION
const getLocation = async (req, res) => {
    
    try{
        res.status(200).render("location.pug", {msj:"Our Places"}); 

    }catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
};


// GET MISSION
const getMission = async (req, res) => {
    
    try{
        res.status(200).render("mission.pug", {msj:"Our Places"}); 

    }catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
};


// GET MISSION
const getContact = async (req, res) => {
    
    try{
        res.status(200).render("contact.pug", {msj:"US"}); 

    }catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
};

module.exports = {
    getAbout,
    getLocation,
    getMission,
    getContact    
}