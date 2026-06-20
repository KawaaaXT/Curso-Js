let agora = new Date()
let dia = agora.getDay()



switch (dia) {
    case 0: console.log('Hoje é Domingo')
    break

    case 1: console.log('Hoje é Segunda - feira')
    break

    case 2: console.log('Hoje é Terça - Feira')
    break

    case 3: console.log('Hoje é Quarta-Feira')
    break

    case 4: console.log('Hoje é Quinta - feira')
    break

    case 5: console.log('Hoje é Sexta - feira')
    break

    case 6: console.log('Hoje é Sabado')
    break

    default: console.log(' [ERRO] dia nao existente ')
    break
}