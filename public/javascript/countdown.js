const countDownEl = document.getElementById("countdown");
let time = 3600; 

setInterval(updateCountDown, 1000)

function updateCountDown(){
    const minute = Math.floor(time / 60);
    let second = time % 60;
    second = second < 10 ? "0" + second: second;

    countDownEl.innerHTML = `${minute}:${second}`;
    time--;
}


