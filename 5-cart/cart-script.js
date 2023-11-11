let addedToCart = JSON.parse(localStorage.getItem('cartItems'));
const itemDetails = document.getElementById('list-items');
const container = document.getElementById('items-container');
let totalPrice = document.getElementById('total-price');
let countBadge = document.getElementById('count-badge');
let totalAmount = 0;
let amountPayable = 0;

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

console.log("Total items in CART -> ",addedToCart);
// console.log(addedToCart.length)
const backBtn = document.getElementById('back-btn');
console.log(backBtn);
backBtn.addEventListener('click',(event)=>{
  event.preventDefault();
  console.log("clicked");
  window.location.href = "../4-shop/index.html";
})


renderToCart(addedToCart);
renderDetails(addedToCart);
renderPrice(addedToCart);

function renderToCart(data){
  container.innerHTML = "";
  if(data.length == 0){
    container.innerHTML = `<h1>Your Cart is Empty</h1>`
  }
    data.forEach((v,i)=>{
        let itemData = data[i];
        let item = document.createElement("div");
        item.className = "item";
        item.id = itemData.id;
        item.innerHTML = `
        <div class="image">
                    <img src="${itemData.image}" alt="item">
                  </div><hr>
                  <div class="details">
                    <div class="title">${itemData.title}</div>
                    <div class="price-size">
                      <div class="price" id="price">$${itemData.price}</div>
                      <div class="size">${itemData.randomSize[0]},${itemData.randomSize[1]},${itemData.randomSize[2]}</div>
                      </div>
                    <div class="color">
                        Colors : <span id="color1" style="background-color:${itemData.randomColor[0]}">ss</span> <span id="color2" style="background-color:${itemData.randomColor[1]}">cc</span> <span id="color3" style="background-color:${itemData.randomColor[2]}">cc</span>
                    </div>
                    <div class="rating">
                      Rating : ${itemData.rating["rate"]} / 5
                    </div>
                  </div>
                  <div class="add-cart">
                    <button id="addTo-cart" onclick="deleteId(this)">Remove from Cart</button>
                  </div>
        `
        container.append(item);
    })
}

function renderDetails(data){
  itemDetails.innerHTML = "";
  data.forEach((v,i)=>{
    let itemData = data[i];
    let item = document.createElement("li");
    item.innerHTML = `
    <div class="type">${itemData.title}</div>
    <div class="price">$${itemData.price}</div>
    `
    let hr = document.createElement("hr");
    hr.style.width = "100%";
    itemDetails.append(hr);
    itemDetails.append(item);
  })
}

function renderPrice(data){
  totalPrice.innerText = '';
  totalAmount = 0;
  data.forEach((v,i)=>{
    totalAmount += data[i].price;
  })
  totalAmount = Math.round(totalAmount);
  totalPrice.innerText = `$${totalAmount}/-`;
  localStorage.setItem('cost',JSON.stringify(totalAmount));
  getAmount();
  if(data.length == 0){
    countBadge.style.display = "none";
  }
  else{
    countBadge.style.display = " flex";
    countBadge.innerText = data.length;
  }
}


function deleteId(element){
  let itemId = element.parentElement.parentElement.id;
  // console.log(itemId.id);
  if(confirm("Want to remove Item from cart?")){
    addedToCart.forEach((v,i)=>{
      if(addedToCart[i].id == itemId){
        // console.log(i);
        let title = addedToCart[i].title;
        addedToCart.splice(i,1);
        localStorage.setItem("cartItems",JSON.stringify(addedToCart));
      }
    })
    addedToCart = JSON.parse(localStorage.getItem('cartItems'));
    renderToCart(addedToCart);
    renderPrice(addedToCart);
    renderDetails(addedToCart);
  } 
}


// RAZORPAY Code ***********************************************

function getAmount(){
  amountPayable = JSON.parse(localStorage.getItem('cost'));
  amountPayable = amountPayable * 100;
}
document.getElementById("check-payment").onclick = function (e) {
  var options = {
    key: "rzp_test_xV39ZNbgU1Du4V", // Enter the Key ID generated from the Dashboard
    amount: amountPayable ,//check this out if this is paisa or INR // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "USD",
    name: "MeShop. CartItems",
    description: "Thank You for Choosing MeShop.", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    theme: {
      color: "#1E76E7",
    },
    image: "https://cdn-icons-png.flaticon.com/128/891/891419.png",
    handler: function () { // run a function when your payment is successfull
      location.href = "./index.html";
    },
    options: {
      checkout: {
        method: {
          netbanking: 1,
          card: 1,
          upi: 1,
          wallet: 1,
        },
      },
    },
  };

  var rzpy1 = new Razorpay(options);
  rzpy1.open();
  // clear mycart - localStorage
  e.preventDefault();
};