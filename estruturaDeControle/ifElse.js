let imprindoNota = function (nota) {
    if(nota >= 7){
        console.log('Aprovado com Sucesso sua nota é ... ' + nota )
    } else
        console.log('Aluno Reprovado, sua nota... ' + nota)
}
imprindoNota(10)


let nomeDoUsuario = function(nome) {
    if(nome == 'junior'){
        console.log('Seja bem Vindo ' + nome)
    }else{
        console.log('Erro de login ')
    }
}
nomeDoUsuario('Leonardo')