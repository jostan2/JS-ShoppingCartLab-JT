class Product{

    name;
    cost;

    constructor(name, cost){
    this.name = name;
    this.cost = cost;
    }

}

cart = [];

products = [];
products [0] = new Product("Apple", 1.50);
products [1] = new Product("Banana", 1.25);
products [2] = new Product("Cookie", 0.99);
products [3] = new Product("Dark Chocolate", 2.0);
products [4] = new Product("Egg", 0.25);
products [5] = new Product("Flan", 2.50);

function addToCart(index){
    let selected = products[index]
    cart.push(selected) //push is the same as .Add() in C#. Adds selected index product to the cart array.
    console.log(cart)
}

function checkOut(){
    let total = 0;

    document.getElementById("SubTotal").innerHTML =""; //this line resets the list, so whenever checkOut() is called, it starts empty and the for loop adds to it.
    for(let i = 0; i < cart.length; i++){
        let p = cart[i]; //sets p to cart index
        console.log(p); //prints index to console.
        total += p.cost; //adds up cumulative costs

        //We use += to add onto the element and NOT overwrite it 
        document.getElementById("SubTotal").innerHTML += `<p>Items: ${p.name}, Cost: ${p.cost}</p> 
        <button onClick="removeItem(${i})"> Remove ${p.name}</button>` //links text to id in HTML, able to output values from JavaScript.
    }

    console.log(total);

    //Dom method, this 'getE...'' is the most common. 
    //Id meant to appear once per page, this is good for grabbing specific code
    //Will be able to return arrays as they are able to appear more
    // the class name and html tag calls tend to be used for more altering Css, where Id is more useful for inputing/outputing data.
    
     //.innerHTML is DOM manipulation indentification used for editing/overwriting HTML
     //.innerText only changes text, leaves html alone.
    let outputTotal = Math.round(total *100)/100; //rounds decimal to 2 decimal places.
     document.getElementById("Total").innerHTML = (`<h2>Total: $${outputTotal}</h2>`);
}

function removeItem(index){
cart.splice(index, 1);
//to redisplay the cart and its new subtotal
checkOut();
}