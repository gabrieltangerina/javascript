const relogio = document.querySelector(".relogio")
let seconds = 0;

const timerToSeconds = (seconds) => {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-br', {timeZone: "GMT"})
}

let timer;
const startTimer = () =>{
    timer = setInterval(()=>{
        seconds++
        relogio.innerHTML = timerToSeconds(seconds);
    }, 1000)
}

document.addEventListener("click", (e)=>{
    el=e.target;

    if(el.classList.contains("iniciar")){
        clearInterval(timer);
        relogio.classList.remove("pausado")
        startTimer(timer);
    }

    if(el.classList.contains("pausar")){
        clearInterval(timer);
        if(seconds !== 0){
            relogio.classList.add("pausado")
        }
    }

    if(el.classList.contains("zerar")){
        clearInterval(timer);
        relogio.classList.remove("pausado")
        seconds = 0
        relogio.innerHTML = "00:00:00"; 
    }
})

/*
OBSERVAÇÕES:

-Lembrar que no "clearInterval()" deve ter o timer entre parênteses. "clearInterval(timer)." Pois está se referindo ao setInterval.
*/