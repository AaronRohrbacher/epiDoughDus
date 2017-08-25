//Business logic
function PizzaCreator (pizza) {
  this.pizza = pizza;
}

//UI logic
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    var userInput = $("#pizzaInput").val();
    var newPizza = new PizzaCreator(userInput);
    $(".pizzaOutput").append(newPizza.pizza);
  });
});
