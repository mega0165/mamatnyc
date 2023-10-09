let food = document.getElementById("food");
let drink = document.getElementById("drink");
let instruct = document.querySelector("#tings > p");

console.log(food);
console.log(drink);
console.log(instruct);


function foodInstruct() {
    instruct.textContent = ">>>HOW TO ORDER: Current Menu & Ordering Info will be posted on Instagram. Please contact us for special requests | the below describes *some* of the Amer-Asian treats we're working on ~~ thank you for your support!";
    console.log("food");
    drink.style.textDecoration = "underline solid"
    drink.style.textDecorationColor = "black"
    food.style.textDecoration = "underline double"
    food.style.textDecorationColor = "#ff322c"
};

function drinkInstruct() {
    instruct.textContent = "Not available yet :) Thank you for asking! You can check our food menu below!";
    console.log("drink");
    food.style.textDecoration = "underline solid"
    food.style.textDecorationColor = "black"
    drink.style.textDecoration = "underline double"
    drink.style.textDecorationColor = "#ff322c"
};


food.onclick = foodInstruct;
drink.onclick = drinkInstruct;





