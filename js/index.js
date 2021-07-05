  

function genera_nota(){
    console.log("Se llamó a generar-nota");
    
    var nt = document.getElementById("nota").value;
    console.log(nt);

    var body = document.getElementsByTagName("body")[0];

    var tabla   = document.createElement("table");
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");

    var hilera = document.createElement("tr");

                
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(nt);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);
                

    tblBody.appendChild(hilera);
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "0");
    tabla.setAttribute("style","margin: 0 auto;");



}




        
    
