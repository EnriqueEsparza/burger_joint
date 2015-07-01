describe("Burger", function()  {

  describe("cost", function () {

    it("will return a base price of 6 for our most basic burger burger", function () {
      var testBurger = new Burger()
      expect(testBurger.cost).to.equal(6)
    });
  });

  describe("quantity", function() {
    it("will return a price based on quantity", function() {
      var testBurger = new Burger()
      testBurger.quantity(2)
      expect(testBurger.cost).to.equal(12)

    });
  });

  describe("size", function() {
    it("will return a price based on size", function() {
      var testBurger = new Burger()
      testBurger.size("House")
      expect(testBurger.cost).to.equal(8)
    });
  });

  describe("toppings", function(){
    it("will return a price based on toppings", function(){
      var testBurger = new Burger()
      testBurger.toppings("Bacon")
      expect(testBurger.cost).to.equal(8)
    });
  });



});
