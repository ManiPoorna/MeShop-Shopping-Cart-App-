const user = JSON.parse(sessionStorage.getItem('loggedUser'));
const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const saveInfo = document.getElementById('saveinfo-button');
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


console.log(user);
// console.log(fName)
fName.value = user.firstName;
lName.value = user.lastName;
saveInfo.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href = "../4-shop/index.html";
})