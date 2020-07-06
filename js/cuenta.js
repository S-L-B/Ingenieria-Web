
function newUser(){
    var arr = [];
    var query = firebase.database().ref("usuarios").orderByKey();
      query.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        //var key = childSnapshot.key; // "ada"
        arr.push(childSnapshot.toJSON());
      });
    guardar(arr)
    });
}

function guardar(arr){
  var usuario =document.getElementById("user").value;
  var pass1 =document.getElementById("pass1").value;
  var pass2 =document.getElementById("pass2").value;

  if (pass1===pass2) {
    var pass = stringToHash(pass1)
    var json =JSON.parse('{ "usuario":"'+usuario+'","pass":"'+pass+'"}');
    arr.push(json);
    var dbs =firebase.database().ref('/usuarios/').set(arr);
  }
  window.location.replace("iniciosesion.html");

}






function registrar(){
    var arr = [];
    var query = firebase.database().ref("usuarios").orderByKey();
      query.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        //var key = childSnapshot.key; // "ada"
        arr.push(childSnapshot.toJSON());
      });
    registraraux(arr)
    });
}


function registraraux(arr){
  var usuario =document.getElementById("user").value;
  var pass =document.getElementById("pass").value;
  var hash = stringToHash(pass)

  var total = arr.length

  var i=0
  while(i< total) {

    if (arr[i].usuario == usuario && hash == arr[i].pass) {
      document.cookie = "username="+usuario;
      console.log("OK")
      break;
    }
    i++
  }
  window.location.replace("index.html");
}




function stringToHash(string) {
    var hash = 0;
    if (string.length == 0) return hash;
    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
}
