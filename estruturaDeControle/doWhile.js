function b(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = b(-1, 10)
    console.log(`Numero: ${opcao}.`)

}while(opcao != -1)

console.log('Fim')

// function a(min, max){
//     const valor = Math.random() * (max - min) + min
//     return Math.floor(valor)
// }

// let opcao = 1
// do{
//     opcao = a(0, 10)
//     console.log(`Opção escolhida ${opcao}.`)
// }while (opcao != 1)

// console.log('FIM ')