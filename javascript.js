

var boton = "SOBRE MI"
var boton1 = "EXPERIENCIA"
var boton2 = "EDUCACIÓN"
var boton3 = "HABILIDADES"




document.getElementById('boton').onclick = function () {


    document.getElementById("sobremi").innerHTML =  " Me considero una persona flexible, con alta capacidad de  adaptabilidad y aprendizaje. Actualmente me encuentro trabajando en KOMO en la digitalizacion y el ingreso de datos como tambien desarrllando contenido audiovisual en la compania de Teatro, MLM (Mi lugar en el Mundo) ";
    document.getElementById("titulos").innerHTML = boton;

}



document.getElementById('boton1').onclick = function () {


    document.getElementById("sobremi").innerHTML = " La sección de experiencia es una parte indispensable en cualquier CV. Aún si eres muy joven, estás estás estudiando o llevas poco tiempo trabajando, tu currículum debe de incluir una experiencia laboral capaz de cautivar la atención del reclutador.";
    document.getElementById("titulos").innerHTML = boton1;

}


document.getElementById('boton2').onclick = function () {


    document.getElementById("sobremi").innerHTML = " La educación es el proceso de facilitar el refinamiento de habilidades o capacidades propias del individuo, mediante el aprendizaje o la construcción de conocimientos, así como también de las virtudes, creencias, hábitos, u otras características del ser..";
    document.getElementById("titulos").innerHTML = boton2;
}


document.getElementById('boton3').onclick = function () {


    document.getElementById("sobremi").innerHTML = " En el sentido más amplio, las habilidades son un conjunto de capacidades, competencias, atributos, talentos, y en algunos casos conocimientos, que caracterizan a las personas. Esta es la definición consensuada que maneja el Banco Interamericano de Desarrollo en la actualidad.";
    document.getElementById("titulos").innerHTML = boton3;
}



document.getElementById('botone').onclick = function () {


    document.getElementById("contacto").innerHTML = "luis.escalada@hotmail.com";
}
