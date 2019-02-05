'use strict'
var steamrequestURL = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";
var steamrequest = new XMLHttpRequest();
steamrequest.open('GET', steamrequestURL, true);
steamrequest.responseType = "text";
steamrequest.send();
steamrequest.onload = function() {
    var steamrequesttext = steamrequest.response;
    var steamdata = JSON.parse(steamrequesttext);
    
    var steamplayer = steamdata.pokemon[24].id;
    document.getElementById('steamnum').innerHTML = steamplayer;
    var pokemonheight = steamdata.pokemon[24].name;
    document.getElementById('pokename').innerHTML = pokemonheight;
    var pokemontype = steamdata.pokemon[24].type;
    document.getElementById('pokepic').innerHTML = pokemontype;
    var pokemonimage = steamdata.pokemon[24].img;
    document.getElementById('pokeimage').src = pokemonimage;
    var squirid = steamdata.pokemon[6].id;
    document.getElementById('squid').innerHTML = squirid;
    var squirheight = steamdata.pokemon[6].name;
    document.getElementById('squname').innerHTML = squirheight;
    var squirtype = steamdata.pokemon[6].type;
    document.getElementById('squpic').innerHTML = squirtype;
    var squirimage = steamdata.pokemon[6].img;
    document.getElementById('squimage').src = squirimage;
    
    
    
    
}