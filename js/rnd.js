//Recoge los valores rgb y pide a la funcion rgb que los convierta y los saque

document.getElementById("hex").addEventListener("keyup", actualizar3, false);

function actualizar3(){
  var rgb;
  rgb=separarHex(document.getElementById("hex").value);
  rgb=rgb.split(" ");
  document.getElementById("r").value=rgb[0];
  document.getElementById("g").value=rgb[1];
  document.getElementById("b").value=rgb[2];
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