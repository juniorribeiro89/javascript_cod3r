function notaBoa(nota) {
    if(nota >= 7){
        console.log("Aprovado com nota " + nota)
    }
}
notaBoa(9)
notaBoa(3)

function seForVerdadeEuFalo(valor) {
    if(valor){
        console.log('Se For Verdade Eu Falo... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(1)
seForVerdadeEuFalo(" '' ")
seForVerdadeEuFalo({})
seForVerdadeEuFalo(null)
seForVerdadeEuFalo('?')

function teste1(num){
    if(num > 7); {
        console.log(num)
    }
}
teste1(6)
teste1(9)