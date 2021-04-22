const pessoa = {
    saudacao: 'Ola Pessoas',
    falar(){
        console.log(this.saudacao)
    }
}
// usando a função como conhecemos.
pessoa.falar( )

// Criando uma constante para a função falar, esse codig gera erro.
const falar = pessoa.falar
falar()

//funcao bind atribui a variavel a saudacao
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()