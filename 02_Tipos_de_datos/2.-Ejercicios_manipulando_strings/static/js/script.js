console.log("conexion correcta con js");

// 1️⃣ Presentación completa
// Crea las variables:
// nombre: Camila
// edad: 25
// Debes mostrar un mensaje que:
// Presente a la persona
// Indique su edad
// Indique el tipo de dato de edad
// 👉 Todo en un solo mensaje.
let nombre1 ="Camila";
let edad1 = "25"
console.log(`${nombre1} tiene ${edad1} años y el tipo de dato de su edad es ${typeof edad1}`);
// 2️⃣ Ubicación con transformación
// Crea las variables:
// comuna: Maipú
// region: Metropolitana
// Debes mostrar un mensaje que:
// Indique dónde vive la persona
// Muestre la comuna en MAYÚSCULAS
// Muestre la región en minúsculas
let comuna1 = "Maipú"
let region1 = "Metropolitana"
console.log(`Usted vive en la comuna de ${comuna1.toUpperCase()} En la region ${region1.toLocaleLowerCase()}` )
// 3️⃣ Análisis de palabra
// Crea la variable:
// lenguaje: Python
// Debes mostrar un mensaje que:
// Indique cuántos caracteres tiene
// Muestre la palabra en MAYÚSCULAS
// Indique el tipo de dato
let lenguaje1 = "Python"
console.log (`La palabra ${lenguaje1.toUpperCase()} tiene ${lenguaje1.length} letras  y el tipo de dato de la palabra es ${typeof lenguaje1}`)
// 4️⃣ Frase completa analizada
// Crea la variable:
// mensaje: Me encanta programar en JavaScript
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "JavaScript"
// Muestre el mensaje completo en minúsculas
let mensaje1 ="Me encanta programar en JavaScript"
console.log (`El mensaje "${mensaje1.toLowerCase()}" tiene ${mensaje1.length} letras y si aqui dice true es porque esta bien escrito: ${mensaje1.includes("JavaScript")}`)
// 5️⃣ Lista con búsqueda y transformación
// Crea la variable:
// compras: arroz, fideos, aceite, sal
// Debes mostrar:
// Si existe la palabra "aceite"
// El texto completo en MAYÚSCULAS
// La cantidad total de caracteres
let compras ="arroz, fideos, aceite, sal" 
console.log(`si aparece true es porque esta el aceite: ${compras.includes("aceite")}, y la cantidad de caracteres ${compras.toUpperCase()} es de ${compras.length} `)
// 6️⃣ Conversión + análisis
// Crea las variables:
// numeroCasa: 456
// numeroCasaTexto (vacía)
// Debes:
// Convertir el número a texto
// Mostrar el número convertido
// Indicar su tipo de dato
// Indicar cuántos caracteres tiene
let numero1 = 456
let numero1_texto = String(numero1);
console.log(`Mi numero de casa es ${numero1_texto} y el tipo de dato es ${typeof numero1_texto} y tiene ${numero1_texto.length} caracteres`)
// 7️⃣ Identificación personal extendida
// Crea las variables:
// nombre: Diego
// apellido: Rojas
// Debes mostrar un mensaje que:
// Muestre el nombre completo
// Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
// Muestre todo en MAYÚSCULAS
let nombre2 = "Diego"
let apellido1 = "Rojas"
let nombreCompleto1 = nombre1 + apellido1
console.log(`El nombre es: ${nombre2} y el apellido es: ${apellido1} y el nombre completo tiene: ${nombreCompleto1.length} caracteres`.toUpperCase());
// 8️⃣ Verificación de contenido
// Crea la variable:
// frase: Hoy aprenderemos sobre strings
// Debes mostrar:
// Si contiene la palabra "strings"
// La frase en MAYÚSCULAS
// La cantidad de caracteres
let frase = "Hoy aprenderemos sobre strings";
console.log(`la frase ${frase} contiene la palabra "strings":
    ${frase.includes("strings")}`);
console.log(`${frase.toUpperCase ()} - Tiene ${frase.length} caracteres`)
// 9️⃣ Comparación de formatos
// Crea la variable:
// texto: Programar es divertido
// Debes mostrar en un solo mensaje:
// El texto original
// El texto en minúsculas
// El texto en mayúsculas
// La cantidad de caracteres
let texto1 ="Programar es divertido";
console.log(`texto original ${texto1}
    Texto en minusculas: ${texto1.toLowerCase()}
    Texto en mayusculas: ${texto1.toUpperCase()}
    El texto tiene: ${texto1.length} caracteres`);
// 🔟 Desafío completo integrado
// Crea las variables:
// curso: 4C
// anio: 2026
// Debes mostrar un mensaje que:
// Indique el curso y año
// Convierta el año a texto
// Indique el tipo de dato del año convertido
// Muestre todo el mensaje en MAYÚSCULAS
let curso = "4C"
let anio = 2026;
let  aniotexto = String(anio)
console.log(`Curso ${curso} del año ${anio}
            \nAño es de tipo: ${typeof aniotexto}`.toUpperCase())