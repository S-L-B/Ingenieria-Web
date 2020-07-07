
function maineventos(){
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
  return'<div class="col-12 single-blog-post" >'+
    '<div class="col-12 evento_info">'+
      '<div class="col-2">'+arr.autor+'</div>'+
      '<div class="col-2">'+arr.fecha+'</div>'+
      '<div class="col-2">'+arr.ciudad+'</div>'+
      '<div class="col-2">'+arr.lugar+'</div>'+
    '</div>'+
    '<div class="extra_evento  col-12" id="extra_evento">'+
      arr.comentario+
    '</div>'+
    '<br>'+
  '</div>'
}

function eventos(arr) {
  total=arr.length
  document.getElementById("eventos").innerHTML=''
  for (var i = 0; i < total; i++) {
      document.getElementById("eventos").innerHTML += eventos_individual(arr[i]);
    }
  document.getElementById("eventos").innerHTML +='<div class="col-12 single-blog-post evento_info" id="eventoaux">'+
  '</div>'
}


function mainbuscar(){
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
  document.getElementById("eventos").innerHTML +='<div class="col-12 single-blog-post evento_info" id="eventoaux">'+
  '</div>'
}

function newevento(){
  eventoaux.style.visibility='visible'
  eventoaux.style.height='250px'
document.getElementById("eventoaux").innerHTML +=
  '<div class="group"><input type="text" name="autor" id="autor">'+
    '<span class="highlight"></span>'+
    '<span class="bar"></span>'+
    '<label>Organizador</label>'+
  '</div>'+

  '<div class="group"><input type="text" name="fecha" id="fecha">'+
    '<span class="highlight"></span>'+
    '<span class="bar"></span>'+
    '<label>Fecha</label>'+
  '</div>'+

  '<div class="group"><input type="text" name="ciudad" id="ciudad">'+
    '<span class="highlight"></span>'+
    '<span class="bar"></span>'+
    '<label>Ciudad</label>'+
  '</div>'+

  '<div class="group"><input type="text" name="lugar" id="lugar">'+
    '<span class="highlight"></span>'+
    '<span class="bar"></span>'+
    '<label>Lugar</label>'+
  '</div>'+

  '<div class="group">'+
    '<textarea name="Text1" cols="400" id="comentario" rows="5"></textarea>'+
    '<span class="highlight"></span>'+
    '<span class="bar"></span>'+
    '<label>Descripción</label>'+
  '</div>'+
  '<br>'+
  '<br>'+

  '<div class="col-12">'+
      '<button onclick="guardarevento()" class="btn world-btn">Guardar</button>'+
  '</div>'
}


function guardarevento(){
  var arr = [];
  var query = firebase.database().ref("eventos").orderByKey();
    query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      //var key = childSnapshot.key; // "ada"
      arr.push(childSnapshot.toJSON());
    });
  guardareventoaux(arr)
  });

}

function guardareventoaux(arr){

  //guardar en la base de datos
  var autor = document.getElementById("autor").value;
  var fecha = document.getElementById("fecha").value;
  var ciudad = document.getElementById("ciudad").value;
  var lugar =document.getElementById("lugar").value;
  var comentario =document.getElementById("comentario").value;


  var insert ='{"autor": "'+autor+'",'+
      '"fecha": "'+fecha+'",'+
      '"ciudad": "'+ciudad+'",'+
      '"lugar": "'+lugar+'",'+
      '"comentario": "'+comentario+'"}'
  console.log(insert)

  var obj = JSON.parse(insert)
  arr.push(obj);
  var dbs =firebase.database().ref('/eventos/').set(arr);
  window.location.replace("eventos.html");
}
