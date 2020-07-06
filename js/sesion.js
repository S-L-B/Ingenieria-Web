
function estadosesion(){
  var usuario =document.cookie.split("=")[1]
  if (typeof usuario == "undefined" ) {
    document.getElementById("sesion").innerHTML=
    '<nav class="navbar navbar-expand-lg">'+
      '<div class="collapse navbar-collapse" id="worldNav">'+
        '<ul class="navbar-nav ml-auto">'+
            '<li class="nav-item active" >'+
                '<a class="nav-link" href="iniciosesion.html">Iniciar Sesión </a>'+
            '</li>'+
        '</ul>'+
      '</div>'+
    '<nav>'
  }else{
    document.getElementById("sesion").innerHTML=
    '<nav class="navbar navbar-expand-lg">'+
      '<div class="collapse navbar-collapse" id="worldNav">'+
        '<ul class="navbar-nav ml-auto">'+
          '<li class="nav-item active" >'+
          '<button onclick="cerrarsesion()"  class="btn world-btn">Cerrar Sesión</button>'+
          '</li>'+
        '</ul>'+
      '</div>'+
    '<nav>'
  }
}


function cerrarsesion(){
  eliminarCookie("username")
  window.location.replace("index.html");
}


function eliminarCookie(cname) {
  return document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


function bodylookBooks(){
  estadosesion()
  mainbusqueda('#excelDataTable')
}

function bodyresena(){
  estadosesion()
  mainresena()
}




function sesioneventos(){
  var usuario =document.cookie.split("=")[1]
  if (usuario == "admin" ) {
    document.getElementById("eventosadmin").innerHTML='<button onclick="mainbuscar()" class="btn world-btn">Nuevo Evento</button>'
  }
}

function bodyeventos(){
  sesioneventos()
  estadosesion()
  maineventos()
}
