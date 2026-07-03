const n1 = document.querySelector('#numer')
const n2 = document.querySelector('#numero')
const resul = document.querySelector('#resultado')

const btnsoma = document.querySelector('#btnSomar')
const btnsubtrair = document.querySelector('#btnSub')
const btnmultiplicar = document.querySelector('#btnMultiplicar')
const btndividir = document.querySelector('#btnDividir')

btnsoma.addEventListener('click', somar)
btnsubtrair.addEventListener('click', subtrair)
btnmultiplicar.addEventListener('click', multiplicar)
btndividir.addEventListener('click', dividir)

function somar(){
    if (n1.value == '' || n2.value == ''){
        alert(' \u{1F50D} Preencha os campos vazio , para poder prosseguir')
    }else{
        let soma = Number(n1.value) + Number(n2.value)
        resul.innerHTML = ` O Resultado da soma  é : ${soma}`
    }
    

}

function subtrair(){
    if(n1.value == '' || n2.value == ''){
        alert(' \u{1F50D} Preencha os campos vazio, para poder prosseguir')
    }else{
        let sub = Number(n1.value) - Number(n2.value)
        resul.innerHTML = ` O Resultado da Subtração é: ${sub}`
    }
}

function multiplicar(){
    if (n1.value == '' || n2.value == ''){
        alert(' \u{1F50D} Preencha os campos vazio, para poder prosseguir')
    } else{
        let mult = Number(n1.value) * Number(n2.value)
        resul.innerHTML = ` O Resultado da multiplicação é: ${mult}`
    }
}

function dividir() {
    if (n1.value == '' || n2.value == ''){
        alert(' \u{1F50D} Preencha os campos vazio, para poder prosseguir')
    } else{
        let divd = Number(n1.value) / Number(n2.value)
        resul.innerHTML = ` O Resultado da divisão é : ${divd.toFixed(2)}`
    }

}

