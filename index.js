const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const buttonEl = document.getElementById("btn-el")
const passwordContainerEl = document.getElementById("password-container-el");

buttonEl.addEventListener("click", function () {
    passwordContainerEl.innerHTML = "";
    let password1 = generatePassword()
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    let password2 = generatePassword()        
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");;

    
    passwordContainerEl.innerHTML = renderPassword(password1, password2);

})



function generatePassword() {
    let password = "";
    for (let i = 0; i < 15; i++) {
        password += characters[Math.floor((Math.random() * 91))]
    }
    return password;
}

function renderPassword(a,b) {
    return `<button class="button password-button">${a}</button><button class="button password-button">${b}</button><br>`;   
}