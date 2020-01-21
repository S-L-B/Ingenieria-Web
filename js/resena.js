var total=0;
var usuario=["Paco","Antonio","Eva","María","Ana"];
var libro=["4321","Esta niebla insensata","Divina Comedia","4321","Hombres Buenos"];
var autor=["Paul Auster","Enrique Vila-Matas","Dante","Paul Auster","Arturo Perez-Reverte"]
var puntuacion=["4","5","2","3","1"];
var description=["Me ha encantado mucho, es muy algo diferentes a lo que he leido anteriormente.",
"Simplemente brillante","Un clásico que todo el mundo debe leer.",
"Prueba salto de lineaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
"Este autor siempre hace el mismo tipo de libros"];
var clic = [];

function resena_individual(i) {
   return '<div class="col-12" id="resena_individual" >'+
    '<div class="col-2" id="usuario">'+usuario[i]+'</div>'+
    '<div class="col-2" id="autor">'+autor[i]+'</div>'+
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
    document.getElementById("resena").innerHTML='<button onclick="vuelta()" class="btn world-btn">Volver</button>'+
      '<h5>Nueva Reseña</h5>'+
      '<div class="informacion">'+
      '<label>Usuario:</label><label>Manuel</label><br>'+
      '<label>Titulo:</label><input type="text" class="group" name="titulo" id="titulo" ><br>'+
      '<label>Autor:</label><input type="text" class="group" name="autor" id="autor" ><br>'+
      '<label>Puntuación: </label><input type="text" class="group" name="puntuacion" id="puntuacion" ><br>'+
      '<label>Descripción: </label><input type="text" class="group" name="descrip" id="descrip"><br>'+
        '<div id="boton_mod">'+
        '<button onclick="guardar()" class="btn world-btn">Guardar</button>'+
        '</div>'+
      '</div>'
}

function guardar(){
  auto="Manuel"
  libro.push(document.getElementById("titulo"));
  autor.push(document.getElementById("autor"));
  puntuacion.push(document.getElementById("puntuacion"));
  description.push(document.getElementById("descrip"));
  window.location.replace("resena.html");
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
  var fila=135;
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
