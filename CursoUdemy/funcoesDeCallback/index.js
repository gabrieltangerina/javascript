function f1Funcao(callback){
    console.log('f1');
    if (callback) callback();
}

function f2Funcao(callback){
    console.log('f2');
    if (callback) callback();
}

function f3Funcao(callback){
    console.log('f3');
    if (callback) callback();
}

f1Funcao(f1callback);

function f1callback (){
    f2Funcao(f2callback);
}

function f2callback (){
    f3Funcao(f3callback);
}

function f3callback (){
    console.log('FIM!');
}