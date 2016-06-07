function cargar() {
  var xhttp;
  var url = "http://andreihelo-restful-api.herokuapp.com/students";
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
  xhttp.open("POST", url, false);
  xhttp.send();
  console.log("Estado = "+xhttp.readyState+"  Estatus= "+xhttp.status);

  function hacerTablita(arr) {
    var out = "<table>";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += "<tr> <td>" + arr[i].id + "</td>"+
        "<td>" + arr[i].registration_number + "</td>"+
        "<td>" + arr[i].name + "</td>"+
        "<td>" + arr[i].last_name + "</td>"+
        "<td>" + arr[i].status + "</td> </tr>";
        console.log(out);
    }
    out += "</table>";
    document.getElementById('articulo').innerHTML = out;
  }
}
