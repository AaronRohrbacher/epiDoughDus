//Business logic
function PizzaCreator (pizza, size, toppings) {
  this.pizza = pizza;
  this.size = size;
  this.toppings = toppings;
}
var toppings = [];

//UI logic
$(document).ready(function() {
  //add toppings to empty array for later construction in object
  $("#addToppingButton").click(function() {
    toppings.push(" " + $("#toppingsInput").val());
    $("#addedToppings").text(toppings);
  });
  //create new pizza object and output it
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    console.log(toppings);
    var userInput = $("#pizzaInput").val();
    var sizeInput = $("#sizeInput").val();
    var newPizza = new PizzaCreator(userInput, sizeInput, toppings);
    $(".pizzaOutput").text(newPizza.size + " " + newPizza.pizza + " with " + newPizza.toppings);
  });
});
