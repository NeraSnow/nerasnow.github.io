
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function myFunction() {
  document.getElementById("result").innerHTML = getCookie("game")
  // document.getElementById("time").innerHTML = getCookie("game")
  var text1 = document.getElementById('oldText').value.trim(); 
  var arr = text1.split("\n");
  var index = Math.floor((Math.random() * arr.length));
  var gameName = arr[index];
  document.getElementById('newText').value = gameName;

  var date = new Date();

  document.cookie = "game=" + gameName;

}



document.getElementById("result").innerHTML = getCookie("game")

// document.getElementById("time").innerHTML = getCookie("game")

const button = document.querySelector("button");

button.addEventListener("click", myFunction);


