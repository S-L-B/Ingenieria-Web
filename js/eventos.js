
var autor=["Arturo","Miguel","Juan","Mario"]
var fecha=["mañana","hoy","sfds","dadfs"]
var ciudad=["Teruel","Zaragoza","Cuenca","Teruel"]
var lugar=["Universidad","Plaza","ss"]
var descri=[
  "gdasfdasfdasfdsaadddddddsfdsfdasfasdfdsfdddsssssddssssssddasfdsfdsfnadojsfbndjasbnfsssssssssssaffffdsffffffffffffffffffffffffffffffffffffffffffffffffffssssssssssssdsfadasf"
,"ssd","gdasdsfdsnkgdas","dfsfa"]
function eventos_individual(i){
  return'<div class="col-12" id=evento_individual>'+
    '<div class="col-12 evento_info">'+
      '<div class="col-2">'+autor[i]+'</div>'+
      '<div class="col-2">'+fecha[i]+'</div>'+
      '<div class="col-2">'+ciudad[i]+'</div>'+
      '<div class="col-2">'+lugar[i]+'</div>'+
    '</div>'+
    '<div class="extra_evento col-12" id="extra_evento">'+
      cadenaAdapt(descri[i])+
    '</div>'+
  '</div>'
}

function eventos() {
  total=autor.length
  document.getElementById("eventos").innerHTML=''
  for (var i = 0; i < total; i++) {
      document.getElementById("eventos").innerHTML += eventos_individual(i);
    }
}
function buscar(){
  total=autor.length
  var cadena =document.getElementById("buscar").value
  document.getElementById("eventos").innerHTML=""
  for (var i = 0; i < total; i++) {
    if (ciudad[i]==cadena || ""==cadena) {
      document.getElementById("eventos").innerHTML += eventos_individual(i);
    }
  }
}
function cadenaAdapt(i){
  var lon=i.length
  var newCadena="";
  var index=0;
  var fila=160;
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
