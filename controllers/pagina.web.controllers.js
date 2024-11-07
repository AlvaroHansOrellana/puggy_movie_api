// GET ABOUT
const getHome = async (req, res) => {
    
    try{
        res.status(200).render("home.pug", {page:'home', msj:"ABOUT US"}); 

    }catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
};


const getFilmByTitle = async (req, res) => {
    try {
        // Extract title from request parameters
        let titleFilm = req.params.title;
        const API_KEY = process.env.API_KEY;

        // Construct the URL for the OMDB API
        let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${titleFilm}`;

        // Make the API request
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
            // Render "film.pug" with the list of movies
            res.status(200).render("film.pug", {
                page: 'film',
                busqueda: titleFilm,
                films: data.Search // Pass the found movies to the view
            });
        } else {
            // Render an error message if no movies are found
            res.status(404).render("init.pug", {
                page: 'about',
                msj: 'No se encontraron resultados para la búsqueda',
                films: null
            });
        }
    } catch (error) {
        // Log and handle errors
        console.error(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
};


// POST form search button
const postFormByTitle = async (req, res) => {
    try {
        // Correct the typo from 'boby' to 'body'
        let titleFilm = req.body.film;
        const API_KEY = process.env.API_KEY;

        // Construct the URL for the OMDB API
        let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${titleFilm}`;

        // Make the API request
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
            // Render "film.pug" with the list of movies
            res.status(200).render("film.pug", {
                page: 'film',
                busqueda: titleFilm,
                films: data.Search // Pass the found movies to the view
            });
        } else {
            // Render an error message if no movies are found
            res.status(404).render("init.pug", {
                page: 'about',
                msj: 'No se encontraron resultados para la búsqueda',
                films: null
            });
        }
    } catch (error) {
        // Log and handle errors
        console.error(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
};



module.exports = {
    getHome,
    getFilmByTitle,
    postFormByTitle
}