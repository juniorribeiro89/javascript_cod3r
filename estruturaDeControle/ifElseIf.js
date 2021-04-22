Number.prototype.entre = function (i,f) {
    return this >= i && this <= f
}

let imprimirResultados = function (nota) {
    if(nota.entre(9,10)){
        console.log('Aprovado com Sucesso')
    }else if(nota.entre(7,8)){
        console.log('Aprovado')
    }else if(nota.entre(5,6)){
        console.log('Recuperação')
    }else if(nota.entre(3,4)){
        console.log('Só um Milagre')
    }else if(nota.entre(1,2)){
        console.log('Reprovado')
    }else{
        console.log('Nota Invalida')
    }

    console.log('Fim')
}

imprimirResultados(10)
imprimirResultados(5)
imprimirResultados(1)
imprimirResultados(-1)