
function maineventos(){
  var dbs =firebase.database().ref("eventos");
  var arr = [];
  var query = firebase.database().ref("eventos").orderByKey();
    query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      //var key = childSnapshot.key; // "ada"
      arr.push(childSnapshot.toJSON());

    });

  eventos(arr)

  });

}



function eventos_individual(arr){
  return'<div class="col-12" id=evento_individual>'+
    '<div class="col-12 evento_info">'+
      '<div class="col-2">'+arr.autor+'</div>'+
      '<div class="col-2">'+arr.fecha+'</div>'+
      '<div class="col-2">'+arr.ciudad+'</div>'+
      '<div class="col-2">'+arr.lugar+'</div>'+
    '</div>'+
    '<div class="extra_evento col-12" id="extra_evento">'+
      arr.comentario+
    '</div>'+
  '</div>'
}

function eventos(arr) {
  total=arr.length
  document.getElementById("eventos").innerHTML=''
  for (var i = 0; i < total; i++) {
      document.getElementById("eventos").innerHTML += eventos_individual(arr[i]);
    }
}


function mainbuscar(){
  var dbs =firebase.database().ref("eventos");
  var arr = [];
  var query = firebase.database().ref("eventos").orderByKey();
    query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      //var key = childSnapshot.key; // "ada"
      arr.push(childSnapshot.toJSON());

    });

  buscar(arr)

  });

}

function buscar(arr){
  total=arr.length
  console.log(total)
  var cadena =document.getElementById("buscar").value
  document.getElementById("eventos").innerHTML=""
  for (var i = 0; i < total; i++) {
    if (arr[i].ciudad==cadena || ""==cadena) {
      document.getElementById("eventos").innerHTML += eventos_individual(arr[i]);
    }
  }
}
