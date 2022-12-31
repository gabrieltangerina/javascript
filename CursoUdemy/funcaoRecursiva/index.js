function recursiva(num){
    if(num >= 5) return; 
    num++;
    console.log(num);
    recursiva(num);
}

recursiva(0);