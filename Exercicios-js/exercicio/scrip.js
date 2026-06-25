let verif = document.querySelector('#verificador')
verif.addEventListener('click', clicar)

function clicar(){
    let data = new Date()
    let ano = data.getFullYear()
    let anonas = document.querySelector('#anonasc')
    let sex = document.querySelector('#sexo-fem')
    let sexmasc = document.querySelector('#sexo')
    let res = document.querySelector('#resultado')

    if (anonas.value.length == 0 || Number(anonas.value) > ano) {
    alert('Verifique os dados e tente novamente')
} else {
    let sexo = document.getElementsByName('sexx')
    let idade = ano - Number(anonas.value)
    let gênero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (sexo[0].checked) {
        gênero = 'Homem'
        if (idade >= 0 && idade < 10){
            
            img.setAttribute('src', 'photos/nenem-masculino.jpg')
        } else if (idade >= 10 && idade < 21 ) {
        
             img.setAttribute('src', 'photos/jovem-01.jpg')
        } else if (idade < 50){
            
             img.setAttribute('src', 'photos/adulto-homem.jpg')
        } else {
            
             img.setAttribute('src', 'photos/idoso-homem.jpg')
        }


    } else if (sexo[1].checked){
        gênero = 'Feminino'
         if (idade >= 0 && idade < 10){
            
             img.setAttribute('src', 'photos/crianca-feminino.jpg')
        } else if (idade >= 10 && idade < 21 ) {
            
             img.setAttribute('src', 'photos/jovem-mulher.jpg')
        } else if (idade < 50){
            
             img.setAttribute('src', 'photos/adulta-mulher.jpg')
        } else {
            
             img.setAttribute('src', 'photos/idosa-fem.jpg')
        }
}
 res.innerHTML = `Detectamos ${gênero} com ${idade} anos `
 res.appendChild(img)
}
}