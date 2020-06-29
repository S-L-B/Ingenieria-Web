
function mainbusqueda(selector){
  var dbs =firebase.database().ref("libros");
  var lib =""
  var arr = [];
  var query = firebase.database().ref("libros").orderByKey();
    query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      //var key = childSnapshot.key; // "ada"
      arr.push(childSnapshot.toJSON());

    });

  buildHtmlTable(selector,arr)

  });

}



function buildHtmlTable(selector,data) {
  var columns = addAllColumnHeaders(data, selector);

  for (var i = 0; i < data.length; i++) {
      var row$ = $('<tr/>');
      var datos=[]
      for (var colIndex = 0; colIndex < columns.length-1; colIndex++) {
        var cellValue = data[i][columns[colIndex]];
        if (typeof cellValue =="object"){
          var aux=""
          var inCell = 0;
          while (typeof cellValue[inCell] !== "undefined" ) {
            aux+=cellValue[inCell]
            inCell++
            if(typeof cellValue[inCell] !== "undefined" ) {
              aux+= " y "
            }
          }

        cellValue= aux
      }
          datos.push(cellValue)
        if (cellValue == null) cellValue = "";
        row$.append($('<td/>').html(cellValue));
      }
      cellValue='<button onclick="fichaTecnica(\''
      +datos[0]+
      '\',\''
      +datos[1]+
      '\',\''
      +datos[2]+
      '\',\''
      +datos[3]+
      '\',\''
      +datos[4]+
      '\',\''
      +datos[5]+
      '\',\''
      +datos[6]+
      '\',\''
      +datos[7]+
      '\',\''
      +datos[8]+
      '\')" class="btn world-btn">Ficha Tecnica</button>'
      row$.append($('<td/>').html(cellValue));

      $(selector).append(row$);

  }
}

function fichaTecnica(id, titulo,autor,anno,estado,genero,editorial,saga,entrega){
  var nodefinido="undefined"
  if (genero != nodefinido) {
    var generoCadena=
    '<div class="col-12 ">'+
      '<div class="group">'+

      '<div id="generoid">'+
        'Genero: <p  id="generoinfo">'+genero+'</p>'+
      '</div>'+

      '</div>'+
    '</div>'
  }else{var generoCadena=''}
  if (editorial != nodefinido) {
    var editorialCadena=
    '<div class="col-12 ">'+
      '<div class="group">'+
      '<div id="editorialid">'+
        'Editorial: <p  id="editorialinfo">'+editorial+'</p>'+
      '</div>'+

      '</div>'+
    '</div>'
  }else{var editorialCadena=''}

  if (saga != nodefinido) {
    var sagaCadena=
    '<div class="col-12 ">'+
      '<div class="group">'+

      '<div id="sagaid">'+
        'Saga: <p  id="sagainfo">'+saga+'</p>'+
      '</div>'+

      '</div>'+
    '</div>'
  }else{var sagaCadena=''}
  if (entrega != nodefinido) {
    var entregaCadena=
    '<div class="col-12 ">'+
      '<div class="group">'+

      '<div id="entregaid">'+
        'Entrega: <p  id="entregainfo">'+entrega+'</p>'+
      '</div>'+

      '</div>'+
    '</div>'
  }else{var entregaCadena=''}
  document.getElementById("contenedor").innerHTML = '<button onclick="vuelta()" class="btn world-btn">Volver</button>'+
  '<section class="contact-area section-padding-100">'+
      '<div class="container">'+
          '<div class="row justify-content-center">'+
            '<div class="col-12 col-md-10 col-lg-8">'+
              '<div class="contact-form">'+
              '<h5>Ficha Tecnica</h5>'+
                  '<div class="row">'+

                  '<div class="col-12 ">'+
                    '<div  class="group">'+
                      'Número de identificación: <p id="idlibro">'+id+'</p>'+
                    '</div>'+
                  '</div>'+
                  '<div class="col-12">'+
                    '<div class="group">'+
                    '<div id="tituloid">'+
                      'Titulo: <p  id="tituloinfo">'+titulo + '</p>'+
                    '</div>'+

                    '</div>'+
                  '</div>'+
                  '<div class="col-12">'+
                    '<div class="group">'+
                    '<div id="autorid">'+
                      'Titulo: <p  id="autorinfo">'+autor + '</p>'+
                    '</div>'+

                    '</div>'+
                  '</div>'+

                  '<div class="col-12">'+
                    '<div class="group">'+

                    '<div id="estadoid">'+
                      'Estado: <p  id="estadoinfo">'+estado+'</p>'+
                    '</div>'+

                    '</div>'+
                  '</div>'+
                  '<div class="col-12 ">'+
                    '<div class="group">'+

                    '<div id="annoid">'+
                      'Año: <p  id="annoinfo">'+anno+'</p>'+
                    '</div>'+

                    '</div>'+
                  '</div>'+

                  generoCadena +
                  editorialCadena +
                  sagaCadena+
                  entregaCadena+

                  '<div id="boton_mod">'+
                    '<button onclick="modificar()" class="btn world-btn">Modificar</button>'+
                  '</div>'+

                  '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</section>'
}



function modificar(){
  var titulo = document.getElementById("tituloinfo").textContent
  var autor = document.getElementById("autorinfo").textContent

  var estado = document.getElementById("estadoinfo").textContent
  var anno = document.getElementById("annoinfo").textContent

  //var estado = document.getElementById("estadoinfo")
  document.getElementById("tituloid").innerHTML=
  '<input type="text" name="titulo"  value="'+titulo+'" id="titulo"  required>'+
  '<span class="highlight"></span>'+
  '<span class="bar"></span>'+
  '<label>Titulo</label>'
  document.getElementById("autorid").innerHTML=
  '<input type="text" name="autor"  value="'+autor+'" id="autor" autofocus required>'+
  '<span class="highlight"></span>'+
  '<span class="bar"></span>'+
  '<label>Autor</label>'


  if(estado=="Sin Comprar"){
    document.getElementById("estadoid").innerHTML=
      '<div class="groupmod group">'+
        '<select name="estado" id="estado" required>'+
          '<option value="Sin Comprar" selected>Sin Comprar</option>'+
          '<option value="Comprado">Comprado</option>'+
          '<option value="Leido">Leido</option>'+
        '</select>'+
          '<span class="highlight"></span>'+
          '<span class="bar"></span>'+
          '<label>Estado</label>'+
      '</div>'
  }
  if(estado=="Comprado"){
    document.getElementById("estadoid").innerHTML=
      '<div class="groupmod group">'+
        '<select name="estado" id="estado" required>'+
          '<option value="Sin Comprar">Sin Comprar</option>'+
          '<option value="Comprado" selected>Comprado</option>'+
          '<option value="Leido">Leido</option>'+
        '</select>'+
          '<span class="highlight"></span>'+
          '<span class="bar"></span>'+
          '<label>Estado</label>'+

      '</div>'
  }
  if(estado=="Leido"){
    document.getElementById("estadoid").innerHTML=
      '<div class="groupmod group">'+
          '<select name="estado" id="estado" required>'+
            '<option value="Sin Comprar">Sin Comprar</option>'+
            '<option value="Comprado">Comprado</option>'+
            '<option value="Leido" selected>Leido</option>'+
          '</select>'+
            '<span class="highlight"></span>'+
            '<span class="bar"></span>'+
            '<label>Estado</label>'+

        '</div>'
  }


  document.getElementById("annoid").innerHTML=
  '<input type="number" name="anno"  value="'+anno+'" id="anno" required>'+
  '<span class="highlight"></span>'+
  '<span class="bar"></span>'+
  '<label>Año</label>'
  document.getElementById("boton_mod").innerHTML='<button onclick="update()" id="boton_mod" class="btn world-btn">Guardar</button>'

  var element = document.getElementById("entregainfo");
     //If it isn't "undefined" and it isn't "null", then it exists.
  if(typeof(element) != 'undefined' && element != null){
    var entrega = document.getElementById("entregainfo").textContent
    document.getElementById("entregaid").innerHTML='<input type="text" value="'+entrega+'" id="entrega" required>'
  }
  var element2 = document.getElementById("sagainfo");
     //If it isn't "undefined" and it isn't "null", then it exists.
  if(typeof(element2) != 'undefined' && element2 != null){
    var saga = document.getElementById("sagainfo").textContent
    document.getElementById("sagaid").innerHTML='<input type="text" value="'+saga+'" id="saga" required>'
  }
  var element3 = document.getElementById("editorialinfo");
     //If it isn't "undefined" and it isn't "null", then it exists.
  if(typeof(element3) != 'undefined' && element3 != null){
    var editorial = document.getElementById("editorialinfo").textContent

    document.getElementById("editorialid").innerHTML='<input type="text" value="'+editorial+'" id="editorial" required>'
  }
  var element4 = document.getElementById("generoinfo");
     //If it isn't "undefined" and it isn't "null", then it exists.
  if(typeof(element4) != 'undefined' && element4 != null){
    var genero = document.getElementById("generoinfo").textContent
    document.getElementById("generoid").innerHTML='<input type="text" value="'+genero+'" id="genero" required>'
  }
}


function boton(identi,valor){
  document.getElementById(valor).innerHTML='<input type="text" class="group"'+
  ' name="autor" id="autor" value="'+identi+'">'
}



function addAllColumnHeaders(data, selector) {
  var columnSet = [];
  var headerTr$ = $('<tr/>');

  key="_id"
  columnSet.push(key);
  headerTr$.append($('<th/>').html(key));

  key="titulo"
  columnSet.push(key);
  headerTr$.append($('<th/>').html(key));

  key="autor"
  columnSet.push(key);
  headerTr$.append($('<th/>').html(key));

  key="anno"
  columnSet.push(key);
  headerTr$.append($('<th/>').html(key));

  key="estado"
  columnSet.push(key);
  headerTr$.append($('<th/>').html(key));

  key="genero"
  columnSet.push(key);
  headerTr$.append($('<th/>').html(key));

  key="editorial"
  columnSet.push(key);
  headerTr$.append($('<th/>').html(key));

  key="nombre_saga"
  columnSet.push(key);
  headerTr$.append($('<th/>').html(key));

  key="entrega"
  columnSet.push(key);
  headerTr$.append($('<th/>').html(key));

  key="Ficha Tecnica"
  columnSet.push(key);
  headerTr$.append($('<th/>').html(key));

  $(selector).append(headerTr$);

  return columnSet;
}



function guardar(){
  //guardar en la base de datos
  var titulo = document.getElementById("titulo").value;
  var autor = document.getElementById("autor").value;
  var anno = document.getElementById("anno").value;
  var estado =document.getElementById("estado").value;

  var entrega =document.getElementById("entrega").value;
  var saga =document.getElementById("saga").value;
  var editorial =document.getElementById("editorial").value;
  var genero =document.getElementById("genero").value;
  var dbs =firebase.database().ref("libros");



  vuelta()
  console.log(titulo)
  console.log(autor)
  console.log(anno)
  console.log(estado)


}

function nuevo(){
  window.location.replace("introduce.html");
}

function vuelta(){
  window.location.replace("lookBooks.html");
  //document.getElementById("contenedor").innerHTML ='<div class="row justify-content-center">'+
  //'<div class="col-12 "> <body onLoad="buildHtmlTable(\'#excelDataTable\')"><table id="excelDataTable" class="tabla-mirar" border="1"></table></div></div>'
}
