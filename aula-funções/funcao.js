function parouimp(nume){
    if (nume%2 == 0){
        return 'Par'
    } else {
        return 'Impar'
    }
}
let res = parouimp(6)
console.log(res)