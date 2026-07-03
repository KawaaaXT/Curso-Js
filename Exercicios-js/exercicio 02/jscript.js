

const botao = document.querySelector('#btnadc')
const btnf = document.querySelector('#btnfinal')
const resul = document.querySelector('#resultado')
const numero = document.querySelector('#numtt')
const list = document.querySelector('#lista')

let valores = []

botao.addEventListener('click', adicionar)
btnf.addEventListener('click', finalizar)

function inNum(n){
    if(Number(n) >= 1 && Number(n)  <= 100){
        return true
    } else {
        return false
    }
}

function inLista (b, lis){
    if(lis.indexOf(Number(b)) != -1) {
        return true
    } else {
        return false
    }

}

function adicionar(){
    if (inNum(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text =` Valor ${numero.value} adicionado. `
        list.appendChild(item)
        resul.innerHTML = ''


    } else{
        alert('Valor Invalido ou ja encontrado na lista')
    }
    numero.value = ''
    numero.focus()

} 

function finalizar(){
    if (valores.length == 0){
        alert( ' Preencha o campo vazio. ' )
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0

        for(let poos in valores ) {
            soma += valores[poos]
            if(valores[poos] > maior ) {
                maior = valores[poos]

            }

            if (valores[poos] < menor ){
            menor = valores[poos]
        }


        }
        media = soma / total
        resul.innerHTML = ''
        resul.innerHTML += ` <p> ao todo temos ${total}  elementos encontrado. </p>`
        resul.innerHTML += `<p> o maior numero encontrado na lista foi :  ${maior} </p>`
        resul.innerHTML += `<p> o menor numero encontrado na lista foi :  ${menor} </p>`
        resul.innerHTML += `<p> a soma de todos os valores foi :  ${soma} </p>`
        resul.innerHTML += `<p> a media de todos os valores foi :  ${media.toFixed(2)} </p>`
    }



}
   