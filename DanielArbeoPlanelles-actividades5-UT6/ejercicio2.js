'use strict'

function movil()
{

let telefono = prompt("introduzca el numero de telefono del usuario");

let numero = /[0-9]{9}/;

    if (numero.test(telefono))
        alert("el numero de teléfono del usuario es válido")
    else
        alert("el numeor de teléfono del usuario no es valido")
}

    movil()