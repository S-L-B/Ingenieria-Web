/*var total=0;
var usuario=["Paco","Antonio","Eva","María","Ana"];
var libro=["4321","Esta niebla insensata","Divina Comedia","4321","Hombres Buenos"];
var autor=["Paul Auster","Enrique Vila-Matas","Dante","Paul Auster","Arturo Perez-Reverte"]
var puntuacion=["4","5","5","3","1"];
var description=["Me ha encantado mucho, es muy algo diferentes a lo que he leido anteriormente.",
"Simplemente brillante","Un clásico que todo el mundo debe leer.",
"Prueba salto de lineaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa lineaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalineaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalineaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalineaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa lineaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa lineaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa prueba prueba prueba prueba aaaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
"Este autor siempre hace el mismo tipo de libros"];*/
var clic = [];

function mainresena(){
  var arr = [];
  var query = firebase.database().ref("resena").orderByKey();
    query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      //var key = childSnapshot.key; // "ada"
      arr.push(childSnapshot.toJSON());

    });

  resena(arr)

  });

}







function resena_individual(i,index) {
   return '<div class="col-12 single-blog-post" id="resena_individual" >'+
   '<br>'+
    '<div class="col-3" id="usuario">'+i.usuario+'</div>'+
    '<div class="col-3" id="autor">'+i.autor+'</div>'+
    '<div class="col-2" id="libro">'+i.titulo+'</div>'+
    '<div class="col-2" id="puntuacion">'+i.puntuacion+'/5</div>'+
    '<div class="col-2">'+
      '<button onclick="divLogin('
        +index+','+
        '\''+i.comentario+'\''+
        ')" id="boton_resena" class="btn world-btn">+'+
      '</button>'+
    '</div>'+
    '<div id="extra_resena'+index+'" class="single-blog-post extra_resena col-12" >'+
    '</div>'+
  '</div>'
}

function resena(arr) {
  total=arr.length
  document.getElementById("resena").innerHTML='<button onclick="nuevo()" id="boton_nuevo"'+
  ' class="btn world-btn">Nueva Reseña</button>'
  for (var i = 0; i < total; i++) {
    document.getElementById("resena").innerHTML += resena_individual(arr[i],i);
  }
  clic = new Array(total);
}


function nuevoaux(){
  var arr = [];
  var query = firebase.database().ref("resena").orderByKey();
    query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      //var key = childSnapshot.key; // "ada"
      arr.push(childSnapshot.toJSON());

    });

  guardar(arr)

  });

}


function nuevo(){

  var usuario =document.cookie.split("=")[1]
  if (typeof usuario == "undefined" ) {
    document.getElementById("resena").innerHTML='<h1> No te has registrado</h1>'
  }else{
    document.getElementById("resena").innerHTML=

    '<button onclick="vuelta()" class="btn world-btn">Volver</button>'+


    '<section class="contact-area section-padding-100">'+
        '<div class="container">'+
            '<div class="row justify-content-center">'+
              '<div class="col-12 col-md-10 col-lg-8">'+
                '<div class="contact-form">'+
                  '<h5>Nueva Reseña</h5>'+
                    '<div class="row">'+


                      '<div class="col-12 col-md-6">'+
                        '<div class="group">'+
                          '<input type="text" name="titulo" id="titulo" required>'+
                          '<span class="highlight"></span>'+
                          '<span class="bar"></span>'+
                          '<label>Titulo</label>'+

                        '</div>'+
                      '</div>'+

                      '<div class="col-12 col-md-6">'+
                        '<div class="group">'+
                          '<input type="text" name="autor" id="autor" required>'+
                          '<span class="highlight"></span>'+
                          '<span class="bar"></span>'+
                          '<label>Autor</label>'+

                        '</div>'+
                      '</div>'+

                      '<div class="col-12 col-md-6">'+
                        '<div class="group">'+
                          '<input type="number" name="puntuacion" id="puntuacion" min="0"'+
                          'max="5" id="puntuacion" required>'+
                          '<span class="highlight"></span>'+
                          '<span class="bar"></span>'+
                          '<label>Puntuacion</label>'+

                        '</div>'+
                      '</div>'+


                      '<div class="col-12">'+

                        '<div class="group">'+
                          '<textarea name="Text1" cols="40" id="comentario" rows="5"></textarea>'+
                          '<span class="highlight"></span>'+
                          '<span class="bar"></span>'+
                          '<label>Descripción</label>'+

                        '</div>'+
                      '</div>'+



                          '<div id="boton_mod">'+
                            '<button onclick="nuevoaux()" class="btn world-btn">Guardar</button>'+
                          '</div>'+
                        '</div>'+


                        '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</section>'
    }
}

function guardar(arr){
  var usuario =document.cookie.split("=")[1]
  var insert ='{"usuario": "'+usuario+'",'+
      '"titulo": "'+document.getElementById("titulo").value+'",'+
      '"autor": "'+document.getElementById("autor").value+'",'+
      '"puntuacion": '+document.getElementById("puntuacion").value+","+
      '"comentario": "'+document.getElementById("comentario").value+'"'+
      "}"
  //console.log(insert)
  var obj = JSON.parse(insert)
  arr.push(obj);
  var dbs =firebase.database().ref('/resena/').set(arr);

  vuelta();
}

function vuelta() {
  window.location.replace("resena.html");
}

function divLogin(i,comentario){
  var cambio="extra_resena"+i;
   if(clic[i]!=1){
   document.getElementById(cambio).innerHTML = comentario;
   document.getElementById(cambio).style.background = "#dcfcd4";
   //document.getElementById(cambio).style.opacity = ".0";
   clic[i] = 1;
   } else{
      document.getElementById(cambio).innerHTML = "";
      document.getElementById(cambio).style.background = "none";

      //document.getElementById(cambio).style.margin.bottom: = "250px";
      //document.getElementById(cambio).style.opacity = "1";
    clic[i] += 1;
   }
}
