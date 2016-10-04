describe("FizzBuzz", function(){
  var fizzBuzz;

  beforeEach(function(){
    fizzBuzz = new FizzBuzz();
  });

  describe("know when the number", function(){
    it("divisible by three", function(){
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });
  });
  describe("know when the number is NOT", function(){
    it("divisible by three", function(){
      expect(fizzBuzz.isDivisibleByThree(1)).toBe(false);
    });

  describe("know when the number is", function(){
    it("divisble by five", function(){
      expect(fizzBuzz.isDivisibleByFive(5)).toBe(true);
    });
  });

  describe("know when the number is NOT", function(){
    it("divisible by five", function(){
      expect(fizzBuzz.isDivisibleByFive(2)).toBe(false)
    });
  })

  describe("know when the number is", function(){
    it("divisible by 15", function(){
      expect(fizzBuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe("know when the number is NOT",function(){
    it("divisible by 15", function(){
      expect(fizzBuzz.isDivisibleByFifteen(1)).toBe(false);
    });
  });

  describe("when playing, says, ", function(){
    it('"Fizz", when a number is divisible by 3', function(){
      expect(fizzBuzz.says(3)).toEqual("Fizz");
    });
  });

  describe("when playing, says, ", function(){
    it('"Buzz", when a number is divisible by 5', function(){
      expect(fizzBuzz.says(5)).toEqual("Buzz");
    });
  });

  describe("when playing, says, ", function(){
      it('"FizzBuzz", when a number is divisible by 15', function(){
        expect(fizzBuzz.says(15)).toEqual("FizzBuzz");
      });
  });




});












});
