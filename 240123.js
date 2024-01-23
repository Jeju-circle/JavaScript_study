const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick() {
    const currentcolor = h1.style.color
    let newColor;
    if(currentcolor === "blue"){
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);