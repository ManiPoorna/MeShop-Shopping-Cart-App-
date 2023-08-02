const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const signUp = document.getElementById("signup-button");
const form = document.getElementById("signup-inputs");
const loginRedirect = document.getElementById('login-button');
let allUsers = [];
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


loginRedirect.addEventListener("click",(e)=>{
    window.location.href = "../2-login/index.html";
})

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let flag = false;
  if (
    fName.value.trim() == "" ||
    lName.value.trim() == "" ||
    email.value.trim() == "" ||
    password.value.trim() == "" ||
    confirmPassword.value.trim() == ""){
        alert("All inputs are Required..!");
  }else{
    if(password.value.trim() === confirmPassword.value.trim()){
        if(localStorage.getItem('users')){
            if(ifUserExist(email.value.trim())){
                alert("This Email is already Registerd, use another Email..!");
            }
            else{
                saveUSer(fName.value.trim(),lName.value.trim(),email.value.trim(),password.value.trim());
                flag = true;
            }
        }
        else{
            saveUSer(fName.value.trim(),lName.value.trim(),email.value.trim(),password.value.trim());
            flag = true;
        }
    }
    else{
        alert("Password doesn't Matched");
    }
  }
  if(flag){
    window.location.href = "../2-login/index.html";
  }
  form.reset();
});

// Saving Signed-up user info to LOCAL_STORAGE

function saveUSer(fname, lname, email, password) {
  let user = {
        firstName: fname,
        lastName: lname,
        email: email,
        password: password,
    };
    if(JSON.parse(localStorage.getItem('users')) === null){
        allUsers = [];
        allUsers.push(user);
    }
    else{
        allUsers = JSON.parse(localStorage.getItem('users'));
        allUsers.push(user);
    }
    console.log(allUsers);
    localStorage.setItem('users',JSON.stringify(allUsers));
}

// Checking if User is aready Exists

function ifUserExist(email){
    let users = JSON.parse(localStorage.getItem('users'));
    const result = users.find(obj=>{
        return obj.email === email;
    })
    if(result) return true;
    else return false;
}