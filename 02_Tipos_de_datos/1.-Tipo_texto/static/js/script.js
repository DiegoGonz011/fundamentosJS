console.log("Conexion con js correcta")
/*
Datos: Tipo texto (string)
1.-Constenacion de texto con el signo +
Podemos unir texto y variables
*/
//concatenacion: unir texto y/o variables
const nombre = "Diego";
const apellido = "Gonzalez";
//Unimos  ambas constantes con un texto extra
console.log ("Hola, mi nombre es: " + nombre  + " " + apellido);

/*
2.-ver el tipo de dato (typeof)
*/
console.log("La variable nombre es un tipo de dato: " + typeof nombre);

//template literals (forma moderna para conectar)
console.log(`Hola, mi nombre es: ${nombre} ${apellido}`);

//Mostrar el largo de un string (texto) - Contar los caracteres
// .lenght --> para poder contar caracteres y espacios.
let palabra = "Paralelepipedo";
console.log(`La palabra ${palabra} tiene ${palabra.length} letras`)

//Crear una frase y contar sus caracteres
let Palabrita = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"
console.log (`La palabra ${Palabrita} tiene ${Palabrita.length} letras `)

//metodos comunes en JS paara formatear texto
//transformar texto en mayusculas toUpperCase()
let texto1 = "JAvasCripT eS Lo meJoR";
console.log (texto1.toUpperCase());
//transformar texto a minuscula .toLowerCase()
console.log (texto1.toLowerCase());

//buscar un texto dentro de un string
let texto2 ="Leche, azucar, peras, huevos, harina"
console.log(texto2.includes("peras")); //true

//convertir una variable a texto
let telefono = 5693349912
let telefono_texto = String(telefono);
console.log(`Mi numero de telefono ${telefono_texto}
    es de tipo ${typeof telefono_texto}`);