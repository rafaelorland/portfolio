const name = "RAFAEL";
let currentIndex = 0;
const delay = 800;

function updateFavicon(char) {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");

    // fundo
    ctx.fillStyle = "#111";
    ctx.fillRect(0,0, canvas.width, canvas.height);


    ctx.fillStyle = "#2cb6a6";
    ctx.font = "bold 40px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(char, canvas.width / 2, canvas.height / 2);

    const faviconURL = canvas.toDataURL("image/png");
    const favicon = document.getElementById("dynamic-favicon");
    favicon.href = faviconURL;
}

function animateLetters() {
    if (currentIndex < name.length) {
        updateFavicon(name[currentIndex]);
        currentIndex++ ;
        setTimeout(animateLetters, delay);
    } else {
        setTimeout(() => {
            currentIndex = 0;
            animateLetters();
        }, 1500);
    }
}

window.addEventListener("DOMContentLoaded", animateLetters);
