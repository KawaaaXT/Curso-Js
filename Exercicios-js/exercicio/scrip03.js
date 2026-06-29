

let veri = document.querySelector('#btn');
veri.addEventListener('click',contar)

function contar(){
   let inicio = document.querySelector('#inc')
   let fim =  document.querySelector('#ffim')
   let passos = document.querySelector('#pasos')
   let resultado = document.querySelector('#contagem')

   if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
       resultado.innerHTML = 'Impossivel Começar a Contagem'
        alert(` \u{1F6A8} PREENCHA OS CAMPOS VAZIOS `)
   } else {
    resultado.innerHTML = 'Contando: <br> '
      let i = Number(inicio.value)
      let f = Number(fim.value)
      let p = Number(passos.value)

      if (p <= 0){
        alert(` \u{1F6A8} Numero de passos invalido , sera considerado como Passo 1. ` )
        p = 1
      }
      if (i <= f){
      for (let cont = i; cont <= f; cont += p){
        resultado.innerHTML += ` ${cont} \u{1F449}  `
      }

      } else {
        for ( let cont = i; cont >= f; cont -= p){
            resultado.innerHTML += ` ${cont} \u{1F449}   `
        }
      }
}

}
