//Business logic
var cart = [];

var pizzaMenu = {item:["Large", "Medium", "Small", "Pepperoni", "Sausage", "Mushrooms"], price: [7.99, 5, 3, .5, 1, .75], displayItem: [], itemPrice: []};

function PizzaCreator (pizza, size, toppings, total) {
  this.pizza = pizza;
  this.size = size;
  this.toppings = toppings;
  this.total = total;
}

PizzaCreator.prototype.price = function() {
  var total = 0;
  for (i=0; i < pizzaMenu.itemPrice.length; ++i) {
    total += parseFloat(pizzaMenu.itemPrice[i]);
  }
  return total;
}

function toCart (cartItem) {
  cart.push(cartItem);
  pizzaMenu.displayItem = [];
  pizzaMenu.itemPrice = [];
}

function cartTotal(fullCart) {
  var total = 0;
  for (i=0; i < fullCart.length; ++i) {
    total += parseFloat(fullCart[i].total);
  }
  return total
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
    var sizePrice = pizzaMenu.price[$("#sizeInput").val()].toFixed(2);
    var sizeInput = pizzaMenu.item[$("#sizeInput").val()] + " " + sizePrice;
    // pizzaMenu.displayItem.push("(" + sizePrice + ")")
    pizzaMenu.itemPrice.push(sizePrice);
    var newPizza = new PizzaCreator(pizzaInput, sizeInput, pizzaMenu.displayItem);
    var pizzaTotal = newPizza.price().toFixed(2);
    // $(".pizzaOutput").text(newPizza.size + " " + newPizza.pizza + "  with " + newPizza.toppings + " Pizza Total: " + pizzaTotal);
    newPizza.total = pizzaTotal;
    toCart(newPizza)
    console.log(cart);
    $.each(cart, function(i, val) {
      $(".viewCart").append("<li>" + cart[i].size + " " + cart[i].pizza + " " + cart[i].toppings.join() + " <strong>" + cart[i].total +"</strong></li>");
    });
    var orderTotal = cartTotal(cart);
    $("#orderTotal").text("Order Total: " + orderTotal);
    $("#addedToppings").empty();

  });
  //add toppings to empty array for later construction in object
  $("#addToppingButton").click(function() {
    var topping = pizzaMenu.item[parseInt($("#toppingsInput").val())];
    var toppingPrice = pizzaMenu.price[parseInt($("#toppingsInput").val())].toFixed(2);
    pizzaMenu.displayItem.push(" " + topping + " (add " + toppingPrice + ")")
    pizzaMenu.itemPrice.push(toppingPrice);
    $("#addedToppings").text(pizzaMenu.displayItem);
  });
});
