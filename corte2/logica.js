function validar(){
    let checkboxp = document.getElementById("p").checked;
    let checkboxq = document.getElementById("q").checked;
    let resultado = "p AND q es :" + (checkboxp&&checkboxq)+"<br>";
    resultado=resultado+"p OR q es :"+ (checkboxp||checkboxq)+"<br>";
    resultado=resultado+"la negacion de P es "+(!checkboxp)+"<br>";
    resultado=resultado+"la negacion de Q es "+(!checkboxq)+"<br>";
    


    console.log(checkboxp);
    console.log(checkboxq);
    document.getElementById("mensaje").innerHTML=resultado;
    
}

