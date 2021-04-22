String.prototype.entre = function (login, senha) {
    return this == login
    
}

let loginComSucesso = function (usuarios) {
    if(usuarios.entre("Junior", "1234")){
        console.log('Seja Bem Vindo ')
    } else if(usuarios.entre(" ", " ")){
        console.log('Digite a senha novamente')
    } else{
        console.log('Usuario invalido')
    }
    
}

loginComSucesso("Junior", "1234")