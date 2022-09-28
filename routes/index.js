var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

const OWM_API_KEY = "13da5f1c748ccce942111344007f5cdb";

router.get("/movies", (req, res) => {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${OWM_API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      res.json({ result: true, movies: data });
    });
});

module.exports = router;
