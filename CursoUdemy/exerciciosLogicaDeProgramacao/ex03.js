function fizzBuzz(number){
    if (typeof number !== "number") return NaN;
    if(number % 3 ===0 && number % 5 === 0) return "FizzBuzz";
    if(number % 3 === 0) return "Fizz";
    if(number % 5 === 0) return "Buzz";
    return number;
}

for (let i = 0; i <= 20; i++){
    console.log(i, fizzBuzz(i));
}
