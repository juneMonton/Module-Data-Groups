const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

// Level 1: Manual navigation

let currentIndex = 0;

const carouselImg = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");

forwardBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImg.src = images[currentIndex];
});

backwardBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    carouselImg.src = images[currentIndex];
});

// Level 2: Auto-play

const autoForwardBtn = document.getElementById("auto-forward");
const autoBackwardBtn = document.getElementById("auto-backward");
const stopBtn = document.getElementById("stop");

let timerId = null;

autoForwardBtn.addEventListener("click", function () {
    autoForwardBtn.disabled = true;
    autoBackwardBtn.disabled = true;
    timerId = setInterval(function () {
        currentIndex = (currentIndex + 1) % images.length;
        carouselImg.src = images[currentIndex];
    }, 2000);
});

autoBackwardBtn.addEventListener("click", function () {
    autoForwardBtn.disabled = true;
    autoBackwardBtn.disabled = true;
    timerId = setInterval(function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        carouselImg.src = images[currentIndex];
    }, 2000);
});

stopBtn.addEventListener("click", function () {
    clearInterval(timerId);
    timerId = null;
    autoForwardBtn.disabled = false;
    autoBackwardBtn.disabled = false;
});
