const URL = "https://fakestoreapi.com/";
const URL1 = "https://fakestoreapi.com/products";

// Containers

const mensContianer =document.getElementById('mens-container');
const womensContianer =document.getElementById('womens-container');
const jeweleryContianer =document.getElementById('jewelery-container');
const electronicsContianer =document.getElementById('electronics-container');

// Switch Buttons

const allBtn = document.getElementById('all-btn')
const menBtn = document.getElementById('men-btn')
const womenBtn = document.getElementById('women-btn')
const jeweleryBtn = document.getElementById('jewellery-btn')
const electronicsBtn = document.getElementById('electronics-btn');

// Cart Button

let addToCart = document.getElementById('addTo-cart');
// console.log(addToCart.parentElement.parentElement.className);

// Heading div's

let h2Mens = document.getElementById('h2-mens');
let h2Womens = document.getElementById('h2-womens');
let h2Jewelery = document.getElementById('h2-jewelery');
let h2Electronics = document.getElementById('h2-electronics');

// Badges

let countBadge = document.getElementById('count-badge');

// Section-Wise Arrays
let totalArray = [];
let mensArray = [];
let womensArray = [];
let jeweleryArray = [];
let electronicsArray = [];

// Kebab-Menu

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



async function fetchDetails(){
    try{
        let response = await fetch(URL1);
        let data = await response.json();
        // console.log(data)
        
        data.forEach((v,i)=>{
          totalArray.push(data[i]);
        })
        // console.log(totalArray);
        let items = JSON.parse(localStorage.getItem('cartItems'));
        // console.log(items);
        if(totalArray.length>0 && items !== null){
          countBadge.innerText = JSON.parse(localStorage.getItem('cartItems')).length;
          countBadge.style.display = "flex";
        }
        // console.log(totalArray);
        
        let men = seperateByMen(data);
        let women = seperateByWomen(data);
        let jewelery = seperateByJeweley(data);
        let electronic = seperateByElectronics(data);

        // Render functions
        renderMen(men);
        renderWomen(women);
        renderJewelery(jewelery);
        renderElectronic(electronic);
    }
    catch(err){
        console.log(err);
    }
}

// Invoking & rendering Items

fetchDetails();

function seperateByMen(itemsData){
    itemsData.forEach((v,i)=>{
        let item = itemsData[i];
        if(item.category === "men's clothing"){
            mensArray.push(item);
        }
    })
    console.log(mensArray);
    return mensArray;
}
function seperateByWomen(itemsData){
    itemsData.forEach((v,i)=>{
        let item = itemsData[i];
        if(item.category === "women's clothing"){
            womensArray.push(item);
        }
    })
    console.log(womensArray);
    return womensArray;
}
function seperateByJeweley(itemsData){
    itemsData.forEach((v,i)=>{
        let item = itemsData[i];
        if(item.category === "jewelery"){
            jeweleryArray.push(item);
        }
    })
    console.log(jeweleryArray);
    return jeweleryArray;
}
function seperateByElectronics(itemsData){
    itemsData.forEach((v,i)=>{
        let item = itemsData[i];
        if(item.category === "electronics"){
            electronicsArray.push(item);
        }
    })
    console.log(electronicsArray);
    return electronicsArray;
}


allBtn.addEventListener('click',(event)=>{
    allBtn.style.backgroundColor = "black";
    allBtn.style.color = "white";
    menBtn.style.backgroundColor = "white";
    menBtn.style.color = "black";
    womenBtn.style.backgroundColor = "white";
    womenBtn.style.color = "black";
    jeweleryBtn.style.backgroundColor = "white";
    jeweleryBtn.style.color = "black";
    electronicsBtn.style.backgroundColor = "white";
    electronicsBtn.style.color = "black";

    // Visible & Hidden containers
    mensContianer.style.display = "flex";
    womensContianer.style.display = "flex";
    jeweleryContianer.style.display = "flex";
    electronicsContianer.style.display = "flex";

    // Headings DOM
    h2Mens.style.display = "block";
    h2Womens.style.display = "block";
    h2Jewelery.style.display = "block";
    h2Electronics.style.display = "block";    
})

menBtn.addEventListener('click',(event)=>{
    allBtn.style.backgroundColor = "white";
    allBtn.style.color = "black";
    menBtn.style.backgroundColor = "black";
    menBtn.style.color = "white";
    womenBtn.style.backgroundColor = "white";
    womenBtn.style.color = "black";
    jeweleryBtn.style.backgroundColor = "white";
    jeweleryBtn.style.color = "black";
    electronicsBtn.style.backgroundColor = "white";
    electronicsBtn.style.color = "black";

    // Visible & Hidden containers
    mensContianer.style.display = "flex";
    womensContianer.style.display = "none";
    jeweleryContianer.style.display = "none";
    electronicsContianer.style.display = "none";

    // Headings DOM
    h2Mens.style.display = "block";
    h2Womens.style.display = "none";
    h2Jewelery.style.display = "none";
    h2Electronics.style.display = "none"; 
})

womenBtn.addEventListener('click',(event)=>{
    allBtn.style.backgroundColor = "white";
    allBtn.style.color = "black";
    menBtn.style.backgroundColor = "white";
    menBtn.style.color = "black";
    womenBtn.style.backgroundColor = "black";
    womenBtn.style.color = "white";
    jeweleryBtn.style.backgroundColor = "white";
    jeweleryBtn.style.color = "black";
    electronicsBtn.style.backgroundColor = "white";
    electronicsBtn.style.color = "black";

    // Visible & Hidden containers
    mensContianer.style.display = "none";
    womensContianer.style.display = "flex";
    jeweleryContianer.style.display = "none";
    electronicsContianer.style.display = "none";

    // Headings DOM
    h2Mens.style.display = "none";
    h2Womens.style.display = "block";
    h2Jewelery.style.display = "none";
    h2Electronics.style.display = "none"; 
})

jeweleryBtn.addEventListener('click',(event)=>{
    allBtn.style.backgroundColor = "white";
    allBtn.style.color = "black";
    menBtn.style.backgroundColor = "white";
    menBtn.style.color = "black";
    womenBtn.style.backgroundColor = "white";
    womenBtn.style.color = "black";
    jeweleryBtn.style.backgroundColor = "black";
    jeweleryBtn.style.color = "white";
    electronicsBtn.style.backgroundColor = "white";
    electronicsBtn.style.color = "black";

    // Visible & Hidden containers
    mensContianer.style.display = "none";
    womensContianer.style.display = "none";
    jeweleryContianer.style.display = "flex";
    electronicsContianer.style.display = "none";

    // Headings DOM
    h2Mens.style.display = "none";
    h2Womens.style.display = "none";
    h2Jewelery.style.display = "block";
    h2Electronics.style.display = "none"; 
})

electronicsBtn.addEventListener('click',(event)=>{
    allBtn.style.backgroundColor = "white";
    allBtn.style.color = "black";
    menBtn.style.backgroundColor = "white";
    menBtn.style.color = "black";
    womenBtn.style.backgroundColor = "white";
    womenBtn.style.color = "black";
    jeweleryBtn.style.backgroundColor = "white";
    jeweleryBtn.style.color = "black";
    electronicsBtn.style.backgroundColor = "black";
    electronicsBtn.style.color = "white";

    // Visible & Hidden containers
    mensContianer.style.display = "none";
    womensContianer.style.display = "none";
    jeweleryContianer.style.display = "none";
    electronicsContianer.style.display = "flex";

    // Headings DOM
    h2Mens.style.display = "none";
    h2Womens.style.display = "none";
    h2Jewelery.style.display = "none";
    h2Electronics.style.display = "block"; 
})


function renderMen(menData){
    mensContianer.className = "items-container";
    menData.forEach((v,i)=>{
        let data = menData[i];
        const colors = ['#FF0000', '#6495ED','#98FB98', '#000000', '#ED7B09'];
        menData[i].randomColor = getRandomColors(colors,3)
        const sizeArray = ['L','M','S','XL'];
        menData[i].randomSize = getRandomSize(sizeArray,3)
        let item = document.createElement('div');
        item.className = "item";
        item.id = data.id;
        item.innerHTML = `
        <div class="image">
                  <img src="${data.image}" alt="item">
                </div><hr>
                <div class="details">
                <div class="title">${data.title}</div>
                  <div class="price-size">
                    <div class="price" id="price">$${data.price}</div>
                    <div class="size">${data.randomSize[0]},${data.randomSize[1]},${data.randomSize[2]}</div>
                  </div>
                  <div class="color">
                    Colors : <span id="color1" style="background-color:${data.randomColor[0]}">ss</span> <span id="color2" style="background-color:${data.randomColor[1]}">cc</span> <span id="color3" style="background-color:${data.randomColor[2]}">cc</span>
                  </div>
                  <div class="rating">
                    Rating : ${data.rating["rate"]} / 5
                  </div>
                </div>
                <div class="add-cart">
                  <button id="addTo-cart" onclick="getId(this)">Add to Cart</button>
                </div>
        `
        mensContianer.append(item);
    })
}
function renderWomen(womenData){
    womensContianer.className = "items-container";
    womenData.forEach((v,i)=>{
        let data = womenData[i];
        let item = document.createElement('div');
        const colors = ['#FF0000', '#6495ED','#98FB98', '#000000', '#ED7B09'];
        womenData[i].randomColor = getRandomColors(colors,3)
        const sizeArray = ['L','M','S','XL'];
        womenData[i].randomSize = getRandomSize(sizeArray,3)
        item.className = "item";
        item.id = data.id;
        item.innerHTML = `
        <div class="image">
                  <img src="${data.image}" alt="item">
                </div><hr>
                <div class="details">
                  <div class="title">${data.title}</div>
                  <div class="price-size">
                    <div class="price" id="price">$${data.price}</div>
                    <div class="size">${data.randomSize[0]},${data.randomSize[1]},${data.randomSize[2]}</div>
                  </div>
                  <div class="color">
                  Colors : <span id="color1" style="background-color:${data.randomColor[0]}">ss</span> <span id="color2" style="background-color:${data.randomColor[1]}">cc</span> <span id="color3" style="background-color:${data.randomColor[2]}">cc</span>
                  </div>
                  <div class="rating">
                    Rating : ${data.rating["rate"]} / 5
                  </div>
                </div>
                <div class="add-cart">
                <button id="addTo-cart" onclick="getId(this)">Add to Cart</button>
                </div>
        `
        womensContianer.append(item);
    })
}
function renderJewelery(jeweleryData){
    jeweleryContianer.className = "items-container";
    jeweleryData.forEach((v,i)=>{
        let data = jeweleryData[i];
        let item = document.createElement('div');
        item.className = "item";
        item.id = data.id;
        item.innerHTML = `
        <div class="image">
                  <img src="${data.image}" alt="item">
                </div><hr>
                <div class="details">
                  <div class="title">${data.title}</div>
                  <div class="price-size">
                    <div class="price" id="price">$${data.price}</div>
                    <div class="size">S,L,XL</div>
                  </div>
                  <div class="rating">
                    Rating : ${data.rating["rate"]} / 5
                  </div>
                </div>
                <div class="add-cart">
                <button id="addTo-cart" onclick="getId(this)">Add to Cart</button>
                </div>
        `
        jeweleryContianer.append(item);
    })
}
function renderElectronic(electronicData){
    electronicsContianer.className = "items-container";
    electronicData.forEach((v,i)=>{
        let data = electronicData[i];
        let item = document.createElement('div');
        item.className = "item";
        item.id = data.id;
        item.innerHTML = `
        <div class="image">
                  <img src="${data.image}" alt="item">
                </div><hr>
                <div class="details">
                  <div class="title">${data.title}</div>
                  <div class="price-size">
                    <div class="price" id="price">$${data.price}</div>
                  </div>
                  <div class="rating">
                    Rating : ${data.rating["rate"]} / 5
                  </div>
                </div>
                <div class="add-cart">
                <button id="addTo-cart" onclick="getId(this)">Add to Cart</button>
                </div>
        `
        electronicsContianer.append(item);
    })
}

// Random color Generator
function getRandomColors(colorsArray, numberOfColors) {
  const randomColors = [];
  const shuffledColors = colorsArray.slice();
  for (let i = shuffledColors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledColors[i], shuffledColors[j]] = [shuffledColors[j], shuffledColors[i]];
  }
  for (let i = 0; i < numberOfColors; i++) {
    randomColors.push(shuffledColors[i]);
  }
  return randomColors;
}

// Random Size generator

function getRandomSize(sizeArray, numberOfSizes) {
    const randomSizes = [];
    const shuffledSizes = sizeArray.slice();
    for (let i = shuffledSizes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledSizes[i], shuffledSizes[j]] = [shuffledSizes[j], shuffledSizes[i]];
    }
    for (let i = 0; i < numberOfSizes; i++) {
      randomSizes.push(shuffledSizes[i]);
    }
    return randomSizes;
}

// Adding to Cart 
let cartArray = [];

function getId(element){
    let itemId = element.parentElement.parentElement.id;
    // console.log(itemId);
    if(JSON.parse(localStorage.getItem('cartItems')) === null){
      cartArray = [];
    }
    else{
      cartArray = JSON.parse(localStorage.getItem('cartItems'));
    }
    totalArray.forEach((v,i)=>{
      if(totalArray[i].id == itemId){
        let confirm = true;
        if(confirm){
          alert(`${totalArray[i].title} added to Cart`);
          const colors = ['#ff0000', '#98fb98', '#6495ED', '#ffff80', 'ADD8E6'];
          const sizeArray = ['L','M','S','XL'];
          totalArray[i].randomColor = getRandomColors(colors,3)
          totalArray[i].randomSize =  getRandomSize(sizeArray,3)
          cartArray.push(totalArray[i]);
        }
      }  
    });
    // console.log(cartArray);
    if(cartArray.length == 0 || cartArray.length < 1){
      countBadge.style.display = "none";
      countBadge.innerText = "";
    }
    else{
      countBadge.style.display = "flex";
      countBadge.innerText = cartArray.length;
    }
    localStorage.setItem("cartItems",JSON.stringify(cartArray))
}




// Search Bar

const itemWise = document.getElementById('item-wise');
const heading = document.getElementById('search-text');
const search = document.getElementById('search-bar');
const itmesContainer = document.getElementById('search-render');
const searchedContainer = document.getElementById('searched-container');
console.log(searchedContainer)
 search.addEventListener('input',(e)=>{
  heading.innerText = `Results for "${e.target.value}"`;
    const searched = e.target.value.toLowerCase();
    console.log(searched.length);
    if(searched.length === 0){
      itemWise.style.display = "block";
      searchedContainer.style.display = "none";
    }else{
      itemWise.style.display = "none";
      searchedContainer.style.display = "block";
    }
    const searchedProducts = totalArray.filter((product) =>
      product.title.toLowerCase().includes(searched)
    );
    // console.log(searchedProducts.length);
    renderSearched(searchedProducts);
 })

 const searchedItems = document.getElementById('search-render');
 searchedItems.className = 'items-container';


function renderSearched(itemData){
  if(itemData.length < 1){
    itmesContainer.innerHTML = `<h3 style="text-align:center">Oops..! No items Found..</h3>`;
    itmesContainer.style.alignItems = 'center'; 
  }
  else{
    searchedItems.innerHTML = '';
    itemData.forEach((v,i)=>{
      let data = itemData[i];
      const colors = ['#FF0000', '#6495ED','#98FB98', '#000000', '#ED7B09'];
      let randomColor = getRandomColors(colors,3)
      const sizeArray = ['L','M','S','XL'];
      let randomSize = getRandomSize(sizeArray,3)
      let item = document.createElement('div');
      item.className = 'item';
      item.id = itemData.id;
      item.innerHTML = `
      <div class="image">
          <img src="${data.image}" alt="item">
        </div><hr>
        <div class="details">
        <div class="title">${data.title}</div>
          <div class="price-size">
            <div class="price" id="price">$${data.price}</div>
            <div class="size">${randomSize[0]},${randomSize[1]},${randomSize[2]}</div>
          </div>
          <div class="color">
            Colors : <span id="color1" style="background-color:${randomColor[0]}">ss</span> <span id="color2" style="background-color:${randomColor[1]}">cc</span> <span id="color3" style="background-color:${randomColor[2]}">cc</span>
          </div>
          <div class="rating">
            Rating : ${data.rating["rate"]} / 5
          </div>
        </div>
        <div class="add-cart">
          <button id="addTo-cart" onclick="getId(this)">Add to Cart</button>
        </div>
      `
      searchedItems.append(item);
    })
  }
}


const applyBtn = document.getElementById('apply-filter');
const container = document.getElementById('item-wise');

applyBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  container.style.display = 'none';
  setTimeout(() => {
  container.style.display = 'block';
  }, 300);
})