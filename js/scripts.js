//Business logic
function PizzaCreator (pizza, size, toppings) {
  this.pizza = pizza;
  this.size = size;
  this.toppings = toppings;
}

//UI logic
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    var userInput = $("#pizzaInput").val();
    var sizeInput = $("#sizeInput").val();
    var toppings = $("#toppingsInput").val()
    var newPizza = new PizzaCreator(userInput, sizeInput, toppings);
    $(".pizzaOutput").text(newPizza.size + " " + newPizza.pizza + " with " + newPizza.toppings);
  });
});
