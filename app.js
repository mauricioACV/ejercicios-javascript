//********************************************************************
//*************************  ejercicio 1  ****************************
//********************************************************************
// Han pasado __ años.
// Escribe un ciclo for que muestre por consola
// los números desde el 0 hasta tu edad.
// Te dejamos un ejemplo de la sintaxis.

console.log("Inicio ejercicio 1");
console.log("---------------------------");

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.log("---------------------------");
console.log("Fin ejercicio 1");

//********************************************************************
//*************************  ejercicio 2  ****************************
//********************************************************************
// Han pasado __ años, funcional
// Abstrae el ciclo anterior en una función,
// que tome como argumento un número (representando una edad),
//  y que cuando se invoque esa función,
//  muestre por consola los números del 0 a esa edad.

console.log("Inicio ejercicio 2");
console.log("---------------------------");

function mostrarNumeros(edad) {
  for (let i = 0; i <= edad; i++) {
    console.log(i);
  }
}

let edad = 18;
mostrarNumeros(edad);

console.log("---------------------------");
console.log("Fin ejercicio 2");

//********************************************************************
//*************************  ejercicio 3  ****************************
//********************************************************************
// Follow me
// Agrega elemento a un array
// utilizando los métodos unshift y push.

// Tomando en cuenta un array de twitter handles,
// los cuales pertenecen a grandes referentes
// en el mundo del front-end,
// utiliza el método unshift, o push,
// para agregar personas a la lista.

console.log("Inicio ejercicio 3");
console.log("---------------------------");

let referentes = [
  "@wesbox",
  "@dan_abramov",
  "@stolinkski",
  "@ryanflorence",
  "@kentcdodds",
  "@sophiebits",
  "@acdlite",
  "@sebmarkbage",
  "@stevekinney"
];

function mostrarReferentes(arreglo) {
  for (let index = 0; index < arreglo.length; index++) {
    console.log(arreglo[index]);
  }
}

console.log("***Itero la lista original de referentes***");
mostrarReferentes(referentes);

//Agrego un nuevo referente al final de la lista
referentes.push("@nuevo referente al final");

console.log(
  "***invoco la funcion mostrarRefernetes y muestro nuevo referente agregado al final de la lista***"
);
mostrarReferentes(referentes);

//Agrego un nuevo referente al inicio de la lista
referentes.unshift("@nuevo referente al inicio");

console.log(
  "***invoco la funcion mostrarRefernetes y muestro nuevo referente agregado al inicio de la lista***"
);
mostrarReferentes(referentes);

console.log("---------------------------");
console.log("Fin ejercicio 3");

//********************************************************************
//*************************  ejercicio 4  ****************************
//********************************************************************
// Follow me, funcional
// Partiendo del ejercicio anterior,
// desarrolla una función que tome un username,
// y un array de users, y que retorne el array
// con el username dentro de sus elementos.

console.log("Inicio ejercicio 4");
console.log("---------------------------");

let referentes2 = [
  "@wesbox",
  "@dan_abramov",
  "@stolinkski",
  "@ryanflorence",
  "@kentcdodds",
  "@sophiebits",
  "@acdlite",
  "@sebmarkbage",
  "@stevekinney"
];

//La funcion agreagarNombre recibe dos parametros "arreglo" y "nuevonombre"
//Se declara variable nuevoArreglo y se le asigna el arreglo recibido en los parametros
//hago push al nuevoArreglo y le paso el nuevoNombre
//Finalmente retorno el nuevo arreglo con el nombre agregado

function agregarNombre(arreglo, nuevoNombre) {
  let nuevoArreglo = arreglo;
  nuevoArreglo.push(nuevoNombre);
  return nuevoArreglo;
}

//Declaro variable y le asigno la invoación de la funcion agregarNombre
//Como parametros le paso el arreglo referentes2 y un string "@referenteNuevo!" que quiero
//agregar a la lista de referentes2. La variable contiene lo que retorne la funcion que se invoca
//en este caso la funcion retorna nuevoArreglo, por lo tanto la variable nuevosNombres contiene dicho arreglo

let nuevosNombres = agregarNombre(referentes2, "@referenteNuevo!");

//muestro en consola lo que contiene nuevosNombres,
//se mostrará el arreglo complero con el nuevo nombre incluido.

console.log(nuevosNombres);

console.log("---------------------------");
console.log("Fin ejercicio 4");

//********************************************************************
//*************************  ejercicio 5  ****************************
//********************************************************************
// Stalker
// Desarrolla una función que verifique
// si un string está dentro de un array.
// La función debe tomar una lista y un string.
//  La lista representa un array de usernames y el string
//  el nombre a buscar.
// Se espera que la función muestre por consola
// el mensaje correspondiente al resultado.

console.log("Inicio ejercicio 5");
console.log("---------------------------");

let followers = [
  "@wesbos",
  "@dan_abramov",
  "@stolinkski",
  "@ryanflorence",
  "@kentcdodds",
  "@sophiebits",
  "@acdlite",
  "@sebmarkbage",
  "@stevekinney"
];

//La siguiente funcion verificaUerName recibe dos parametros, una arreglo y un userName (string)
//para evaluar si un string se encuentra dentro de un arreglo podemos usar el metodo indexOf()
//indexOf retorna la posición en la que un string se encuentra dentro de un arreglo, por lo tanto
// si encuentra el string siempre devolvera un numero positivo de cero a más, y siempre retornará
//-1 si no lo encuentra
//para este ejercicio ejecuto indexOf en la misma linea del return

function verificarUserName(arreglo, userName) {
  return arreglo.indexOf(userName);
}

//Este console.log mostrará el valor de -1 ya que el string "@havebeeair" NO existe dentro del arreglo

console.log(verificarUserName(followers, "@havebeeair"));

//Este console.log mostrará el valor de posición 0 ya que el string "@wesbos" SI existe dentro del arreglo
//y devuelve indice cero porque esta de los primeros en la lista

console.log(verificarUserName(followers, "@wesbos"));

//Ahora declaro dos variables que contienen dos string distintos. user1 contiene un string que NO se
//encuentra en el arreglo "followers" y user2 contiene un string que SI se encuentra dentro de este arreglo
let user1 = "@havebeeair";
let user2 = "@wesbos";

//Declaro dos variables existeUser1 y existeUser2 para guardar lo que retorna la funcion verificaUserName()
let existeUser1 = verificarUserName(followers, user1);
let existeUser2 = verificarUserName(followers, user2);

//Una forma de evaluar con IF

//Evaluo si existe user1
//Como existeUser1 invocó la funcion verificarUserName con el string de user1, y este NO existe en
//el arreglo, entonces existeUser1 contendrá el valor de -1 como resultado se mostrara el mensaje del ELSE
if (existeUser1 >= 0) {
  console.log(`El nombre de usuario: ${user1} SI existe en el arreglo`);
} else {
  console.log(`El nombre de usuario: ${user1} NO existe en el arreglo`);
}

//Evaluo si existe user2
//Como existeUser2 invocó la funcion verificarUserName con el string de user2, y este SI existe en
//el arreglo, entonces existeUser2 contendrá el valor de 0 como resultado se mostrara el mensaje del IF
if (existeUser2 >= 0) {
  console.log(`El nombre de usuario: ${user2} SI existe en el arreglo`);
} else {
  console.log(`El nombre de usuario: ${user2} NO existe en el arreglo`);
}

//Alternativa para evaluar, distinta a los IF anteriores
//El operador ternario funciona así:
//Lo que esta antes del signo de interrogación es lo que evaluamos si es true o false
//Luego después del signo de interrogación...
//Lo que esta antes de los dos puntos se ejecuta si lo evaluado es true
//Lo que esta después de los dos puntos se ejecuta si lo evaluado es false

//Evaluo si existe user1
existeUser1 >= 0 ? console.log("existe") : console.log("NO existe");

//Evaluo si existe user2
existeUser2 >= 0 ? console.log("existe") : console.log("NO existe");

console.log("---------------------------");
console.log("Fin ejercicio 5");

//********************************************************************
//*************************  ejercicio 6  ****************************
//********************************************************************
// unfollow funcional
// Agrega al ejemplo anterior la funcionalidad de poder eliminar
// elementos de un array con el método splice.
// Desarrolla una función que tome un username, y un array de users,
// y que retorne el array sin el username dentro de sus elementos.
// Adicionalmente, muestra un mensaje por consola que indique
// si el username pasado como argumento no fue encontrado en la lista.
// Tip: utiliza la función de stalker para determinar
// si un username está en la lista de nombres.

console.log("Inicio ejercicio 6");
console.log("---------------------------");

//Este arreglo es el mismo que el del ejercicio anterior pero con otro nombre
let followers2 = [
  "@wesbos",
  "@dan_abramov",
  "@stolinkski",
  "@ryanflorence",
  "@kentcdodds",
  "@sophiebits",
  "@acdlite",
  "@sebmarkbage",
  "@stevekinney"
];

//esta funcion es la misma del ejercicio anterior pero con otro nombre
function verificarUserName2(arreglo, userName) {
  return arreglo.indexOf(userName);
}

//la funcion deleteUser recibe dos parametros, uno es el arreglo con la lista de nombres de usuario, el otro
//es el userName que queremos eliminar. dentro de la funcion primero declaro la variable respuesta sin asignacion
//de valor, solo la variable. Luego declaro la variable nuevoArreglo y le asigno el arreglo que recibimos en los
//parametros de la funcion. Despues declaro la variable userPosition y le asigno el valor que retorne la invocación
//de la funcion verificarUserName2, esta nos rerotna la posición en que se encuentra el string userName dentro del
//arreglo. En este caso estamos evaluando "@wesbos" que se encuentra al inicio del arreglo,
//su posición es cero, userPosition entonces contiene un cero. En caso contrario contendría -1. al evaluar
//en el if, si userPsition tiene un valor igual o mayor a cero, quiere decir que encontró la posición dentro
//del arreglo del nombre de usuario que queremos eliminar, se evaluará true porque la posición es igual a cero
//ocupamos el metodo splice pasandole la posición desde donde queremos eliminar, y como segundo argumento a splice
//le pasamos el número de elementos que queremos eliminar, en este caso solo 1. Le pasamos el nuevoArreglo a la
//variable respuesta, esto significa que respuesta ahora contiene la información de nuevoArreglo pero sin el nombre
//de usuario que eliminamos.
//Si no se encuentra el string dentro del arreglo, userPosition asumirá el valor de -1, por lo tanto
//no se ejecuta el bloque de codigo del IF, se ejecuta el bloque de codigo del ELSE, y la variable respuesta
//asume el valor de un string con el mensaje "userName no existe"
//al final, dependiendo de si se ejecutó el IF o el ELSE retornamos el valor que asumió la variable respuesta.

function deleteUser(arreglo, userName) {
  let respuesta;
  let nuevoArreglo = arreglo;
  let userPosition = verificarUserName2(arreglo, userName);
  console.log(userPosition);
  if (userPosition >= 0) {
    nuevoArreglo.splice(userPosition, 1);
    respuesta = nuevoArreglo;
  } else {
    respuesta = "userName no existe";
  }
  return respuesta;
}

//declaro variable para contener un nombre de usuario para pasarla a la funcion deleteUser
let usuarioEliminar = "@wesbos";

//declaro variable resultado, que contendrá lo que nos retorne la funcion deleteUser cuando la invocamos
//pasandole el arreglo y el nombre de usuario que queremos eliminar.
let resultado = deleteUser(followers2, usuarioEliminar);
//resultado por consola
console.log(resultado);

console.log("---------------------------");
console.log("Fin ejercicio 6");

//********************************************************************
//*************************  ejercicio 7  ****************************
//********************************************************************

//Promedio
// Desarrolla una función que retorne el promedio de una lista de números.
// La función deberá recibir como argumentos un array de números.

console.log("Inicio ejercicio 7");
console.log("---------------------------");

let listaNumeros = [4, 50, 30, 21, 10, 55, 66, 20, 90];

//la funcion calcularPromedio recibe un parametro, que es un arreglo de numeros. dentro de la funcion declaro
//la variable acumulator y la inicializo en cero. Luego itero el arreglo con un for, y acumulator comienza a sumar
//elemento por elemento del arreglo de números. Luego declaro la variable promedio y le asigno la operación de
//dividir el valor de acumulator por el largo del arreglo. Finalmente retorno lo que contiene la variable promedio

function calcularPromedio(arregloNum) {
  let acumulador = 0;
  for (let i = 0; i < arregloNum.length; i++) {
    acumulador = acumulador + arregloNum[i];
  }
  let promedio = acumulador / arregloNum.length;
  return promedio;
}

//guardo ennvariable prom lo que retornar la funcion calcularPromedio
let prom = calcularPromedio(listaNumeros);
//muestro en consola el resultado.
console.log(`El promedio es: ${prom}`);

console.log("---------------------------");
console.log("Fin ejercicio 7");

//********************************************************************
//*************************  ejercicio 8  ****************************
//********************************************************************
// Escándalo-tron v0.4

console.log("Inicio ejercicio 8");
console.log("---------------------------");

let arrDecibelios = [10, 20, 30, 40, 50, 60];
let arrDecibelios2 = [5, 5, 6, 5, 5, 10];
let arrDecibelios3 = [50, 75, 76, 85, 65, 100];

function escandaloTron(arregloDecibelios) {
  let promDecibelios = calcularPromedio2(arregloDecibelios);
  if (promDecibelios <= 30) {
    return "Susurro";
  }
  if (promDecibelios > 30 && promDecibelios < 60) {
    return "Normal";
  }
  if (promDecibelios > 60) {
    return "Escándolo";
  }
}

function calcularPromedio2(arregloNum) {
  let acumulador = 0;
  for (let i = 0; i < arregloNum.length; i++) {
    acumulador = acumulador + arregloNum[i];
  }
  let promedio = acumulador / arregloNum.length;
  return promedio;
}

let resultado1 = escandaloTron(arrDecibelios);
let resultado2 = escandaloTron(arrDecibelios2);
let resultado3 = escandaloTron(arrDecibelios3);

console.log(`Escándolo-tron1 : ${resultado1}`);
console.log(`Escándolo-tron2 : ${resultado2}`);
console.log(`Escándolo-tron3 : ${resultado3}`);

console.log("---------------------------");
console.log("Fin ejercicio 8");
