// Ejemplo de condicionales (if, else if, else)
function evaluarEdad(edad) {
    if (edad >= 18) {
        console.log("Eres mayor de edad.");
    } else if (edad >= 13 && edad < 18) {
        console.log("Eres un adolescente.");
    } else {
        console.log("Eres un niño.");
    }
}

// Llamada a la función con diferentes edades
evaluarEdad(20); // "Eres mayor de edad."
evaluarEdad(15); // "Eres un adolescente."
evaluarEdad(10); // "Eres un niño."

// Ejemplo de bucles (for, while)
function contarHasta10() {
    // Usando un bucle for
    for (let i = 1; i <= 10; i++) {
        console.log(i); // Imprime los números del 1 al 10
    }
}

function contarHasta10ConWhile() {
    // Usando un bucle while
    let i = 1;
    while (i <= 10) {
        console.log(i); // Imprime los números del 1 al 10
        i++;
    }
}

// Llamada a los bucles
contarHasta10(); // Imprime 1, 2, ..., 10
contarHasta10ConWhile(); // Imprime 1, 2, ..., 10

// Ejemplo con break y continue en un bucle
function contarPares() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 !== 0) {
            continue; // Salta los números impares
        }
        console.log(i); // Imprime solo los números pares
    }
}

// Llamada a la función que muestra solo los números pares
contarPares(); // Imprime 2, 4, 6, 8, 10

// Ejemplo con break en un bucle
function encontrarNumero() {
    for (let i = 1; i <= 10; i++) {
        if (i === 7) {
            console.log("Se encontró el número 7, saliendo del bucle...");
            break; // Sale del bucle cuando encuentra el 7
        }
        console.log(i);
    }
}

// Llamada a la función que encuentra el número 7
encontrarNumero(); // Imprime 1, 2, 3, 4, 5, 6, y luego el mensaje y sale
