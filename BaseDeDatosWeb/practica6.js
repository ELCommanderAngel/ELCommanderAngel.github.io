var ocultar = false;

function muestra_texto(){
    if(!ocultar){
        document.getElementById("texto").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum esse necessitatibus inventore voluptatibus facere officia nesciunt optio commodi minima. Possimus, ratione? Doloribus, iure molestiae! Nulla, veniam animi? Unde, necessitatibus!"
        ocultar=true;
        document.getElementById("mostrar").innerHTML ="mstrar menos"
    }else{
        document.getElementById("texto").innerHTML = ""
        ocultar=false;
        document.getElementById("mostrar").innerHTML ="mstrar mas"


    }

    
}

function lanzar_dado(){
 
    var num= Math.floor(Math.random() * 6) +1;

    document.getElementById("imagen_dado").innerHTML = "<img src= dado"+num+".png width = '100px'>";

}  