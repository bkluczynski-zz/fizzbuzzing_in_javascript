describe("FizzBuzz", function(){
var fizzBuzz;

beforeEach(function(){
  fizzBuzz = new FizzBuzz();
});

  describe("know when the number", function(){
    it("is divisible by three", function(){
        expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

  describe("know when the number is NOT", function(){
    it("is divisible by three", function(){
        expect(fizzBuzz.isDivisibleByThree(1)).toBe(false);
    });

    




  });












});
