// Funciones

// function saludar(){
//     console.log("Hola estudiantes");
// }

// saludar();



// function solicitarNombre() {
//     let nombreIngresado = prompt("Ingresar nombre")
//     alert(`El nombre ingresado es ${nombreIngresado}`)
// }

// solicitarNombre();
// solicitarNombre();
// solicitarNombre();

// function solicitarNombre() {
//     let nombreIngresado = prompt("Ingresar nombre")
//     alert(`El nombre ingresado es ${nombreIngresado}`)
// }

// let nombre = prompt("Ingresar nombre")

// function mostrarSaludo(name){
//     alert("Hola " + name + " bienvenido a la clase 4")
// }

// let nombre = prompt("Ingresar nombre");
// mostrarSaludo(nombre);

// function mostrarSaludoPorCurso(nombre, curso){
//     alert(`Bienvenido: ${nombre} a tu curso de ${curso}` )

// }

// let names = prompt("Ingresa tu nombre");
// let course = prompt("Ingresa tu curso");

// mostrarSaludoPorCurso(names,course);

function multiplicar(a, b) {
    return a * b;  // Retorna el producto de a y b
}

let resultado = multiplicar(4, 5);  // Llama a la función y guarda el retorno en una variable
console.log(resultado);  // Muestra 20

// Función para calcular el precio final de un producto
function calcularPrecioFinal(precioBase, descuento, impuesto, tieneCupón) {
    // Aplicar descuento
    let precioConDescuento = precioBase - (precioBase * (descuento / 100));
    
    // Aplicar impuesto
    let precioConImpuesto = precioConDescuento + (precioConDescuento * (impuesto / 100));
    
    // Si el cliente tiene un cupón, aplicar un descuento adicional
    if (tieneCupón) {
        precioConImpuesto = precioConImpuesto - (precioConImpuesto * 0.1);  // 10% de descuento adicional
    }
    
    // Retornar el precio final calculado
    return precioConImpuesto.toFixed(2);  // Retorna el valor redondeado a dos decimales
}

// Llamada a la función con los valores específicos
let precioBase = 100;   // Precio original del producto
let descuento = 20;     // Descuento en porcentaje (20%)
let impuesto = 18;      // Impuesto en porcentaje (18%)
let tieneCupón = true;  // Indica si tiene cupón de descuento adicional

// Calcular el precio final
let precioFinal = calcularPrecioFinal(precioBase, descuento, impuesto, tieneCupón);

console.log("El precio final es: $" + precioFinal);  // Muestra el precio final calculado


const operaciones = (a, b) => {
    const suma = a + b;
    const producto = a * b;
    return { suma, producto };  // Devuelve un objeto con los resultados
};

console.log(operaciones(3, 5));  // { suma: 8, producto: 15 }

