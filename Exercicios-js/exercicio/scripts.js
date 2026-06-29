
let botao = document.querySelector('#btn')
botao.addEventListener('click', gerar)

function gerar(){
    let numer = document.querySelector('#nume')
    let tab = document.querySelector('#tabuada')
    

    if (numer.value.length == 0){
        alert(` \u{1F6A8} Preencha os dados abaixo`)
    }else {
        let num = Number(numer.value)
        tab.innerHTML = ''
        for (let t = 1; t <= 10; t++ ){
            let item = document.createElement('option')
            item.text = ` \u{1F449} ${num} x ${t} = ${num*t}`
            item.value = `${t}`
            tab.appendChild(item)
            


        }
      
    }

}