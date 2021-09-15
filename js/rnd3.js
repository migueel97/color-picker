//Recoge los valores rgb y pide a la funcion rgb que los convierta y los saque
document.getElementById("r1").addEventListener("change",actualizar1, false);
document.getElementById("g1").addEventListener("change",actualizar1, false);
document.getElementById("b1").addEventListener("change",actualizar1, false);
document.getElementById("r2").addEventListener("keyup",actualizar2, false);
document.getElementById("g2").addEventListener("keyup",actualizar2, false);
document.getElementById("b2").addEventListener("keyup",actualizar2, false);
document.getElementById("boton1").addEventListener("click", actualizar3, false);

function actualizar1(){
  var r=document.getElementById("r1").value;
  var g=document.getElementById("g1").value;
  var b=document.getElementById("b1").value;

  document.getElementById("r2").value=document.getElementById("r1").value;
  document.getElementById("g2").value=document.getElementById("g1").value;
  document.getElementById("b2").value=document.getElementById("b1").value;

  var valorHex = rgb(r,g,b);
    document.getElementById("hex").value= valorHex;
  }

function actualizar2(){
    document.getElementById("r1").value=document.getElementById("r2").value;
    document.getElementById("g1").value=document.getElementById("g2").value;
    document.getElementById("b1").value=document.getElementById("b2").value;
    
    actualizar1();
  }

  function actualizar3(){
    var rgb;
    rgb=separarHex(document.getElementById("hex").value);
    rgb=rgb.split(" ");
    document.getElementById("r1").value=rgb[0];
    document.getElementById("g1").value=rgb[1];
    document.getElementById("b1").value=rgb[2];

    actualizar1();
  }

function rgb(r, g, b){
    return "#" + conversionAHexa(r) + conversionAHexa(g) + conversionAHexa(b);;
  }

function conversionAHexa(x){
  var h=parseInt(x).toString(16);
  return h.length == 1 ? "0" + h : h;
}

function separarHex(hex) {
  var r, g, b;
  r=hex.substr(1, 2);
  r=hexADecimal(r);
  g=hex.substr(3, 2);
  g=hexADecimal(g);
  b=hex.substr(5, 2);
  b=hexADecimal(b);
  return r+" "+g+" "+b;
}

function hexADecimal(hex){
  var decimal =parseInt(hex,16);
  return decimal;
}