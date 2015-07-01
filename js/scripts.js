function Burger(cost) {
  this.cost = 6;
}

// Burger.prototype.quantity = function(quantity) {
//   this.cost *= quantity
// }

Burger.prototype.size = function(size) {
  if(size === "Champ") {
    this.cost += 4;
  } else if(size === "House") {
    this.cost += 2;
  } else {
    this.cost;
  }
}

Burger.prototype.toppings = function(toppings) {
  if(toppings === "Bacon and Cheese") {
    this.cost += 3;
  } else if(toppings === "Bacon"){
    this.cost += 2;
  } else if(toppings === "Cheese"){
    this.cost += 1;
  } else{
    this.cost;
  }
}




  $(document).ready(function(){
    var newBurger = new Burger();
    newBurger.cost = 0;

    $("form#order").submit(function(event){
      newBurger.cost = 6;
      // var inputtedQuantity = parseInt($("input#quantity").val());
      var inputtedSize = $("input#size").val();
      var inputtedToppings = $("input#toppings").val();

      // newBurger.quantity(inputtedQuantity)
      newBurger.size(inputtedSize)
      newBurger.toppings(inputtedToppings)

      $(".order-total").text(newBurger.cost);

      event.preventDefault();



    });
});
