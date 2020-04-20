'use strict'
function usuario()
{
    
let nombre = prompt("introduce el nombre del usuario")

let expresion = /[A-Z]/

if(expresion.test(nombre))
    alert("El nombre de usuario está en mayuscula")
  
   else
    alert("El nombre de usuario no está en mayuscula")

}

    usuario()