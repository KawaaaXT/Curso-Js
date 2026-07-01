let numer = [10, 20, 30, 40];
numer.push(12)
numer.length
numer.sort()
for(let pos = 0; pos < numer.length; pos++){
    console.log(numer[pos])
}
console.log(` O primeiro valor do vetor é ${numer[2]} `);
console.log(` O meu array tem ${numer.length} elementos `)
console.log(numer)

let pos = numer.indexOf(2)

if (pos == -1){
    console.log('O valor nao foi encontrado')
} else {
   console.log(` O Valor  esta na posição ${pos} `)
}