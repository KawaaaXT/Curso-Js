function factorial(num){
    let fac = 1
    for(let cont = num; cont > 1; cont-- ){
        fac *= cont
    }
    return fac
}
let res = factorial(5)
console.log(res)