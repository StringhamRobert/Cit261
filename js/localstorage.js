function surveystorage(){
    var ffood = document.forms["survey"]["food"].value;
    var fmovie = document.forms["survey"]["movie"].value;
    var fcolor = document.forms["survey"]["color"].value;
    var fsuperhero = document.forms["survey"]["superhero"].value;
    var fcharacter = document.forms["survey"]["favcharacter"].value;
    var surveydata = {Food: ffood, Movie: fmovie, Color: fcolor, SuperHero: fsuperhero, Character: fcharacter}
    var surveyconvert = JSON.stringify(surveydata)
    localStorage.setItem("survey", surveyconvert);
}