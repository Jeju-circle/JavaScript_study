const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerHTML = "mouse is here!"
}

function handleMouseLeave() {
    h1.innerHTML = "mouse is gone!"
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);