
function genera_nota(){
 
    console.log("Se llamó a generar-nota");
    
    var nt = document.getElementById("nota").value;
    console.log(nt);

    limpiar();

    var newDiv = document.createElement("div");
     var newContent = document.createTextNode(nt);
    newDiv.appendChild(newContent); 

    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
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

   

        
    
