/*

// Ejercicios de estructuras de control, bucles, funciones y forEach y map

// ==============================
// EJERCICIOS JAVASCRIPT OCTUBRE
// ==============================

// ------------------------------
// CONDICIONALES
// ------------------------------

console.log("Ejercicio 1: if simple");
// Escribe una función llamada 'esAdultoMayor' que reciba una edad y devuelva true si es mayor de 65, false en caso contrario.

const esAdultoMayor = edad => { return edad > 65}

// Datos de prueba:
console.log(esAdultoMayor(70)); // Debería mostrar: true
console.log(esAdultoMayor(50)); // Debería mostrar: false

console.log("\nEjercicio 2: if-else");
// Escribe una función llamada 'verificarTemperatura' que reciba una temperatura (°C) y devuelva 'Hace calor' si es ≥30, 'Hace frío' si es <30.

const verificarTemperatura = temp => {
  return temp >= 30 ? "Hace calor" : "Hace frío";
}

// Datos de prueba:
console.log(verificarTemperatura(32)); // Debería mostrar: 'Hace calor'
console.log(verificarTemperatura(20)); // Debería mostrar: 'Hace frío'

console.log("\nEjercicio 3: if-else if");
// Escribe una función llamada 'clasificarEdad' que reciba una edad y devuelva:
// 'Niño' si ≤12, 'Adolescente' si 13-17, 'Adulto' si 18-64, 'Adulto mayor' si ≥65

function clasificarEdad(edad) {
  if (edad <= 12) {
    return "Niño";
  } else if (edad >= 13 && edad <= 17) {
    return "Adolescente";
  } else if (edad >= 18 && edad <= 64) {
    return "Adulto";
  } else if (edad >= 65) {
    return "Adulto mayor";
  }
}

// Datos de prueba:
console.log(clasificarEdad(10)); // Debería mostrar: 'Niño'
console.log(clasificarEdad(15)); // Debería mostrar: 'Adolescente'
console.log(clasificarEdad(30)); // Debería mostrar: 'Adulto'
console.log(clasificarEdad(70)); // Debería mostrar: 'Adulto mayor'

console.log("\nEjercicio 4: switch");
// Escribe una función llamada 'obtenerColor' que reciba un número del 1 al 3 y devuelva: 1 → 'Rojo', 2 → 'Verde', 3 → 'Azul', otro → 'Color desconocido'

function obtenerColor(num) {
    switch(num) {
        case 1: return "Rojo";
        case 2: return "Verde";
        case 3: return "Azul";
        default: return "Color desconocido"
    }

}
// Datos de prueba:
console.log(obtenerColor(1)); // Debería mostrar: 'Rojo'
console.log(obtenerColor(3)); // Debería mostrar: 'Azul'
console.log(obtenerColor(5)); // Debería mostrar: 'Color desconocido'

console.log("\nEjercicio 5: Condicional ternario");
// Escribe una función llamada 'esPositivo' que reciba un número y devuelva 'Positivo' si ≥0, 'Negativo' si <0

const esPositivo = num => {
    return num >= 0 ? "Positivo" : "Negativo"
}
// Datos de prueba:
console.log(esPositivo(5));  // Debería mostrar: 'Positivo'
console.log(esPositivo(-3)); // Debería mostrar: 'Negativo'

console.log("\nEjercicio 6: Combinación de condicionales");
// Escribe una función llamada 'puedeVotar' que reciba edad y nacionalidad ('sí' o 'no') y devuelva true si edad ≥18 y nacionalidad 'sí', false en caso contrario

const puedeVotar = (edad, nacionalidad) => {
    return edad >= 18 && nacionalidad === "sí";
}

// Datos de prueba:
console.log(puedeVotar(20, 'sí'));  // Debería mostrar: true
console.log(puedeVotar(16, 'sí'));  // Debería mostrar: false
console.log(puedeVotar(25, 'no'));  // Debería mostrar: false

// ------------------------------
// BUCLES
// ------------------------------

console.log("\nEjercicio 7: Bucle for");
// Escribe una función llamada 'imprimirPares' que imprima los números pares del 2 al 20.

function imprimirPares() {
    for (let i = 1; i < 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// Datos de prueba:
imprimirPares();
// Debería imprimir: 2 4 6 8 10 12 14 16 18 20

console.log("\nEjercicio 8: Bucle for (suma)");
// Escribe una función llamada 'sumarPares' que sume todos los números pares hasta n

function sumarPares(num) {
    let suma = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            suma += i;
        }
    }
    return suma;
}

// Datos de prueba:
console.log(sumarPares(10)); // Debería mostrar: 30

console.log("\nEjercicio 9: Bucle while");
// Escribe una función llamada 'contarImpares' que cuente de 1 hasta n solo los números impares

function contarImpares(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

// Datos de prueba:
contarImpares(10);
// Debería imprimir: 1 3 5 7 9

console.log("\nEjercicio 10: Bucle do-while");
// Escribe una función llamada 'pedirContraseña' que simule pedir contraseña hasta que sea 'admin' usando un array de intentos

function pedirContraseña(intentos) {
    let contraseña = "admin";
    let i = 1;
    do {
        console.log(`Intento ${i}: ${intentos[i-1]}`);
        i++;
    } while (intentos[i-2] != contraseña);
    console.log('Contraseña correcta!');
}

// Datos de prueba:
const intentos = ['1234', 'qwerty', 'admin'];
pedirContraseña(intentos);
// Ejemplo de salida:
// Intento 1: 1234
// Intento 2: qwerty
// Intento 3: admin
// ¡Contraseña correcta!

console.log("\nEjercicio 11: Bucle for (array)");
// Escribe una función llamada 'multiplicarArray' que reciba un array de números y devuelva el producto de todos ellos

const multiplicarArray = arr => {
    let resultado = 1;
    arr.forEach(n => {
        resultado *= n
    })
    return resultado;
}

// Datos de prueba:
console.log(multiplicarArray([1, 2, 3, 4])); // Debería mostrar: 24

console.log("\nEjercicio 12: Bucle while (factorial)");
// Escribe una función llamada 'factorial' que reciba un número n y devuelva su factorial usando while

function factorial(num) {
    let factorial = 1;
    let i = num;
    while (i > 0) {
        factorial *= i;
        i--;
    }
    return factorial;
}

// Datos de prueba:
console.log(factorial(5)); // Debería mostrar: 120

// ------------------------------
// forEach y map
// ------------------------------

console.log("\nEjercicio 13: forEach básico");
// Utiliza forEach para imprimir cada número del array 'numeros' al cuadrado
// Datos de prueba:
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(num => console.log(num**2));
// Debería imprimir: 1 4 9 16 25

console.log("\nEjercicio 14: forEach con índice");
// Utiliza forEach para imprimir cada nombre del array 'nombres' con su índice
// Datos de prueba:
const nombres = ['Ana', 'Juan', 'María'];
nombres.forEach((n, i) => {
    console.log(`${i}. ${n}`);
}) 
// Debería imprimir:
// Nombre en índice 0: Ana
// Nombre en índice 1: Juan
// Nombre en índice 2: María

console.log("\nEjercicio 15: forEach con objetos");
// Utiliza forEach para imprimir el nombre y salario de cada empleado en el array 'empleados'
// Datos de prueba:
const empleados = [
  { nombre: 'Luis', salario: 1200 },
  { nombre: 'Eva', salario: 1500 },
];
empleados.forEach(e => {
    console.log(`${e.nombre} gana ${e.salario} euros`)
})
// Debería imprimir:
// Luis gana 1200 euros
// Eva gana 1500 euros

console.log("\nEjercicio 16: map básico");
// Utiliza map para crear un nuevo array con el cubo de cada número del array 'numeros'
const numeros = [1, 2, 3, 4, 5];
const cubos = numeros.map(n => n**3)
// Datos de prueba:
console.log(cubos);
// Debería mostrar: [1, 8, 27, 64, 125]

console.log("\nEjercicio 17: map con strings");
// Utiliza map para crear un nuevo array con las palabras en mayúsculas
const palabras = ["hola", "mundo", "js"];
const mayus = palabras.map(p => p.toUpperCase())
// Datos de prueba:
console.log(mayus);
// Debería mostrar: ['HOLA', 'MUNDO', 'JS']

console.log("\nEjercicio 18: map con objetos");
// Utiliza map para crear un array con los salarios de los empleados

const edades = empleados.map(e => e.salario)
// Datos de prueba:
console.log(edades);
// Debería mostrar: [1200, 1500]

console.log("\nEjercicio 19: Combinación map + forEach");
const empleados = [
  { nombre: 'Luis', salario: 1200 },
  { nombre: 'Eva', salario: 1500 },
];
// Primero usa map para obtener salarios y luego forEach para sumarlos
const salarios = empleados.map(e => e.salario)
let sumaTotal = 0;
salarios.forEach(s => {
    sumaTotal += s;
})
console.log("Los salarios son:", salarios);
console.log("La suma total de los salarios es:", sumaTotal);
// Datos de prueba:
// Salarios: 1200, 1500
// Debería imprimir:
// Las edades son: [1200,1500]
// La suma de todas las edades es: 2700

// ------------------------------
// FUNCIONES
// ------------------------------

console.log("\nEjercicio 20: Tipos de funciones");
// Crear función declarativa 'restar' y expresión 'modulo'
function restar(a, b) {
    return a - b;
}

const modulo = function (a, b) {
    return a % b;
}
// Datos de prueba:
console.log(restar(10,3)); // Debería mostrar: 7
console.log(modulo(10,3)); // Debería mostrar: 1
*/
console.log("\nEjercicio 21: Métodos");
// Crear objeto 'banco' con métodos depositar, retirar y consultarSaldo

const banco = {
    saldo: 1000,
    depositar(n) {
        this.saldo += n;
        return this.saldo;
    },
    retirar(n) {
        this.saldo -= n;
        return this.saldo;
    },
    consultarSaldo() {
        return this.saldo;
    }
}

// Datos de prueba:
console.log(banco.depositar(500)); // Debería mostrar: 1500
console.log(banco.retirar(200));   // Debería mostrar: 1300
console.log(banco.consultarSaldo());// Debería mostrar: 1300

console.log("\nEjercicio 22: Parámetros por defecto");
// Crear función 'multiplicarPor' con factor por defecto = 2
// Datos de prueba:
console.log(multiplicarPor(5));    // Debería mostrar: 10
console.log(multiplicarPor(5,3));  // Debería mostrar: 15

console.log("\nEjercicio 23: Funciones que retornan valores");
// Crear función 'esMultiploDe5'
// Datos de prueba:
console.log(esMultiploDe5(10)); // Debería mostrar: true
console.log(esMultiploDe5(7));  // Debería mostrar: false

console.log("\nEjercicio 24: Arrow functions");
// Convertir función tradicional en arrow function 'sumarDos'
// Datos de prueba:
console.log(sumarDos(5)); // Debería mostrar: 7

console.log("\nEjercicio 25: Funciones como argumentos");
// Crear función 'aplicarOperacionAvanzada' que reciba dos números y una función
// Datos de prueba:
console.log(aplicarOperacionAvanzada(3,4,multiplicar)); // Debería mostrar: 12

console.log("\nEjercicio 26: Closure simple");
// Crear función 'generadorDeID' que devuelva IDs incrementales
// Datos de prueba:
console.log(nuevoID()); // Debería mostrar: 1
console.log(nuevoID()); // Debería mostrar: 2
console.log(nuevoID()); // Debería mostrar: 3

console.log("\nEjercicio 27: Closure con configuración");
// Crear función 'contadorInicial' que empiece desde un número inicial
// Datos de prueba:
console.log(contarDesde5()); // Debería mostrar: 6
console.log(contarDesde5()); // Debería mostrar: 7

// ------------------------------
// EJERCICIOS COMBINADOS
// ------------------------------

console.log("\nEjercicio 28: Condicional + bucle");
// Crear función 'imprimirMultiplos' que reciba n y límite e imprima múltiplos de n
// Datos de prueba:
imprimirMultiplos(3,15);
// Debería imprimir: 3 6 9 12 15

console.log("\nEjercicio 29: Array + condicional");
// Crear función 'filtrarPares' que devuelva solo los números pares de un array
// Datos de prueba:
console.log(filtrarPares([1,2,3,4,5,6])); // Debería mostrar: [2,4,6]

console.log("\nEjercicio 30: Objeto + map + función");
// Crear función 'promediarEdades' que devuelva el promedio de edades de un array de personas
// Datos de prueba:
console.log(promediarEdades(grupo)); // Debería mostrar: 28.333333333333332









// ==============================
// JAVASCRIPT EXERCISES OCTOBER
// ==============================

// ------------------------------
// CONDITIONALS
// ------------------------------

console.log("Exercise 1: simple if");
// Write a function called 'isSeniorAdult' that receives an age and returns true if greater than 65, false otherwise.
// Test data:
console.log(isSeniorAdult(70)); // Should display: true
console.log(isSeniorAdult(50)); // Should display: false

console.log("\nExercise 2: if-else");
// Write a function called 'checkTemperature' that receives a temperature (°C) and returns 'Hot' if ≥30, 'Cold' if <30.
// Test data:
console.log(checkTemperature(32)); // Should display: 'Hot'
console.log(checkTemperature(20)); // Should display: 'Cold'

console.log("\nExercise 3: if-else if");
// Write a function called 'classifyAge' that receives an age and returns:
// 'Child' if ≤12, 'Teen' if 13-17, 'Adult' if 18-64, 'Senior' if ≥65
// Test data:
console.log(classifyAge(10)); // Should display: 'Child'
console.log(classifyAge(15)); // Should display: 'Teen'
console.log(classifyAge(30)); // Should display: 'Adult'
console.log(classifyAge(70)); // Should display: 'Senior'

console.log("\nExercise 4: switch");
// Write a function called 'getColor' that receives a number 1-3 and returns: 1 → 'Red', 2 → 'Green', 3 → 'Blue', other → 'Unknown color'
// Test data:
console.log(getColor(1)); // Should display: 'Red'
console.log(getColor(3)); // Should display: 'Blue'
console.log(getColor(5)); // Should display: 'Unknown color'

console.log("\nExercise 5: ternary");
// Write a function called 'isPositive' that receives a number and returns 'Positive' if ≥0, 'Negative' if <0
// Test data:
console.log(isPositive(5));  // Should display: 'Positive'
console.log(isPositive(-3)); // Should display: 'Negative'

console.log("\nExercise 6: combined conditionals");
// Write a function called 'canVote' that receives age and nationality ('yes'/'no') and returns true if age ≥18 and nationality 'yes', false otherwise
// Test data:
console.log(canVote(20, 'yes'));  // Should display: true
console.log(canVote(16, 'yes'));  // Should display: false
console.log(canVote(25, 'no'));   // Should display: false

// ------------------------------
// LOOPS
// ------------------------------

console.log("\nExercise 7: for loop");
// Write a function called 'printEvens' that prints even numbers from 2 to 20
// Test data:
printEvens();
// Should print: 2 4 6 8 10 12 14 16 18 20

console.log("\nExercise 8: for loop (sum)");
// Write a function called 'sumEvens' that sums all even numbers up to n
// Test data:
console.log(sumEvens(10)); // Should display: 30

console.log("\nExercise 9: while loop");
// Write a function called 'countOdds' that counts from 1 to n only odd numbers
// Test data:
countOdds(10);
// Should print: 1 3 5 7 9

console.log("\nExercise 10: do-while loop");
// Write a function called 'askPassword' that simulates asking for a password until 'admin' is entered using an array of attempts
// Test data:
const attempts = ['1234', 'qwerty', 'admin'];
askPassword(attempts);
// Example output:
// Attempt 1: 1234
// Attempt 2: qwerty
// Attempt 3: admin
// Correct password!

console.log("\nExercise 11: for loop (array)");
// Write a function called 'multiplyArray' that receives an array of numbers and returns the product of all elements
// Test data:
console.log(multiplyArray([1, 2, 3, 4])); // Should display: 24

console.log("\nExercise 12: while loop (factorial)");
// Write a function called 'factorial' that receives a number n and returns its factorial using while
// Test data:
console.log(factorial(5)); // Should display: 120

// ------------------------------
// forEach and map
// ------------------------------

console.log("\nExercise 13: basic forEach");
// Use forEach to print each number in the 'numbers' array squared
// Test data:
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(n => console.log(n*n));
// Should print: 1 4 9 16 25

console.log("\nExercise 14: forEach with index");
// Use forEach to print each name in the 'names' array with its index
// Test data:
const names = ['Ana', 'John', 'Mary'];
names.forEach((name,i) => console.log(`Name at index ${i}: ${name}`));
// Should print:
// Name at index 0: Ana
// Name at index 1: John
// Name at index 2: Mary

console.log("\nExercise 15: forEach with objects");
// Use forEach to print each employee's name and salary in the 'employees' array
// Test data:
const employees = [
  { name: 'Luis', salary: 1200 },
  { name: 'Eva', salary: 1500 },
];
employees.forEach(e => console.log(`${e.name} earns ${e.salary} euros`));
// Should print:
// Luis earns 1200 euros
// Eva earns 1500 euros

console.log("\nExercise 16: basic map");
// Use map to create a new array with each number in 'numbers' cubed
// Test data:
console.log(cubes);
// Should display: [1, 8, 27, 64, 125]

console.log("\nExercise 17: map with strings");
// Use map to create a new array with each word in uppercase
// Test data:
console.log(uppercaseWords);
// Should display: ['HELLO', 'WORLD', 'JS']

console.log("\nExercise 18: map with objects");
// Use map to create an array with the salaries of all employees
// Test data:
console.log(salaries);
// Should display: [1200, 1500]

console.log("\nExercise 19: map + forEach combination");
// First use map to get salaries, then use forEach to sum them
// Test data:
// Salaries: 1200, 1500
// Should print:
// Salaries are: [1200,1500]
// The total sum of salaries is: 2700

// ------------------------------
// FUNCTIONS
// ------------------------------

console.log("\nExercise 20: function types");
// Create declarative function 'subtract' and expression function 'modulo'
// Test data:
console.log(subtract(10,3)); // Should display: 7
console.log(modulo(10,3));   // Should display: 1

console.log("\nExercise 21: methods");
// Create object 'bank' with methods deposit, withdraw, and checkBalance
// Test data:
console.log(bank.deposit(500)); // Should display: 1500
console.log(bank.withdraw(200));// Should display: 1300
console.log(bank.checkBalance());// Should display: 1300

console.log("\nExercise 22: default parameters");
// Create function 'multiplyBy' with default factor = 2
// Test data:
console.log(multiplyBy(5));    // Should display: 10
console.log(multiplyBy(5,3));  // Should display: 15

console.log("\nExercise 23: functions returning values");
// Create function 'isMultipleOf5'
// Test data:
console.log(isMultipleOf5(10)); // Should display: true
console.log(isMultipleOf5(7));  // Should display: false

console.log("\nExercise 24: arrow functions");
// Convert traditional function to arrow function 'addTwo'
// Test data:
console.log(addTwo(5)); // Should display: 7

console.log("\nExercise 25: functions as arguments");
// Create function 'applyAdvancedOperation' that receives two numbers and a function
// Test data:
console.log(applyAdvancedOperation(3,4,multiply)); // Should display: 12

console.log("\nExercise 26: simple closure");
// Create function 'idGenerator' that returns incremental IDs
// Test data:
console.log(newID()); // Should display: 1
console.log(newID()); // Should display: 2
console.log(newID()); // Should display: 3

console.log("\nExercise 27: closure with initial value");
// Create function 'counterFrom' that starts from a given number
// Test data:
console.log(countFrom5()); // Should display: 6
console.log(countFrom5()); // Should display: 7

// ------------------------------
// COMBINED EXERCISES
// ------------------------------

console.log("\nExercise 28: conditional + loop");
// Create function 'printMultiples' that receives n and limit and prints multiples of n
// Test data:
printMultiples(3,15);
// Should print: 3 6 9 12 15

console.log("\nExercise 29: array + conditional");
// Create function 'filterEvens' that returns only even numbers from an array
// Test data:
console.log(filterEvens([1,2,3,4,5,6])); // Should display: [2,4,6]

console.log("\nExercise 30: object + map + function");
// Create function 'averageAge' that returns the average age from an array of people
// Test data:
console.log(averageAge(group)); // Should display: 28.333333333333332
