//Business logic
function PizzaCreator (pizza, size) {
  this.pizza = pizza;
  this.size = size
}

//UI logic
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    var userInput = $("#pizzaInput").val();
    var sizeInput = $("#sizeInput").val();
    var newPizza = new PizzaCreator(userInput, sizeInput);
    $(".pizzaOutput").text(newPizza.size + " " + newPizza.pizza);
  });
});
