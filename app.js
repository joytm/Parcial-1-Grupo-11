var nombre;
var apellido;
var fecha;
var cursos;

nombre = prompt("Ingrese su nombre");
apellido = prompt("Ingrese sus apellidos");
fecha = prompt("Ingrese su fecha de nacimiento")
cursos = prompt("Ingrese el número de cursos de programación realizados")

console.log(nombre + " " + apellido);
console.log(fecha);
console.log(cursos);

var cursos = parseInt(cursos);
suma = cursos + 1;
console.log(suma);

if (fecha < 2000) {
    alert("¿Estas seguro que eres un programador Junior?");
}

/*Hubiera podido declarar la variable y lanzar el prompt en la misma línea de código: 
var nombre = prompt (por favor introduce tu nombre)*/