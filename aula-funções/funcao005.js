function factorial (b){
    if (b == 1){
        return 1
    } else{
        return b * factorial(b-1)
    }
}
let res = factorial(5)
console.log(res)



// recursividade