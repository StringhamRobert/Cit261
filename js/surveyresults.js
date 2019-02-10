function surveysays() {
    var surveyresults = localStorage.getItem("survey");
    console.log(surveyresults)
    var surveyobj = JSON.parse(surveyresults);
    
    var surveyfood = surveyobj.Food;
    document.getElementById("foodresult").innerHTML = surveyfood;
    var surveymovie = surveyobj.Movie;
    document.getElementById("movieresult").innerHTML = surveymovie
    var surveycolor = surveyobj.Color;
    document.getElementById("colorresult").innerHTML = surveycolor;
    var surveysuperhero = surveyobj.SuperHero;
    document.getElementById("superheroresult").innerHTML = surveysuperhero;
    var surveycharacter = surveyobj.Character;
    document.getElementById("characterresult").innerHTML = surveycharacter;
}