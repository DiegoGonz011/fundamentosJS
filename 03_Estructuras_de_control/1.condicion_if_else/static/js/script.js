console.log("conexion exitosa con js...");

/*
===============================
1. que es una condicion en JS?
===============================
Una condicion nos permite tomas decisiones en el 
codigo. separando dos caminos es si (if) y el no (else)

estrucutura basica: (sintaxis ---> Reglas del lemguaje de programacion)

if (condicion) {
    //Codigo que se ejecuta si la condicion e sverdadera.
} else{
    // codigo que se ejecuta si la condicion es falsa
}
*/

//Ejemplo 1: (numerico) -- if
let edad = 18;

if (edad == 18){ //condicion si
    console.log ("eres mayor de edad")
}

//Ejemplo 2: dos caminos posibles
let temperatura = 10
if(temperatura >20){
    console.log ("hace calor")
} else{
    console.log ("hace frio")
}


//ejemplo 3: if - else if - else

    let nota = 6.5;

    if (nota >= 6.0){
        console.log ("Excelente");
    } else if (nota >=4.0){
        console.log("aprobado")
    } else {
        console.log ("reprobado")
    }

    //Ejemplo 4: condiciones con string
    let nombre = "Diego";

    //comparacion exacta (===)
    if (nombre === "Diego"){
        console.log ("Hola, " + nombre)
    } else {
        console.log ("tu no eres Diego")
    }