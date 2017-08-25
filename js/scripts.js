//Business logic
var cart = [];

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
  }
  return total;
}

function toCart (cartItem) {
  cart.push(cartItem);
  pizzaPrice.displayItem = [];
  pizzaPrice.itemPrice = [];
}

function cartTotal(fullCart) {
  var total = 0;
  for (i=0; i < fullCart.length; ++i) {
    total += fullCart[i].total
  }
  return parseFloat(total)
}

// function viewCart() {
//   for (i=0; i < cart.length; ++i) {
//
// }

//UI logic
$(document).ready(function() {

  //construct new pizza object and output it
  $("#pizzaForm").submit(function(event) {
    $(".viewCart").empty();
    event.preventDefault();
    var pizzaInput = $("#pizzaInput").val();
    var sizeInput = pizzaPrice.item[$("#sizeInput").val()];
    var sizePrice = pizzaPrice.price[$("#sizeInput").val()].toFixed(2);
    pizzaPrice.itemPrice.push(sizePrice);
    var newPizza = new PizzaCreator(pizzaInput, sizeInput, pizzaPrice.displayItem);
    var pizzaTotal = newPizza.price().toFixed(2);
    $(".pizzaOutput").text(newPizza.size + " " + newPizza.pizza + " (" + sizePrice + ")  with " + newPizza.toppings + " Pizza Total: " + pizzaTotal);
    newPizza.total = pizzaTotal;
    toCart(newPizza)
    console.log(cart);
    alert(cart);
    $.each(cart, function(i, val) {
      $(".viewCart").append("<li>" + cart[i].size + " " + cart[i].pizza +" " + cart[i].toppings.join() + " " + cart[i].total +"</li>");
    });
    $("#orderTotal").text(cartTotal(cart).toFixed(2));
    $("#addedToppings").empty()

  });
  //add toppings to empty array for later construction in object
  $("#addToppingButton").click(function() {
    var topping = pizzaPrice.item[parseInt($("#toppingsInput").val())];
    var toppingPrice = pizzaPrice.price[parseInt($("#toppingsInput").val())].toFixed(2);
    pizzaPrice.displayItem.push(" " + topping + " (" + toppingPrice + ")")
    pizzaPrice.itemPrice.push(toppingPrice);
    $("#addedToppings").text(pizzaPrice.displayItem);
  });
});
