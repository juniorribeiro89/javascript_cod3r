// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)

// Armazenando uma função arrow (arrow function) em uma variavel
const soma = (a, b) => {
    return a + b
} 
console.log(soma(2, 2))

// retorno implicito 
const multiplicacao = (a, b) => a * b
console.log(multiplicacao(2,3))