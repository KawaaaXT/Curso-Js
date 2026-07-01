let vect = [8, 3, 4, 5, 6]
vect.push(7)
vect.sort()
console.log(vect)
for (let pos in vect){
    console.log(` A Posição ${pos} tem o valor ${vect[pos]}`)
}




/*
for (let vecpos = 0; vecpos < vect.length; vecpos++){
    console.log(` a posição ${vecpos} tem o valor ${vect[vecpos]}`)
}
*/