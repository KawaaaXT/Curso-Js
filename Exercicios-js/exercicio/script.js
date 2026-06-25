
window.addEventListener('load', carregar)

function carregar(){
let msg = document.querySelector('#msg');
let img = document.querySelector('#imagem') ;
let data = new Date()
let hora = data.getHours()



msg.innerHTML = ` Nesse exato momento são ${hora} horas `

if (hora >= 0 && hora < 12){
    img.src = 'photos/paisagem-manha.jpg'
    document.body.style.background = ' #034A68 '


} else if (hora >= 12 && hora < 18){
    img.src = 'photos/paisagem-tarde.jpg'
     document.body.style.background = ' #00ADEF  '


} else {
    img.src = 'photos/paisagem-noite.jpg'
     document.body.style.background = ' #011826 '


}
}