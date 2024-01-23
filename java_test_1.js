const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter () {
    h1.innerText ="mouse is here!";
}

function handleMouseLeave () {
    h1.innerText = "mouse is gone!"
}

function handlewindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handlewindowCopy() {
    alert("copier!");
}

function handlewindowoffline() {
    alert("SOS NO WIFI");
}

function handlewindowonline() {
    alert("all good!");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handlewindowResize);
window.addEventListener("copy", handlewindowCopy);
window.addEventListener("offline", handlewindowoffline);
window.addEventListener("online", handlewindowonline);