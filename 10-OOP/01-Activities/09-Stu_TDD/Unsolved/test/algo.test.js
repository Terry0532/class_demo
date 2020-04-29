const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("should take a string as an argument and return a new reversed version of the string.", () => {
      const str = "Hello";
      const result = new Algo().reverse(str);
      expect(result).toEqual("olleH");
    });
  });

  describe("isPalindrome", () => {
    it("should take a string as an argument and return the boolean 'true' if the provided string is a palindrome.", () => {
      const str = "racecar";
      const result = new Algo().isPalindrome(str);
      expect(result).toBeTruthy;
    });
  });

  describe("capitalize", () => {
    it("should take a string as an argument and return a new string with the first letter of each word capitalized.", () => {
      const str = "hello";
      const result = new Algo().capitalize(str);
      expect(result).toEqual("Hello");
    });
  });
});