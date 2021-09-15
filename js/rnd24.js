addEventListener('load',inicio,false);

  function inicio()
  {
    document.getElementById('r').addEventListener('change', cambioTemperatura, false);
  }

  function cambioTemperatura()
  {  
      var x=document.getElementById("r").value;
    document.getElementById('hex').innerHTML=x;
  }