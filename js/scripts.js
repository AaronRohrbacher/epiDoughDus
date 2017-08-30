//Business logic


function PizzaCreator (size, toppings, total) {
  // this.pizza = pizza;
  this.size = size;
  this.toppings = toppings;
  this.total = total;
};

PizzaCreator.prototype.addToppings = function(toppings, pointOfSale) {
  for (var i=0; i < toppings.length; ++i) {
    this.total += pointOfSale.price[toppings[i]];
    this.size += (" topping " + (i+1) + ": " + pointOfSale.item[toppings[i]]);
  }
};

function PointOfSale() {
  this.item = ["Large Pizza", "Medium Pizza", "Small Pizza", "Pepperoni", "Sausage", "Mushrooms"];
  this.price = [12, 7, 5, .5, 1, .75];
  this.cartItemPrice = [];
  this.cart = [];
}
// var pointOfSale = {item:["Large", "Medium", "Small", "Pepperoni", "Sausage", "Mushrooms"], price: [7.99, 5, 3, .5, 1, .75], displayItem: [], itemPrice: [], cart: []};

// PointOfSale.prototype.total = function() {
//   var total = 0;
//   for (var i = 0; i < pointOfSale.cart.length; ++i) {
//     total += parseFloat(pointOfSale.cart[i]);
//   }
// };

PointOfSale.prototype.toCart = function (cartItem, itemPrice) {
  this.cart.push(cartItem);
  this.cartItemPrice.push(itemPrice);
}

// function toCart (cartItem) {
//   cart.push(cartItem);
//   pointOfSale.displayItem = [];
//   pointOfSale.itemPrice = [];
// }
//
// function cartTotal(fullCart) {
//   var total = 0;
//   for (var i=0; i < fullCart.length; ++i) {
//     total += parseFloat(fullCart[i].total);
//   }
//   return total;
// }

//UI logic
$(document).ready(function() {
  var newPointOfSale = new PointOfSale();
  var toppings = [];
  $("#addToCart").click(function() {
    $(".viewCart").empty();
    $("#addedToppings").empty();
    event.preventDefault();

    //create pizza
    var itemIndexInput = parseInt($("#sizeInput").val());
    var newPizza = new PizzaCreator(newPointOfSale.item[itemIndexInput], toppings, newPointOfSale.price[itemIndexInput]);

    //add toppings to PizzaCreator
    newPizza.addToppings(toppings, newPointOfSale);

    //push to cart
    newPointOfSale.toCart(newPizza.size, parseFloat(newPizza.total));
    $.each(newPointOfSale.cart, function(index, value) {
      $(".viewCart").append("<li>" + newPointOfSale.cart[index] + " " + newPointOfSale.cartItemPrice[index] + "</li>");
    });
    //reset toppings array for next pizza item
    toppings = [];
  });
  $("#addToppingButton").click(function() {
    $("#addedToppings").empty();
    var newTopping = parseInt($("#toppingsInput").val());
    toppings.push(newTopping);
    $.each(toppings, function (index, value) {
      $("#addedToppings").append(newPointOfSale.item[value] + " ")
    });
  });
});
