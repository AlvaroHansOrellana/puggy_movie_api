const paginaWebController = require('../controllers/pagina.web.controllers');
const router = require('express').Router();

// GET http://localhost:3000/
router.get("/", paginaWebController.getHome);


// GET http://localhost:3000/film/:title
router.get("/film/:title", paginaWebController.getFilmByTitle); 


// POST http://localhost:3000/film
router.post("/film", paginaWebController.postFormByTitle);



module.exports = router;