	 /*
  **********************************************************
  * OPAQUE NAVBAR SCRIPT
  **********************************************************
  */

  // Toggle tranparent navbar when the user scrolls the page

  $(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
      $('.opaque-navbar').addClass('opaque');
    } else {
      $('.opaque-navbar').removeClass('opaque');
    }
  });

  function typeWritter(texto,idElemento,tempo){
    var char = texto.split('').reverse();
    var typer = setInterval(function () {
      if (!char.length) return clearInterval(typer);
      var next = char.pop();
      document.getElementById(idElemento).innerHTML += next;
    }, tempo);
  }
  typeWritter('HÁ 16 ANOS SOLUCIONANDO PROBLEMAS DE ENGENHARIA EM PROL DA SOCIEDADE.','log',50);