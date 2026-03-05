const user = {};

const inputGroup = document.querySelector(".input-group");
const addBtn = document.querySelector("#btn-submit");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const reWritePassword = document.querySelector("#reWritePassword");


addBtn.addEventListener("click", (e) =>{
    let emailValue = email.value.trim();
    let passwordValue = password.value;
    let reWritePasswordValue = reWritePassword.value;

    let newUser = {
        email: emailValue,
        password: passwordValue,
        reWritePassword:reWritePasswordValue
    }

    user.push(newUser);
    console.log(user);
});

