//Business logic
function PizzaCreator (size, toppings, total) {
  this.size = size;
  this.toppings = toppings;
  this.total = total;
};

PizzaCreator.prototype.addToppings = function(toppings, pointOfSale) {
  for (var i=0; i < toppings.length; ++i) {
    this.total += pointOfSale.price[toppings[i]];
    this.size += (" topping " + (i+1) + ": " + pointOfSale.item[toppings[i]]);
  };
};

function PointOfSale() {
  this.item = ["Large Pizza", "Medium Pizza", "Small Pizza", "Pepperoni", "Sausage", "Mushrooms"];
  this.price = [12, 7, 5, .5, .99, .75];
  this.cartItemPrice = [];
  this.cart = [];
}

PointOfSale.prototype.toCart = function (cartItem, itemPrice) {
  this.cart.push(cartItem);
  this.cartItemPrice.push(itemPrice);
}

PointOfSale.prototype.total = function () {
  var total = 0;
  for(var i = 0; i < this.cartItemPrice.length; ++i) {
    total += this.cartItemPrice[i];
  }
  return total;
}

//UI logic
$(document).ready(function() {
  var newPointOfSale = new PointOfSale();
  var toppings = [];
  $("#addToCart").click(function() {
    //Prepare cart div for added cart items
    $(".viewCart").empty();
    $("#addedToppings").empty();

    event.preventDefault();

    //create pizza
    var itemIndexInput = parseInt($("#sizeInput").val());
    var newPizza = new PizzaCreator(newPointOfSale.item[itemIndexInput], toppings, newPointOfSale.price[itemIndexInput]);

    //add toppings to PizzaCreator
    newPizza.addToppings(toppings, newPointOfSale);

    //push to cart, display each item, display total for all items
    newPointOfSale.toCart(newPizza.size, parseFloat(newPizza.total));
    $.each(newPointOfSale.cart, function(index, value) {
      $(".viewCart").append("<li>" + newPointOfSale.cart[index] + "<strong> $" + newPointOfSale.cartItemPrice[index].toFixed(2) + "</strong></li>");
    });
    $("#orderTotal").text("Order Total: $" + newPointOfSale.total().toFixed(2));
    $("#orderTotal").slideDown();
    $("#cart li").slideDown();
    //reset toppings array for next pizza item
    toppings = [];
  });
  $("#addToppingButton").click(function() {
    $("#addedToppings").empty();
    var newTopping = parseInt($("#toppingsInput").val());
    toppings.push(newTopping);
    $.each(toppings, function (index, value) {
      $("#addedToppings").append(newPointOfSale.item[value] + " ");
    });
  });
});
