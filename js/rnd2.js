document.getElementById("r1").addEventListener("change",actualizar1, false);
document.getElementById("g1").addEventListener("change",actualizar1, false);
document.getElementById("b1").addEventListener("change",actualizar1, false);

function actualizar1(){
  var r=document.getElementById("r1").value;
  var g=document.getElementById("g1").value;
  var b=document.getElementById("b1").value;
  
  var valorHex = rgb(r,g,b);
    document.getElementById("hex").innerHTML = valorHex;
}

function rgb(r, g, b){
  return "#" + conversionAHexa(r) + conversionAHexa(g) + conversionAHexa(b);
}

function conversionAHexa(x){
var h=parseInt(x).toString(16);
return h.length == 1 ? "0" + h : h;
}