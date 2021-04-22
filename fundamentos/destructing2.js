function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min // sem essa linha, o print é apenas zero.
    return Math.floor(valor)

}

// chamando a função
console.log(rand())

// Outra opção, nesta opção o objeto usa todo o range, aqui existe o objeto com parametros.
const obj = { max:50, min: 25}
console.log(rand(obj))

// mesmo situação da anterior, porem passando apenas a função e objeto vazio.
console.log(rand({}))
