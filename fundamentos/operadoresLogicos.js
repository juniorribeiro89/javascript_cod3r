function compras(trabalho1, trabalho2) {
    let tomarSorvete = trabalho1 || trabalho2
    let comprarTv50 = trabalho1 && trabalho2
    let comprarTv23 = trabalho1 != trabalho2
    let saudavel = !tomarSorvete

    return{tomarSorvete, comprarTv50, comprarTv23, saudavel}
}

console.log(compras(true, false))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))