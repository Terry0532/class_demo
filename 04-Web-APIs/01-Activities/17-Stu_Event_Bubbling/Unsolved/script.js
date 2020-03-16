var carousel = document.querySelector(".carouselbox");
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";
var index = 0;
var images = [
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/201",
    "https://picsum.photos/300/202",
    "https://picsum.photos/300/203"
];
var currentImage;
function navigate(direction) {
    index = index + direction;
    if (index < 0) {
        index = images.length - 1;
    } else if (index > images.length - 1) {
        index = 0;
    }
    currentImage = images[index];
    carousel.style.backgroundImage = "url('" + currentImage + "')";
    event.stopPropagation();
}
carousel.addEventListener("click", function () {
    console.log('hit')
    window.location.href = images[index];
});
next.onclick = function (event) {
    navigate(1);
};
prev.addEventListener("click", function (event) {
    navigate(-1);
});
navigate(0);