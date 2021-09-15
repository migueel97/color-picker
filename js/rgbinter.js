//Cuando se interactua con los elementos de la interfaz la interfaz se actualiza
document.getElementById("r1").addEventListener("change",actualizar1, false);
document.getElementById("g1").addEventListener("change",actualizar1, false);
document.getElementById("b1").addEventListener("change",actualizar1, false);
document.getElementById("r2").addEventListener("keyup",actualizar2, false);
document.getElementById("g2").addEventListener("keyup",actualizar2, false);
document.getElementById("b2").addEventListener("keyup",actualizar2, false);
document.getElementById("boton1").addEventListener("click", actualizar3, false);

//Cuando mueves el range cambia el valor por teclado y actualiza el hexadecimal
function actualizar1(){
  var red, green, blue;
  red=document.getElementById("r1").value;
  green=document.getElementById("g1").value;
  blue=document.getElementById("b1").value;

  document.getElementById("r2").value=red;
  document.getElementById("g2").value=green;
  document.getElementById("b2").value=blue;

  var valorHex = rgb(red, green, blue);
    document.getElementById("hex").value=valorHex;
  }
//Cuando introduces un valor por teclado mueve el range y actualiza el hexadecimal
function actualizar2(){
    document.getElementById("r1").value=document.getElementById("r2").value;
    document.getElementById("g1").value=document.getElementById("g2").value;
    document.getElementById("b1").value=document.getElementById("b2").value;
    
    actualizar1();
  }

  //Cuando se cambia el hexadecimal actualiza los range y los valores por teclado
  function actualizar3(){
    var rgb;
    rgb=hex(document.getElementById("hex").value);
    document.getElementById("r1").value=rgb.substr(0, 3);
    document.getElementById("g1").value=rgb.substr(3, 3);
    document.getElementById("b1").value=rgb.substr(6, 3);

    actualizar1();
  }
  