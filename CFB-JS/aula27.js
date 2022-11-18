function* contador(){
    let i=0
    while(true){
        yield i++
    }
}

const itc=contador()
for(let i=0; i<10; i++ ){
    console.log(itc.next().value)
}