const signup = document.getElementById('signup-btn');
signup.addEventListener('click', (event)=>{
    window.location.href = './1-signup/index.html';
});
const login = document.getElementById('login-btn');
login.addEventListener('click', (event)=>{
    window.location.href = './2-login/index.html';
});


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