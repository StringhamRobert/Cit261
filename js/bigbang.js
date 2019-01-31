'use strict'
var bbtrequestURL = "http://api.tvmaze.com/singlesearch/shows?q=big-bang-theory&embed=episodes";
var bbtrequest = new XMLHttpRequest();
bbtrequest.open('GET', bbtrequestURL, true);
bbtrequest.responseType = "text";
bbtrequest.send();
bbtrequest.onload = function() {
    var bbtrequesttext = bbtrequest.response;
    var bbtdata = JSON.parse(bbtrequesttext);
    
    var nasalat = issdata.iss_position.latitude;
    document.getElementById('isslat').innerHTML = nasalat;
    var nasalong = issdata.iss_position.longitude;
    document.getElementById('isslong').innerHTML = nasalong;
    
    
    
    
    
    
}