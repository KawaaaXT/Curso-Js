const celsius = document.querySelector('#celsi')
const converter = document.querySelector('#btnConverter')
const resul = document.querySelector('#resultado')

converter.addEventListener('click', convert)

function convert() {
    if (celsius.value == ''){
        alert('  \u{1F50D} Preencha o campo vazio  para poder prosseguir.')
    } else{
        let cels = Number(celsius.value)
        let fahr = (cels * 9 / 5) + 32

        resul.innerHTML = ` O Resultado é ${fahr.toFixed(2)} °F`
    }

}