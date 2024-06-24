

function checkLogin() {
    if (!isUserLoggedIn) {
        console.log("Log in to add items.");
        return false;
    }
    return true;
}


const products = [
    {item: "Rice", price: 7},
    {item: "Shrimp", price: 12},
    {item: "Pasta", price: 3},
    {item: "Bacon", price: 4}
];

let isUserLoggedIn = false;

function browseProducts() {
    console.log("Available Products:");
    for (let i = 0; i < products.length; i++) 
        console.log(`${i + 1}. ${products[i]}`);
    }


function totalCost() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    return total;
}

function viewCart() {
    console.log("Items in your cart:");
    for (let i = 0; i < cart.length; i++) {
        console.log(`${i + 1}. ${cart[i].item} - $${cart[i].price}`);
    }
    console.log("Total cost is: $" + totalCost());
}

const cart = [];

console.log("Welcome to the Online Store");

isUserLoggedIn = confirm("Make sure you are logged in.");

displayProducts();

viewCart();

















let balance = 0;




function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log(`Amount Deposited $${amount}.`);
    } else {
        console.log("Invalid deposit amount.");
    }
}



function withdraw(amount) {
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`Withdrawn $${amount}.`);
    } else {
        console.log("Insufficient funds/invalid amount.");
    }
}



function checkBalance() {
    console.log(`Current Balance is : $${balance}`);
}