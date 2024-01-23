const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedclass = "clicked";
    if (h1.classList.contains(clickedclass)) {
        h1.classList.remove(clickedclass);
    } else {
        h1.classList.add(clickedclass);
    }
}

h1.addEventListener("click", handleTitleClick);