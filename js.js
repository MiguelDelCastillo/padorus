function imagenRandom(){
    let imagen = document.getElementById("imagen").src
    console.log(imagen)
    console.log(parseInt(Math.random()*10))
    imagen = document.getElementById("imagen").src = `recursos/padoru${parseInt(Math.random()*10)+1}.png`

}

function mueveReloj(){
    momentoActual = new Date();
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinutes();
    segundo = momentoActual.getSeconds();
    horaImprimible = hora+":"+minuto+":"+segundo;
    document.form_reloj.reloj.value= horaImprimible;
    setTimeout("mueveReloj()",1000);
}