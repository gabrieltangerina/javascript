const relogio = document.querySelector(".timer");

segundos = 0;
let criarTimer = (segundos) =>{
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-br", {timeZone: 'GMT'})
}

let timer;
let startTimer = () =>{
    timer = setInterval( ()=>{
        segundos++;
        relogio.innerHTML = criarTimer(segundos);
    }, 1000)
}

document.addEventListener("click", (e)=>{
    el = e.target;

    if(el.classList.contains('iniciar')){
        clearInterval(timer);
        startTimer();
        relogio.classList.remove("pausado")
    }

    if(el.classList.contains("pausar")){
        clearInterval(timer);
        if(segundos !== 0){
            relogio.setAttribute("class", "pausado");
        }
    }

    if(el.classList.contains("zerar")){
        clearInterval(timer);
        segundos = 0;
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove("pausado");
    }
})
