const helloForm = document.querySelector("#hello");
const helloInput = document.querySelector("#hello input");
const mainVisual = document.querySelector("#main-visual");
const welcomeUser = document.querySelector("#main-visual .welcome");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function showMainVisual(username) {
    welcomeUser.innerText = `Welcome ${username}!`
    mainVisual.classList.remove(HIDDEN_CLASSNAME);
}

function submitUsername(event){
    event.preventDefault();
    helloForm.classList.add(HIDDEN_CLASSNAME);
    const username = helloInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    showMainVisual(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    helloForm.classList.remove(HIDDEN_CLASSNAME);
    helloForm.addEventListener("submit", submitUsername);
} else{
    showMainVisual(savedUsername);
}