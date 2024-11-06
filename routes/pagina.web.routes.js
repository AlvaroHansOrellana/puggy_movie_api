const paginaWebController = require('../controllers/pagina.web.controllers');
const router = require('express').Router();

// GET http://localhost:3000/about
router.get("/about", paginaWebController.getAbout);


// GET http://localhost:3000/location
router.get("/location", paginaWebController.getLocation);


// GET http://localhost:3000/mission
router.get("/mission", paginaWebController.getMission);


// GET http://localhost:3000/contact
router.get("/contact", paginaWebController.getContact);



module.exports = router;