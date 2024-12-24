//Estructura dondicional if
// let diaDeLaSemana = "Miercoles";
// if (diaDeLaSemana === "Miercoles") {
//     console.log("Ejecuta este bloque de codigo");
// } 

// diaDeLaSemana = "Jueves";
// if (diaDeLaSemana === "Miercoles") {
//     console.log("Ejecuta este bloque de codigo");
// } 

// const nombreUsuario = prompt("Cual es tu nombre de usuario");

// if (nombreUsuario == "") {
//     console.log("No ingresaste tu nombre de usuario");
// } else {
//     alert("Hola " + nombreUsuario + "bienvenido");
// }

if (condicion1) {
    // Código si la condicion1 es verdadera
} else if (condicion2) {
    // Código si la condicion2 es verdadera
} else if (condicion3) {
    // Código si la condicion3 es verdadera
} else {
    // Código si ninguna de las condiciones anteriores es verdadera
}


// let edad = 20;

if (edad < 18) {
    console.log("Eres menor de edad.");
} else if (edad >= 18 && edad <= 65) {
    console.log("Eres adulto.");
} else {
    console.log("Eres una persona mayor.");
}


let dia = "lunes";

if (dia === "lunes") {
    console.log("Hoy es lunes.");
} else if (dia === "martes") {
    console.log("Hoy es martes.");
} else if (dia === "miércoles") {
    console.log("Hoy es miércoles.");
} else {
    console.log("No es lunes, martes ni miércoles.");
}

let esEstudiante = true;
let tieneTrabajo = false;

if (esEstudiante) {
    console.log("Eres estudiante.");
} else if (tieneTrabajo) {
    console.log("Tienes trabajo.");
} else {
    console.log("No eres estudiante ni tienes trabajo.");
}

let edad = 25;
let tieneLicencia = true;

if (edad >= 18 && tieneLicencia) {
    console.log("Puedes conducir.");
} else {
    console.log("No puedes conducir.");
}

// let esFinDeSemana = true;
// let tieneTrabajo = false;

if (esFinDeSemana || tieneTrabajo) {
    console.log("Puedes salir a divertirte.");
} else {
    console.log("Debes quedarte en casa.");
}

let esLunes = false;

if (!esLunes) {
    console.log("Hoy no es lunes, ¡puedes relajarte!");
} else {
    console.log("Es lunes, hay que trabajar.");
}

let tienePermiso = true;
let esMayorDeEdad = false;
let esFinDeSemana = true;

if (tienePermiso && (esMayorDeEdad || esFinDeSemana)) {
    console.log("Puedes salir de noche.");
} else {
    console.log("No puedes salir de noche.");
}

// AND (&&): Todas las condiciones deben ser verdaderas.
// OR (||): Solo una condición debe ser verdadera.
// NOT (!): Invierte el valor de la condición.