var total=0;
var usuario=["Paco","Antonio","Eva","María","Ana"];
var libro=["4321","Esta niebla insensata","Divina Comedia","4321","Hombres Buenos"];
var autor=["Paul Auster","Enrique Vila-Matas","Dante","Paul Auster","Arturo Perez-Reverte"]
var puntuacion=["4","5","5","3","1"];
var description=["Me ha encantado mucho, es muy algo diferentes a lo que he leido anteriormente.",
"Simplemente brillante","Un clásico que todo el mundo debe leer.",
"Prueba salto de lineaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa lineaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalineaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalineaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalineaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa lineaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa lineaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa prueba prueba prueba prueba aaaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
"Este autor siempre hace el mismo tipo de libros"];
var clic = [];

function resena_individual(i) {
   return '<div class="col-12" id="resena_individual" >'+
    '<div class="col-3" id="usuario">'+usuario[i]+'</div>'+
    '<div class="col-3" id="autor">'+autor[i]+'</div>'+
    '<div class="col-2" id="libro">'+libro[i]+'</div>'+
    '<div class="col-2" id="puntuacion">'+puntuacion[i]+'/5</div>'+
    '<div class="col-2">'+
      '<button onclick="divLogin('+i+')" id="boton_resena" class="btn world-btn">+'+
      '</button>'+
    '</div>'+
    '<div id="extra_resena'+i+'" class="extra_resena col-12" height:25px;">'+
    '</div>'+
  '</div>'
}

function resena() {
  total=usuario.length
  document.getElementById("resena").innerHTML='<button onclick="nuevo()" id="boton_nuevo"'+
  ' class="btn world-btn">Nueva Reseña</button>'
  for (var i = 0; i < total; i++) {
    document.getElementById("resena").innerHTML += resena_individual(i);
  }
  clic = new Array(total);
}

function nuevo(){
    document.getElementById("resena").innerHTML=

    '<button onclick="vuelta()" class="btn world-btn">Volver</button>'+


    '<section class="contact-area section-padding-100">'+
        '<div class="container">'+
            '<div class="row justify-content-center">'+
              '<div class="col-12 col-md-10 col-lg-8">'+
                '<div class="contact-form">'+
                  '<h5>Nueva Reseña</h5>'+
                  '<form action="#" method="post">'+
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
                          '<input type="number" name="puntuacion" min="0"'+
                          'max="5" id="puntuacion" required>'+
                          '<span class="highlight"></span>'+
                          '<span class="bar"></span>'+
                          '<label>Puntuacion</label>'+

                        '</div>'+
                      '</div>'+


                      '<div class="col-12">'+

                        '<div class="group">'+
                          '<textarea name="Text1" cols="40" rows="5"></textarea>'+
                          '<span class="highlight"></span>'+
                          '<span class="bar"></span>'+
                          '<label>Descripción</label>'+

                        '</div>'+
                      '</div>'+



                          '<div id="boton_mod">'+
                            '<button onclick="guardar()" class="btn world-btn">Guardar</button>'+
                          '</div>'+
                        '</div>'+


                        '</div>'+
                '</form>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</section>'
}

function guardar(){
  usuario.push("Manuel");
  libro.push(document.getElementById("titulo").value);
  autor.push(document.getElementById("autor").value);
  puntuacion.push(document.getElementById("puntuacion").value);
  description.push(document.getElementById("descrip").value);
  resena();
}

function vuelta() {
  window.location.replace("resena.html");
}

function divLogin(i){
  var cambio="extra_resena"+i;
   if(clic[i]!=1){
   document.getElementById(cambio).innerHTML = cadenaAdapt(description[i]);
   document.getElementById(cambio).style.background = "cornflowerblue";
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

function cadenaAdapt(i){
  var lon=i.length
  var newCadena="";
  var index=0;
  var fila=140;
  if (lon > fila) {
    while (lon > fila) {
      newCadena+=i.substr(index,fila)+"<br>";
      index+=fila;
      lon-=fila;
    }
    newCadena+=i.substr(index,i.length+1);
    return newCadena;
  }else {
    newCadena=i;
    return newCadena;
  }
}
