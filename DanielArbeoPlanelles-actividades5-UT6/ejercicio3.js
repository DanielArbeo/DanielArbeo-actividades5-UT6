'use strict'

function email()
{

    let correo = prompt("introduce una direccion de correo electronico")

    let correoelectronico = /[a-z]*@[iesdoctorbalmis[hotmail|outlook|gmail][.com|.es]/

    if(correoelectronico.test(correo))
        alert("El correo es valido")
    else
        alert("El correo no es valido, por favor refresque la pagina y vuelva a intentarlo, Gracias")

}

    email()