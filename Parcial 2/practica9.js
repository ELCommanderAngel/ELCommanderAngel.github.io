$(document).ready(function (){
    let cartas = new Array(54).fill(false);
    var cont = 0;
    //function click del boton dar carta
    $("#dar_carta").click(function(){
        var b = true;
        while(b){
        var num = Math.floor(Math.random()*54) + 1;
        console.log("numero de cartas= "+num);
        if(cartas[num-1] == true){
            continue;
            } else {
                $("#carta_activa").html("<img src='Cartillas/"+num+".jpg'>");
                cartas[num-1] = true;
                b=false;
                cont++;
              
            if(cont == 54){
                console.long("ya se dieron todas las cartas");
                b=false;
            }
        }
        
    }
    }); 

    function cargarCartas(){
        var carta1 = 0;
        var carta2 = 0;
        let asignadas = new Array(54).fill(false);
    
        while(carta1 < 16){
        var num = math.floor(math.random()*54) + 1;
        if(asignadas[num-1] == false){
            $("#carta1").append("<div class='col-sm-3'><img class='imng-fluid' src='loteria/"+num+".jpg'>")
            asignadas[num-1] = true;
            carta2++;
        } else {
            continue;
    
            }
    
        }
    
        }
    
    
});


