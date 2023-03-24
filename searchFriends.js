let entradaUsuario = prompt ('Ingrese ID de Usuario');

function retornaDatos (data) {
    switch (data) {
        case '1':
            alert ('Job Daniel, fecha alta: 2021-09-16')
            break
        case '5':
            alert ('Juan, fecha alta: 2021-05-01')
            break
        case '6':
            alert ('Jose, fecha alta: 2021-01-01')
            break
        case '14':
            alert ('Citlalli, fecha alta: 2021-03-15')
            break;
        case '600':
            alert ('Maria, fecha alta: 2021-03-11')
            break
         default:
            alert ('Este ID no está registrado')
            break
    }
}

retornaDatos(entradaUsuario);