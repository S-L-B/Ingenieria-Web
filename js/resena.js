var total=0;
var autor=["hola","adios","ee","aa","ada"];
var libro=["ayer","mañana","aa","da","312321"];
var puntiacion=["4","5","2","3","2"];
var description=["4","5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfe5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdawfaewfaewfaewfaewfewfawefafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdawfaewfaewfaewfaewfewfawef5fdasfeafaewfdf","2","ds","ed"];
var clic = [];

function resena_individual(i) {
   return '<div class="col-12" id="resena_individual" >'+
  '<div class="col-3" id="autor">'+autor[i]+'</div>'+
  '<div class="col-3" id="libro">'+libro[i]+'</div>'+
  '<div class="col-3" id="puntuacion">'+puntiacion[i]+'/5</div>'+
  '<div class="col-3">'+
    '<button onclick="divLogin('+i+')" id="boton_resena" class="btn world-btn">+'+
    '</button>'+
  '</div>'+
  '<div id="extra_resena'+i+'" class="extra_resena col-12" height:25px;">'+
  '</div>'+
  '</div>'
}

function resena() {
  total=autor.length
  document.getElementById("resena").innerHTML='<button onclick="nuevo()" id="boton_nuevo"'+
  ' class="btn world-btn">Volver</button>'

  for (var i = 0; i < autor.length; i++) {
    document.getElementById("resena").innerHTML += resena_individual(i);
  }
  clic = new Array(total);

}

function nuevo(){
    document.getElementById("resena").innerHTML="";
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
  var fila=70;
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
