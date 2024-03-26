const Loginform = document.querySelector("#login-form");
const LoginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    Loginform.classList.add(HIDDEN_CLASSNAME);
    const username = LoginInput.value;
    greeting.innerText = `hello ${username}`; //백틱을 이용할것! string 과 변수를 결합할 수 있게 해줌 (변수를 string 안에 포함시키는 방법 = ` ${변수명}` )
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

Loginform.addEventListener("submit", onLoginSubmit); //240326
