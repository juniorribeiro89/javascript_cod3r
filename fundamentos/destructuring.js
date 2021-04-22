const pessoa = {
    nome: 'junior',
    idade: 32,
    endereco: {
        rua: 'Siqueira Campos',
        numero: 771
    }
}

// Chamando o descontructing 
const { nome, idade } =  pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const {endereco: {rua, numero, cep} } = pessoa
console.log(rua, numero, cep)