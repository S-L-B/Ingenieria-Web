
var autor=["Anonimo","Miguel","Manuel Gonzalez","Mario"]
var fecha=["22/01/2020-9:00","23/03/2020-9:00","04/03/2020","22/05/2020-9:00"]
var ciudad=["Cuenca","Zaragoza","Toda España","Teruel"]
var lugar=["Por determinar","Plaza España","","Plaza el Torico"]
var descri=[
  "gdasfdasfdasfdsaadddddddsfdsfdasfasdfdsfdddsssssddssssssddasfdsfdsfnadojsfbndjasbnfsssssssssssaffffdsffffffffffffffffffffffffffffffffffffffffffffffffffssssssssssssdsfadasf"
,"Tendrá lugar el encuentro de la firma de libros donde en autor blablabla de su último libro blablabla"
,"Manuel Gonzalez saca a la venta su primer libro Búnker","Proyección de la pelicula 'Blade Runner' inspirada en el libro '¿Sueñan los androides con ovejas eléctricas?' de Philip K.Dick "]
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
