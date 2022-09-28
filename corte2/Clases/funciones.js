function convertirTexto()
{
  let texto=document.querySelector("#texto").value ;
  let contenedor=document.querySelector("#contenedor");
  contenedor.innerHTML=mayusculas(texto);

  console.log ("longitug",contarLongitud(texto));
}

function mayusculas(txt)
{
  return txt.toUpperCase();
}


function contarLongitud(){
  let texto=document.querySelector("#texto").value ;
  return texto.length
}