const relogio = document.querySelector(".timer");

let seconds = 0;
const createTimer = (seconds)=>{
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString("pt-br", {timeZone: "GMT"});
}

let timer;
const startTimer = () =>{
    timer = setInterval(()=>{
        seconds++;
        relogio.innerHTML = createTimer(seconds);
    }, 1000)
}

document.addEventListener("click", (e)=>{
    el=e.target;

    if(el.classList.contains("iniciar")){
        clearInterval(timer);
        startTimer(timer);
        relogio.classList.remove("pausado");
    }

    if(el.classList.contains("pausar")){
        clearInterval(timer);
        if(seconds !== 0){
            relogio.classList.add("pausado");
        }
    }

    if(el.classList.contains("zerar")){
        clearInterval(timer);
        relogio.innerHTML = "00:00:00";
        relogio.classList.remove("pausado");
    }
})