//Time countdown

let time = 9990; //time in mins

let promoTime = time * 60;

let counting = document.getElementById("countdown");

function startCountDown() {
    let promoTimer = setInterval(() => {
        if (promoTime <= 0) {
            clearInterval(promoTimer);
            counting.innerHTML = "Promo has ended!"
        }
        else {
            promoTime--;
            const days = Math.floor(promoTime / 3600 /24);
            const hours = Math.floor(promoTime / 3600) % 24;
            const mins = Math.floor(promoTime / 60) % 60;
            const secs = Math.floor(promoTime  % 60);


            counting.innerHTML = `Time: ${format(hours)}hr : ${format(mins)}min : ${format(secs)}s
            `
        }
    },1000)
}

function format(t) {
    return t < 10 ? `0${t}`: t;
}


startCountDown()





    

