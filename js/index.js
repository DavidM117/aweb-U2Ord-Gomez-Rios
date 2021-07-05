

function genera_nota(){
 
    console.log("Se llamó a generar-nota");
    
    var nt = document.getElementById("nota").value;
    console.log(nt);

    limpiar();
    var br = document.createElement("br");

    var newDiv = document.createElement("div");
    var newContent = document.createTextNode(nt);
    newDiv.appendChild(newContent); 
    document.body.appendChild(br);
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);

    newDiv.style.color = "#ffffff"
    newDiv.style.background = "gray"
    newDiv.setAttribute("class","container");
    document.body.appendChild(newDiv);

}

//------------------------------
var ultimo = null;
function marcar(elemento) {
    ultimo = elemento;
}
function limpiar() {
    if (ultimo != null) {
      ultimo.value = "";
    }
}
//------------------------------



        
    
