function loopexample(){
    var birthday = "";
    for (i = 0; i < 36; i++) {
        birthday += i + "<br>";
    }
        document.getElementById("loopdemo").innerHTML = birthday;
}