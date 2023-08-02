const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-button');
const form = document.getElementById("login-inputs");
const signupBtn = document.getElementById('signup-button');
const kebabBtn = document.getElementById('kebeb-bar');
const menu = document.getElementById('menu');

kebabBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log("clicked")
    if(menu.style.display == "flex"){
        menu.style.display = "none";
    }else{
        menu.style.display = "flex";
    }
})


form.addEventListener("submit",(event)=>{
    let flag = true;
    event.preventDefault();
    if(email.value.trim() == "" || password.value.trim() == ""){
        alert("Pleae enter Email and Password to Login");
    }
    // console.log(event.target);
    const users = JSON.parse(localStorage.getItem("users"));
    if(users){
        let loggedUser = users.find(obj=>{
            return obj.email === email.value.trim();
        })
        if(loggedUser){
            if(password.value.trim() === loggedUser.password){
                let obj = {
                    firstName : loggedUser.firstName,
                    lastName : loggedUser.lastName,
                    email : loggedUser.email,
                    password: loggedUser.password
                }
                sessionStorage.setItem("loggedUser", JSON.stringify(obj));
                window.location.href = '../4-shop/index.html';
            }
            else{
                alert("Wrong Password..!")
            }
        }
        else{
            alert("Email doesn't Exists. Please Sign Up to cotinue.");
            window.location.href = "../1-signup/index.html";
        }
    }
    else{
        if(flag){
            alert("Email doesn't Exists. Please Sign Up to cotinue.")
            window.location.href = "../1-signup/index.html";
        } 
    }
    form.reset();
})
signupBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href = "../1-signup/index.html";
})