describe("Fizzbuzz", function(){
var fizzBuzz;


  beforeEach(function(){
    fizzBuzz = new FizzBuzz();
  });

  describe("know when the number", function(){
    it("is divisible by three", function(){
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });
  });

  describe ("know when the number", function(){
    it("is not divisible by three", function(){
      expect(fizzBuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

  describe("know when the number", function(){
    it("it is divisible by five", function(){
      expect(fizzBuzz.isDivisibleByFive(5)).toBe(true);
    });
  });

  describe("know when the number", function(){
    it("it is not divisible by five", function(){
      expect(fizzBuzz.isDivisibleByFive(2)).toBe(false);
    });
  });

  describe("know when the number", function(){
    it("it is divisible by 15", function(){
      expect(fizzBuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe("know when the number", function(){
    it("it is not divisible by 15", function(){
      expect(fizzBuzz.isDivisibleByFifteen(3)).toBe(false);
    });
  });

  describe("says", function(){
    it("fizz when is divisibe by 3", function(){
      expect(fizzBuzz.says(3)).toEqual("fizz");
    });
  });
  describe("says", function(){
    it("buzz when is divisibe by 5", function(){
      expect(fizzBuzz.says(5)).toEqual("buzz");
    });
  });
  describe("says", function(){
      it("fizzbuzz when is divisibe by 15", function(){
      expect(fizzBuzz.says(15)).toEqual("fizzbuzz");
    });
  });





});
