function khe() {
  var xhttp;
  var url = "http://examenextra.herokuapp.com/Tareas";
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var respuesta = JSON.parse(xhttp.responseText);
      hacerTablita(respuesta);
    }
  };
  console.log("Estado = "+xhttp.readyState+"  Estatus= "+xhttp.status);
  xhttp.open("GET", url, false);
  xhttp.send();
  console.log("Estado = "+xhttp.readyState+"  Estatus= "+xhttp.status);

  function hacerTablita(arr) {
    var out = "<table> <tr> <th>Tarea</th> <th>Descripcion</th> <th>Usuario</th>";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += "<tr> <td>" + arr[i].tarea + "</td>"+
        "<td>" + arr[i].descripcion + "</td>"+
        "<td>" + arr[i].usuario + "</td> </tr>";
        console.log(out);
    }
    out += "</table>";
    document.getElementById('articulo').innerHTML = out;
  }
}
