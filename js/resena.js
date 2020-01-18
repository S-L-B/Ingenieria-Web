
var autor=["hola","adios","ee"];
var libro=["ayer","mañana","aa"];
var puntiacion=["4","5","2"];
var description=["4","5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfe5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdawfaewfaewfaewfaewfewfawefafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdawfaewfaewfaewfaewfewfawef","2"];

function resena_individual(i) {
   return '<div class="col-12" id="resena_individual" >'+
  '<strong class="autor col-3">'+autor[i]+'</strong>'+
  '<strong class="libro col-3">'+libro[i]+'</strong>'+
  '<strong class="puntuacion col-3">'+puntiacion[i]+'/5</strong>'+
  '<button onclick="divLogin('+i+')" id="boton_resena" class="btn world-btn col-3">+</button>'+
  '<div id="extra_resena'+i+'" style="opacity:.0; height:50px;">'+
    cadenaAdapt(description[i])+
  '<div>'+
  '</div>'
}

function resena() {
  for (var i = 0; i < autor.length; i++) {
    document.getElementById("resena").innerHTML += resena_individual(i);
  }
}


var clic = 2;

function divLogin(i){
  var cambio="extra_resena"+i;
   if(clic==1){
   document.getElementById(cambio).style.height = "50px";
   document.getElementById(cambio).style.opacity = ".0";

   clic = clic + 1;
   } else{
      document.getElementById(cambio).style.height = "350px";
      //document.getElementById(cambio).style.margin.bottom: = "250px";
       document.getElementById(cambio).style.opacity = "1";
    clic = 1;
   }
}
function cadenaAdapt(i){
  var lon=i.length
  var newCadena="";
  var index=0;
  var fila=65;
  while (lon > fila) {
    newCadena+=i.substr(index,fila)+"<br>";
    index+=fila;
    lon-=fila;
  }
  newCadena+=i.substr(index,i.length+1);
  return newCadena;
}
