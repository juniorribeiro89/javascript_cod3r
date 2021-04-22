// Exemplo correto! 
// function mensagemGritar(obj) {
//     console.log(obj.name.toUpperCase() + '!!!')
// }
// const obj = {
    // name: 'Junior',
    // idade: 31}
// mensagemGritar(obj)


function tratandoErro(erro) {
    throw new Error(' 256 ')
    
}
function grito(obj) {
    try{
        console.log(obj.name.toUpperCase() + '@@@')    

    } catch(e){
        tratandoErro(e)
        console.log()

    }
}
const obj = {nome: 'Ribeiro'}
grito(obj)