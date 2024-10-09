$(document).ready( function(){
    alert("funciona jquery");

 $('#boton').on("click", function(){
  var nombre=$('#nombre').val();

  alert(nombre);
 });

 $('#texto').clicks(function(){
    $('#texto').css("display", "inherit").fadeOut(2000);

 });

})