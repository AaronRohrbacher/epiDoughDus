//Business logic
var cart = {};

var pizzaPrice = {item:["Large", "Medium", "Small", "Pepperoni", "Sausage", "Mushrooms"], price: [7.99, 5, 3, .5, 1, .75], displayItem: [], itemPrice: []};

function PizzaCreator (pizza, size, toppings, total) {
  this.pizza = pizza;
  this.size = size;
  this.toppings = toppings;
  this.total = total;
}

PizzaCreator.prototype.price = function() {
  var total = 0;
  for (i=0; i < pizzaPrice.itemPrice.length; ++i) {
    total += parseFloat(pizzaPrice.itemPrice[i]);
    console.log(total);
  }
  return total;
}

//UI logic
$(document).ready(function() {

  //construct new pizza object and output it
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    console.log(toppings);
    var pizzaInput = $("#pizzaInput").val();
    var sizeInput = pizzaPrice.item[$("#sizeInput").val()];
    var sizePrice = pizzaPrice.price[$("#sizeInput").val()].toFixed(2);
    pizzaPrice.itemPrice.push(sizePrice);
    var newPizza = new PizzaCreator(pizzaInput, sizeInput, pizzaPrice.toppings);
    $(".pizzaOutput").text(newPizza.size + " " + newPizza.pizza + " (" + sizePrice + ")  with " + newPizza.toppings + " ORDER TOTAL: " + newPizza.price().toFixed(2));
  });
  //add toppings to empty array for later construction in object
  $("#addToppingButton").click(function() {
    var topping = pizzaPrice.item[parseInt($("#toppingsInput").val())];
    var toppingPrice = pizzaPrice.price[parseInt($("#toppingsInput").val())].toFixed(2);
    pizzaPrice.displayItem.push(" " + topping + " (" + toppingPrice + ")")
    pizzaPrice.itemPrice.push(toppingPrice);
    console.log(topping + toppingPrice);
    $("#addedToppings").text(pizzaPrice.displayItem);
  });
});
