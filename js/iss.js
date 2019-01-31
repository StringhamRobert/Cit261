'use strict'
var issrequestURL = "//api.open-notify.org/iss-now.json";
var issrequest = new XMLHttpRequest();
issrequest.open('GET', issrequestURL, true);
issrequest.responseType = "text";
issrequest.send();
issrequest.onload = function() {
    var issrequesttext = issrequest.response;
    var issdata = JSON.parse(issrequesttext);
    
    var nasalat = issdata.iss_position.latitude;
    document.getElementById('isslat').innerHTML = nasalat;
    var nasalong = issdata.iss_position.longitude;
    document.getElementById('isslong').innerHTML = nasalong;
    
    
    
    
    
    
}