//personalizar de salida a console
const bg= "linear-gradient(45deg, rgba(52,152,219,1) 0%, rgba(26, 198, 156, 1) 50%)";
const style_console = 'background: $(bg); color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold'
console.log('%c1.- Ejercicio 01: Declaración de Variables ',style_console);
// 1. Declaración de variables a utilizando el prefijo VAR
var miNombre = "Emigdio Yait ";
var misApellidos;

//Utilizaremos la función console.log para imprimir el valor actual de la variable
console.log("El valor de la variable miNombre es:", miNombre);
console.log("El valor de la variable misApellidos es:", misApellidos);
//Esto arroja un undefined dado que la variable no ha sido inicializada, es decir, no se le ha asignado un valor almacenado.

misApellidos = "Aguirre Martinez";
//En este momento la bariable ya tiene un valor almacenado por que al imprimirlo deberá mostrar el valor asignado.
console.log("El valor de la variable misApellidos es:", misApellidos);
//para actualizar el valor de una variable previamente definida solo basta con igualar el nuevo valor
miNombre ="Emigdio Yait";
console.log("hola, ", miNombre, misApellidos);
 //2. decoracion de Variable utilizando  el profile
 console.warn("--Declaracion de Variantes utilizando el prefijo const--");
 /*la palabra reservado CONST nos permite a nivel memoria reserva espacio para
 almacenar datos de una constante que a diferencia */
 const miMatricula = "240545";
 //imprimir el valor de constante 
 console.log("El valor actual de la constante miMatricula es : ".miMatricula);
 //const miEdad // -- Esto ocasiona un errro por que la constate no fue inicializada
// mi Matricula = "240545";  //-- ocasiona un erro por el valor 


console.warn("-- Declaración de una Constante utilizando el prefijo LET --")
var fechalacimiento = new Date("2006-05-08");
function calcularEdad(fechaNacimiento)
{
    //Para calcular la edad requerimos de la fecha del dia de hoy
    let fechaHoy = new Date();

    //Dado que tenemos los milisegundos por dia tenemos que restar a la fecha de hoy, la fecha en que nacimos para calcular los milisegundos de hemos vivido
    let milisegundosPorDia = 24*60*60*1000;

    // Ya que tenemos los milisegundos por dia tenemos que restar a la fecha de hoy la fecha en que nacimos para calcular los milisegundos que hemos vivido
    let diasVividos = (fechaHoy - fechaNacimiento)/milisegundosPorDia;

    //invocamos el método matemático de la funcion psio (FLOOR)
    let edad = diasVividos /365.25
    edad = Math.floor(edad);

    return edad;
}

console.warn("--El valor de las variables miFechaNacimiento es: ", miFechaNacimiento);
var miEdad = calcularEdad(miFechaNacimiento);
console.log("Despues de ejecutar la funcion calcularEdad(), puedo saber que tienes: ", miEdad, " años.");

if(miEdad >= 18)
{
    var esMayordeEdad = true;
    var EsMenordeEdad = false;
}

else

{
    esMayordeEdad = false;
    var esMenordeEdad = true;
}

console.log("En base a tu edad puedo decir que el valor de esMayordeEdad es: ", esMayordeEdad ,"y el de esMenordeEdad es: ", EsMenordeEdad);

//Interpolacion de datos

//* para imprimir dtops en JavaScript, es decir mezclar informacion estatica, que no cambia con datos dinamicos que pueden cambiar durantela ejecucion 
// del programa se requiere comenzar la cadena con un backtic () y los datos que son dinamicos estan encerrados en llaves curvas {} 
// antecedidas por un signo de dolar $
console.warn("-- Interpolacion de Datos --");
console.log(Hola , ${miNombre} ${misApellidos} se que tienes : ${miEdad} años.;  por lo que eres ${esMayordeEdad ? "mayor de edad" : "menor de edad"};);