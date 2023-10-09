let heart = document.getElementById("heart");
console.log(heart);

let intro = document.getElementById("intro");
console.log(intro);

function changeBackground() {
    intro.style.backgroundImage = "url(images/home_bg_2.jpg)"
};

function changeBackgroundBack() {
    intro.style.backgroundImage = "url(images/home_bg.jpg)"
};

heart.onmouseover = changeBackground;
heart.onmouseout = changeBackgroundBack;
