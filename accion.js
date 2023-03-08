//Comienzo
/**
 * 
 * 
 */
/*
document.getElementById("showList").onclick = function () {
    document.getElementById("desplazado1").style.display = "contents";
    document.getElementById("desplazado2").style.display = "contents";
    document.getElementById("desplazado3").style.display = "contents";
    
}*/

document.getElementById("showList").onclick = function() {
    const datosList = document.getElementsByClassName("oculto");
    for (let i = 0; i < datosList.length; i++) {
        datosList[i].style.display = "contents";
    } 
}

