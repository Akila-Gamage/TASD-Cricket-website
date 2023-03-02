// console.log('running');

let products=[
	{
		name: "Gray-Nicolls",
		tag: "grey",
		price: 120,
		inCart:0,
		imageFolder:"bats_img/grey.jpg"
	},
	{
		name: "Kookaburra",
		tag: "koko",
		price: 1420,
		inCart:0,
		imageFolder:"bats_img/koko.jpg"
	},
	{
		name: "SS",
		tag: "ss",
		price: 220,
		inCart:0,
		imageFolder:"bats_img/ss.jpg"
	},
	{
		name: "New-Balance",
		tag: "nb",
		price: 100,
		inCart:0,
		imageFolder:"bats_img/nb.jpg"
	},
	{
		name: "SS-TON",
		tag: "sston",
		price: 1280,
		inCart:0,
		imageFolder:"bats_img/ton.jpg"
	},
	{
		name: "ACORN",
		tag: "acorn",
		price: 150,
		inCart:0,
		imageFolder:"balls_img/acorn.jpg"
	},
	{
		name: "DSC",
		tag: "dsc",
		price: 200,
		inCart:0,
		imageFolder:"balls_img/DSC.jpg"
	},
	{
		name: "KOOKABURRA",
		tag: "kookaburra",
		price: 250,
		inCart:0,
		imageFolder:"balls_img/Kookaburra.jpg"
	},
	{
		name: "SG",
		tag: "sg",
		price: 300,
		inCart:0,
		imageFolder:"balls_img/SG.jpg"
	},
	{
		name: "Graynicollshelmet",
		tag: "graynicollshelmet",
		price: 350,
		inCart:0,
		imageFolder:"helmets_img/Graynicollshelmet.jpg"
	},
	{
		name: "Kookabura",
		tag: "kookabura1",
		price: 450,
		inCart:0,
		imageFolder:"helmets_img/kookabura1.jpg"
	},
	{
		name: "Masuri",
		tag: "masuri",
		price: 550,
		inCart:0,
		imageFolder:"helmets_img/masuri.jpg"
	},
	{
		name: "Shrey Koroyd Titanium Cricket Helmet",
		tag: "shrey Koroyd Titanium Cricket Helmet",
		price: 600,
		inCart:0,
		imageFolder:"helmets_img/Shrey.jpg"
	},
	{
		name: "ADIDAS APEX PRED SHOES",
		tag: "adidas1",
		price: 400,
		inCart:0,
		imageFolder:"shoes_img/adidas1.jpg"
	},
	{
		name: "KOOKA R350 SHOE",
		tag: "kooka25",
		price: 500,
		inCart:0,
		imageFolder:"shoes_img/kooka25.jpg"
	},
	{
		name: "NB 33 SHOE",
		tag: "nb12",
		price: 600,
		inCart:0,
		imageFolder:"shoes_img/nbS.jpg"
	},
	{
		name: "PUMA BOOST CRICK SPIKES",
		tag: "puma",
		price: 700,
		inCart:0,
		imageFolder:"shoes_img/puma.jpg"
	}
];



function onLoadCartNumbers(){
	let productNumbers= localStorage.getItem('cartNumbers');
	
	if(productNumbers){
		document.querySelector('.cart span').textContent = productNumbers;
	}
}

function cartNumbers(products){
	let productNumbers= localStorage.getItem('cartNumbers');
	//console.log("The product clicked is", products);
    //console.log(productNmbers);

	//console.log(typeof productNmbers);
	productNumbers= parseInt(productNumbers);
	
	//console.log(productNmbers);
	if(productNumbers){
		localStorage.setItem('cartNumbers',productNumbers + 1);
		document.querySelector('.cart span').textContent = productNumbers + 1;
	}else{
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.cart span').textContent = 1;
	}
	setItems(products);
}

function setItems(products){
	// console.log("Inside of setItems function");
    // console.log("My product is", products);
	let cartItems= localStorage.getItem('productsInCart');
	cartItems= JSON.parse(cartItems);
	//console.log("My cartItems are", cartItems);

	if(cartItems != null){
		//console.log(cartItems[products.tag]);

		if(cartItems[products.tag] == undefined){
			cartItems = {
				...cartItems,
				[products.tag]: products
			}
				
		}
		cartItems[products.tag].inCart += 1;
	}else{
		products.inCart = 1;
		cartItems = {
			[products.tag]:products
		}
	}	
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
	// console.log("The product is", product.price);
	let cartCost = localStorage.getItem('totalCost');
	console.log("My cartCost is", cartCost);
	console.log(typeof cartCost);

	if(cartCost != null){
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + product.price);
	}else{
		localStorage.setItem("totalCost", product.price);
	}
}

function displayCart(){
	let cartItems = localStorage.getItem("productsInCart");
	cartItems= JSON.parse(cartItems);
	let productContainer =document.querySelector (".products-container");
	let cartCost = localStorage.getItem('totalCost');
	console.log(cartItems);

	if(cartItems && productContainer){
		productContainer.innerHTML = '';
		Object.values(cartItems).map(item => {
			productContainer.innerHTML += `
			<div class="products">
				<ion-icon name="close-circle"></ion-icon>
				<img src ="./images/${item.imageFolder}"></img>
				<span>${item.name}</span>
			</div>
			<div class= "price">$${item.price}.00</div>
			<div class="quantity">
				<ion-icon class="decrease" name="chevron-back-circle"></ion-icon>
				<span>${item.inCart}</span>
				<ion-icon class="increase" name="chevron-forward-circle"></ion-icon>
			</div>
			<div class="total">
				$${item.inCart * item.price}.00
			</div>
			`
		});
		productContainer.innerHTML +=`
			<div class="basketTotalContainer">
				<h4 class="basketTotalTitle">
					Basket Total
				</h4>
				<h4 class="basketTotal">
					$${cartCost}.00
				</h4>
			</div>
		`;
	}
}

onLoadCartNumbers();
displayCart();
function addToCart(tag){
	console.log(tag);
	for(var index=0;index<products.length;index++){
		if(products[index].tag == tag){
			cartNumbers(products[index]);
			totalCost(products[index]);
			break;
		}
	}
}
function po() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var address = document.getElementById("address");
	
	var fnameSummary = document.getElementById("fnameSummary");
    var lnameSummary = document.getElementById("lnameSummary");
    var emailSummary = document.getElementById("emailSummary");
    var addressSummary = document.getElementById("addressSummary");
	

    if (fname.value == "") {
        window.alert("Please enter your first name.");
        fname.focus();
        return false;
    } else if (lname.value == "") {
        window.alert("Please enter your last name.");
        lname.focus();
        return false;
    } else if (email.value == "") {
        window.alert("Please enter email.");
        email.focus();
        return false;
    } else if (address.value == "") {
        window.alert("Please enter your address.");
        address.focus();
        return false;
    } else {
        var cartContainer = document.getElementById("cartContainer");
		var summary = document.getElementById("summary");
		
		fnameSummary.innerHTML="Name: "+fname.value+" "+lname.value;
		
		emailSummary.innerHTML="Email: "+email.value;
		addressSummary.innerHTML="Address: "+address.value;
		printSummary();
		
		cartContainer.style.display="none";
		summary.style.display="block";
    }

}
function printSummary(){
	var textSummary = document.getElementById("textSummary");
	let cartItems = localStorage.getItem("productsInCart");
	cartItems= JSON.parse(cartItems);
	let cartCost = localStorage.getItem('totalCost');
	

	if(cartItems){
		textSummary.innerHTML = '';
		Object.values(cartItems).map(item => {
			textSummary.innerHTML += `
			<p>
			Product &nbsp;: ${item.name}</br>
			Quantity: ${item.inCart}</br>
			Price &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: $${item.inCart * item.price}.00
			</p>
			`
		});
		
			textSummary.innerHTML += `
			<p>---------------------------------------------------------------------------------------</p>
			<p style="font-size: 25px";>
			Total: $${cartCost}.00
			</p>
			`
	}
}	