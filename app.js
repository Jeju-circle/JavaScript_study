const title = document.querySelector(".hello h1");

function handleTitleClick() {
    title.style.color = "blue";
}

function handleMouseEnter() {
    title.innerHTML = "mouse is here!"
}

function handleMouseLeave() {
    title.innerHTML = "mouse is gone!"
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);