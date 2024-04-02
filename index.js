var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCatInput = document.getElementById("productCat");
var productDescInput = document.getElementById("productDesc");
var productImageInput = document.getElementById("productImage");
var searchTermProductInput = document.getElementById("term");
var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn")
var products = [];

// function init(){
//     window.alert('Hello');
//     addProduct();
// }

if(localStorage.getItem("userProduct") != null ){
    products = JSON.parse(localStorage.getItem("userProduct"));
    displayProducts(products)
}

function addProduct(){
    var product = {
        id:productNameInput.value,
        price: productPriceInput.value,
        category: productCatInput.value,
        desc: productDescInput.value,
        // image: 'images/mobile.png' //static
        image: `images/${(productImageInput.files[0])?.name}`
    }
    products.push(product);
    localStorage.setItem("userProduct", JSON.stringify(products));
    clearForm();
    displayProducts(products);
    // console.log(products);
    
}

function clearForm(){
    productNameInput.value = '';
    productPriceInput.value = '';
    productCatInput.value = '';
    productDescInput.value = '';
}

function displayProducts(arr){ // note that: 'arr' is a parameter which is 'products'
    var cartona = '';
    for(i = 0; i < arr.length; i++){
        cartona += `
        <div class="col-md-3 rounded">
                <div class="product">
                    <img src=${arr[i].image} alt="" class = "w-50"/>
                    <h2 class='h6'>${arr[i].id}</h2>
                    <p>${arr[i].price}</p>
                    <h3>${arr[i].category}</h3>
                    <h3> ${arr[i].desc}</h3>
                    <button class='btn btn-outline-danger my-2 btn-sm' onclick='deleteProduct(${i})'>Delete <i class='fas fa-trash-alt'></i> </button>
                    <button class='btn btn-outline-warning my-2 btn-sm' onclick='setFormForUpdate(${i})'>Update <i class='fas fa-pen'></i> </button>
                    <p></p>
                </div>
        </div>`;
    }
    document.getElementById("rowData").innerHTML = cartona;
}

// function deleteWebsite(id){
//     // we need to delete the element from the array as the element is an index
//     products.splice(id,1); // delete only the element from the array
//     displayProducts(); // show (element) websites on the document 
//     localStorage.setItem("websites", JSON.stringify(products)); // work as over write
// }

function deleteProduct(deletedIndex){
    products.splice(deletedIndex,1);
    displayProducts(products);
    localStorage.setItem("userProduct",JSON.stringify(products));// work as over write
}

function searchProduct(){
    var term = searchTermProductInput.value;
    var catoonaOfTermProductsArr = [];
    for(var i = 0; i<products.length; i++){
        if(products[i].id.toLowerCase().includes(term.toLowerCase())){
            catoonaOfTermProductsArr.push(products[i]);
        }
    }
    displayProducts(catoonaOfTermProductsArr);
}

var productId;
function setFormForUpdate(updatedIndex){
    productId = updatedIndex;
    addBtn.classList.add("d-none");
    updateBtn.classList.remove("d-none");
    productNameInput.value = products[updatedIndex].id;
    productPriceInput.value = products[updatedIndex].price;
    productCatInput.value = products[updatedIndex].category;
    productDescInput.value = products[updatedIndex].desc;
}
function updateProduct(){
    addBtn.classList.remove("d-none");
    updateBtn.classList.add("d-none");
    products[productId].id = productNameInput.value;
    products[productId].price = productPriceInput.value;
    products[productId].category = productCatInput.value;
    products[productId].desc = productDescInput.value;
    // products[productId].image = productImageInput.value;
    products[productId].image = `images/${(productImageInput.files[0])?.name}`;
    displayProducts(products);
    localStorage.setItem("userProduct", JSON.stringify(products));
}

// Redular Expression
var x =/abc/






// string methods 
// --------------
var x = 'start end-1 nour younes wlaaaa'
console.log(x.split(" ").slice(0,2).join(" ")); // start end-1

var y = [1,2,3,4,5,6,7,8];
console.log(y.splice(1,3)); // [2, 3, 4]
y.splice(1,0,'99'); 
console.log(y); // [1,'99',5,6,7,8]
console.log(y.splice(1,3,'9'));  // ['99',5,6]
console.log(y); //[1, '9', 7, 8]

