let amigo = { nome: 'Kauã',
     sexo: 'M', 
     peso: 100, 
     engordar(p=0){
        console.log('Engordou')
        this.peso += p 
}}

amigo.engordar(2)
console.log(` ${amigo.nome} pesa ${amigo.peso} KG`)