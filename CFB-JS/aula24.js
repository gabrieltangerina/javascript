let f=function(...valores){
    let res=0
    for(v of valores){
        res+=v
    }
    return res
}

console.log(f(5,5))

/*função construtor anônima*/ 