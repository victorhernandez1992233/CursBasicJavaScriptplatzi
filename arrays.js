var frutas = []; // Array Literal Syntax 

var frutas = ["Manzana", "Platano", "Cereza", "Freza"]; 
 console.log(frutas); 
 console.log(frutas.length); // length es una propiedad del array
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"]; 
console.log(frutas); 
console.log(frutas.length); // length es una propiedad del array

 // Acceder (por índice) a un elemento del Array
 console.log(frutas[0]);   // Los arrays iician en "0" 
// Acceder (por índice) a un elemento del Array
console.log(frutas[0]);   // Los arrays iician en "0" 


// === Metodos para mutar arrays ===
var frutas = ["Manzana", "Platano", "Cereza", "Freza"];
// .push();

 var masFrutas = frutas.push("Uvas"); // Esté metodo añadirá "Uvas" añ final del array
 console.log(frutas);

// .pop();

 var utlimo = frutas.pop("Uvas"); // Eliminará "Uvas" del final 
 console.log(frutas);

// unshift()

var nuevaLogitud = frutas.unshift("Uvas"); // Añade "Uvas" al inicio 
console.log(frutas);

// shift()

var borrarFruta = frutas.shift("Manzana"); // Elimina "Manzana" del inico
console.log(frutas);

// .indexOf();

var posicion = frutas.indexOf("Platano"); // te dará la posición de ese item en el array
console.log(frutas);