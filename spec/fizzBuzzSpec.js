
describe("FizzBuzz", function(){
  var fizzbuzz;

  beforeEach(function(){
    fizzbuzz = new FizzBuzz();
  });

  describe("it knows when the number", function(){
    it("is divisible by three", function(){
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true)
    });

  });
  describe("it knows when the number", function(){
    it("is not divisible by three", function(){
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false)
    });

  });

  describe("it knows when the number", function(){
    it("is divisible by five", function(){
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true)
    });

  });
  describe("it knows when the number", function(){
    it("is not divisible by five", function(){
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false)
    });

  });
  describe("it knows when the number", function(){
    it("is divisible by fifteen ", function(){
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true)
    });

  });
  describe("it knows when the number", function(){
    it("is not divisible by fifteen", function(){
      expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false)
    });
  });

  describe("says", function(){
    it("fizzbuzz when the number is divisible by 15", function(){
      expect(fizzbuzz.says(15)).toEqual('fizzbuzz');
    });
  });

  describe("says", function(){
    it("fizz when the number is divisible by 3", function(){
      expect(fizzbuzz.says(3)).toEqual('fizz');
    });
  });

  describe("says", function(){
    it("buzz when the number is divisible by 5", function(){
      expect(fizzbuzz.says(5)).toEqual('buzz');
    });
  });









});
