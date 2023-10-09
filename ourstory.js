let image = document.getElementById("titlecard");

function changeBackground() {
    image.style.backgroundImage = "url(images/mamat_2.jpg)"
};

function changeBackgroundBack() {
    image.style.backgroundImage = "url(images/mamat_cover.jpg)"
};

image.onmouseover = changeBackground;
image.onmouseout = changeBackgroundBack;
