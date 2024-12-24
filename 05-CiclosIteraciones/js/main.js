// Tabla de multiplicar del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(`Tabla del ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('------------------'); // Separador entre tablas
}

let numero = 5; // Puedes cambiar este número para obtener la tabla de multiplicar de otro número

console.log(`Tabla de multiplicar del ${numero}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}


let numeros = [5, 12, 8, 130, 44]; // Array de números
let buscar = 130;  // Número que queremos buscar
let encontrado = false;  // Variable para verificar si encontramos el número

// Recorremos el array con un bucle for
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === buscar) {
        console.log(`Número encontrado en la posición ${i}`);
        encontrado = true;
        break; // Salimos del bucle cuando encontramos el número
    }
}

// Si no encontramos el número, mostramos un mensaje
if (!encontrado) {
    console.log('Número no encontrado en el array');
}

// let numeros = [5, 12, 8, 130, 44]; // Array de números
// let buscar = 130  // Número que queremos buscar
let i = 0;  // Índice para recorrer el array
// let encontrado = false;  // Variable para saber si encontramos el número

// Usamos el bucle while para recorrer el array
while (i < numeros.length) {
    if (numeros[i] === buscar) {
        console.log(`Número encontrado en la posición ${i}`);
        encontrado = true;
        break; // Salimos del bucle cuando encontramos el número
    }
    i++;  // Aumentamos el índice para la siguiente iteración
}

// Si no encontramos el número, mostramos un mensaje
if (!encontrado) {
    console.log('Número no encontrado en el array');
}

let contrasenaCorrecta = "miContraseña123";  // Contraseña correcta
let contrasenaIngresada = "";  // Variable para almacenar lo que ingresa el usuario

// Usamos un bucle while para seguir pidiendo la contraseña hasta que sea correcta
while (contrasenaIngresada !== contrasenaCorrecta) {
    contrasenaIngresada = prompt("Introduce tu contraseña:");  // Pedimos la contraseña al usuario
    
    if (contrasenaIngresada === contrasenaCorrecta) {
        console.log("¡Contraseña correcta! Acceso concedido.");
    } else {
        console.log("Contraseña incorrecta. Intenta de nuevo.");
    }
}

// let contrasenaCorrecta = "miContraseña123";  // Contraseña correcta
// let contrasenaIngresada = "";  // Variable para almacenar lo que ingresa el usuario

do {
    contrasenaIngresada = prompt("Introduce tu contraseña:");  // Pedimos la contraseña al usuario
    
    if (contrasenaIngresada === contrasenaCorrecta) {
        console.log("¡Contraseña correcta! Acceso concedido.");
    } else {
        console.log("Contraseña incorrecta. Intenta de nuevo.");
    }
} while (contrasenaIngresada !== contrasenaCorrecta);  // El bucle continuará hasta que la contraseña sea correcta

let dia = 3;
let nombreDelDia;

switch(dia) {
    case 1:
        nombreDelDia = "Lunes";
        break;
    case 2:
        nombreDelDia = "Martes";
        break;
    case 3:
        nombreDelDia = "Miércoles";
        break;
    case 4:
        nombreDelDia = "Jueves";
        break;
    case 5:
        nombreDelDia = "Viernes";
        break;
    case 6:
        nombreDelDia = "Sábado";
        break;
    case 7:
        nombreDelDia = "Domingo";
        break;
    default:
        nombreDelDia = "Día inválido";
}

console.log("El día de la semana es: " + nombreDelDia);

// let dia = 3;
// let nombreDelDia;

if (dia === 1) {
    nombreDelDia = "Lunes";
} else if (dia === 2) {
    nombreDelDia = "Martes";
} else if (dia === 3) {
    nombreDelDia = "Miércoles";
} else if (dia === 4) {
    nombreDelDia = "Jueves";
} else if (dia === 5) {
    nombreDelDia = "Viernes";
} else if (dia === 6) {
    nombreDelDia = "Sábado";
} else if (dia === 7) {
    nombreDelDia = "Domingo";
} else {
    nombreDelDia = "Día inválido";
}

console.log("El día de la semana es: " + nombreDelDia);
