function introducir(){
  var arr = [];

  var query = firebase.database().ref("libros").orderByKey();
    query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      //var key = childSnapshot.key; // "ada"
      arr.push(childSnapshot.toJSON());

    });

  aux(arr)

});

  //console.log(query)

}

function aux(datos){
  index=datos[datos.length-1]._id+1
  //guardar en la base de datos
  var titulo = document.getElementById("titulo").value;
  var autor = document.getElementById("autor").value;
  var anno = document.getElementById("anno").value;
  var estado =document.getElementById("estado").value;

  var entrega =document.getElementById("entrega").value;
  var saga =document.getElementById("saga").value;
  var editorial =document.getElementById("editorial").value;
  var genero =document.getElementById("genero").value;

  var insert ='{"_id": '+index+","+
      '"titulo": "'+titulo+'",'+
      '"autor": ["'+autor+'"],'+
      '"anno": '+anno+","+
      '"estado": "'+estado+'"'

  /*
  set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  */
  if(entrega.length != 0){
    insert+=","+'"entrega": "'+entrega+'"'
  }

  if(saga.length != 0){
    insert+=","+'"nombre_saga": "'+saga+'"'
  }
  if(editorial.length != 0){
    insert+=","+'"editorial": "'+editorial+'"'
  }
  if(genero.length != 0){
    insert+=","+'"genero": "'+genero+'"'
  }

  insert+="}"
  console.log(insert)
  var obj = JSON.parse(insert)
  datos.push(obj);
  var dbs =firebase.database().ref('/libros/').set(datos);
  vuelta()
}

function vuelta(){
  window.location.replace("lookBooks.html");
  //document.getElementById("contenedor").innerHTML ='<div class="row justify-content-center">'+
  //'<div class="col-12 "> <body onLoad="buildHtmlTable(\'#excelDataTable\')"><table id="excelDataTable" class="tabla-mirar" border="1"></table></div></div>'
}
