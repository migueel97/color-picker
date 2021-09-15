/*Convierte tres numeros decimales en hexadecimal
y los junta en una cadena*/
function rgb(r, g, b){
    var hexa;
    hexa="#"+(conversionAHexa(r)+conversionAHexa(g)+conversionAHexa(b)).toUpperCase();
    return hexa;
  }

  /*Comprueba que un el número entra dentro del rango de colores
  y lo convierte en hexadecimal*/
function conversionAHexa(x){
  var h;
  h=dentroDeRango(x);
  h=parseInt(h).toString(16);
  
  return h.length == 1 ? "0" + h : h;
}

/*Comprueba que los números decimales que entran
para saber si entran dentro de los valores de los colores*/
function dentroDeRango(x){
  if (x>255){
    x=255;
  }
  else if(x<0){
    x=0;
  }
  return x;
}

/*Recoge numero hexadecimal lo separa por colores,
pasa los tres números a decimal,
los rellena si faltan ceros y los convierte en una cadena*/
function hex(hex) {
  var red, green, blue, Hexa;
  Hexa=hex.substr(hex.length-6, 6);
  
  red=igualACero(parseInt(Hexa.substr(0, 2),16)).toString();
  green=igualACero(parseInt(Hexa.substr(2, 2),16)).toString();
  blue=igualACero(parseInt(Hexa.substr(4, 2),16)).toString();
  return red+green+blue;
}

/*Rellena los numeros r, g o b en caso de que alguna de sus cifras sea 0*/
function igualACero(x){
  if (x<10)x="0"+x;
  if (x<100)x="0"+x;
  return x;
}