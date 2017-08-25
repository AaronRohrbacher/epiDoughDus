//Business logic
var pizzaPrice = {item:["Large", "Medium", "Small", "Pepperoni", "Sausage", "Mushrooms"], price: [7.99, 5, 3, .5, 1, .75]}

function PizzaCreator (pizza, size, toppings, price) {
  this.pizza = pizza;
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}
var toppings = [];

//UI logic
$(document).ready(function() {
  //add toppings to empty array for later construction in object
  $("#addToppingButton").click(function() {
    var topping = pizzaPrice.item[parseInt($("#toppingsInput").val())];
    var price = pizzaPrice.price[parseInt($("#toppingsInput").val())].toFixed(2);
    toppings.push(" " + topping + " (" + price + ")")
    console.log(topping + price);
    $("#addedToppings").text(toppings);
  });
  //construct new pizza object and output it
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    console.log(toppings);
    var userInput = $("#pizzaInput").val();
    var sizeInput = pizzaPrice.item[$("#sizeInput").val()];
    var sizePrice = pizzaPrice.price[$("#sizeInput").val()].toFixed(2);
    var newPizza = new PizzaCreator(userInput, sizeInput, toppings);
    $(".pizzaOutput").text(newPizza.size + " " + newPizza.pizza + " (" + sizePrice + ")  with " + newPizza.toppings);
  });
});
