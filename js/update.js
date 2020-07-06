function update(){
  var arr = [];
  var usuario =document.cookie.split("=")[1]
  var query = firebase.database().ref("libros/"+usuario).orderByKey();
    query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      //var key = childSnapshot.key; // "ada"
      arr.push(childSnapshot.toJSON());
    });
  aux(arr)
  });

}

function aux(datos){
  //guardar en la base de datos
  var id = document.getElementById("idlibro").innerHTML;
  if (datos[id]._id == id) {
    cambio(datos,id)
  }else{
    var j=0
    for (var i = 0; i < datos.length; i++) {
      if (datos[i]._id == id) {
        j=i
        break;
      }
    }
    cambio(datos,j)
  }

}


function cambio(datos,id){

    var titulo = document.getElementById("titulo").value;
    var autor = document.getElementById("autor").value;
    var anno = document.getElementById("anno").value;
    var estado =document.getElementById("estado").value;

    var entrega =document.getElementById("entrega");
    var saga =document.getElementById("saga");
    var editorial =document.getElementById("editorial");
    var genero =document.getElementById("genero");


    datos[id].titulo=titulo
    datos[id].autor=autor
    datos[id].anno=anno
    datos[id].estado=estado


    if(entrega != null && typeof entrega!== "undefined" && entrega.length != 0){
      datos[id].entrega=entrega.value
    }
    if(saga != null && typeof saga!== "undefined" && saga.length != 0){
      datos[id].nombre_saga=saga.value
    }
    if(editorial != null && typeof editorial!== "undefined" && editorial.length != 0){
      datos[id].editorial=editorial.value
    }
    if(editorial != null && typeof editorial!== "undefined" && editorial.length != 0){
      datos[id].editorial=editorial.value
    }
    var usuario =document.cookie.split("=")[1]
    var dbs =firebase.database().ref('/libros/'+usuario).set(datos);
    vuelta()
}


function vuelta(){
  window.location.replace("lookBooks.html");
  //document.getElementById("contenedor").innerHTML ='<div class="row justify-content-center">'+
  //'<div class="col-12 "> <body onLoad="buildHtmlTable(\'#excelDataTable\')"><table id="excelDataTable" class="tabla-mirar" border="1"></table></div></div>'
}
