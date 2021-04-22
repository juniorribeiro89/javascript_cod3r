// Função Sem Retorno
function imprindoSoma(a, b){
    console.log(a+b)
}
    imprindoSoma(5, 5)

// Função com Retorno.
function soma(a,b = 0){
    return a + b
}

console.log(soma(2,3))

// Função com tratamento 
function somaTratada(a = 1, b = 2){
    return a + b
}
console.log(somaTratada())