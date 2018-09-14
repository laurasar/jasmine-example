describe("a set of utility functions", function() {
  //fullName (Han Solo )
  describe("fullName();" , function() {
      it("joins two strings w/ a space", function() {
        expect(fullName("Han", "Solo")).toEqual("Han Solo");
        expect(fullName("Boba", "Fett")).toEqual("Boba Fett");
      });
      it("strips whitespace from the names", function() {
        expect(fullName("   Han", "  Solo   ")).toEqual("Han Solo");
      });
  });

  // ageInYears('1990-09-01')
  describe("ageInYears()", function(){
    it("returns the age from a birth date", function() {
      const today = new Date ("2018-09-12");
      spyOn(window, "getNow").and.returnValue(today);
      expect(ageInYears("1990-09-01")).toEqual(28);
    });

  });

  //describe is over 21
  describe("isOver21()",function() {
    beforeEach(() => {
      const today = new Date("2017-05-15");
      spyOn(window,"getNow").and.returnValue(today);
    });

    it("returns true when the age is 21", () => {
      expect(isOver21("1996-01-09")).toBe(true);
    });

    it("returns true when the age is over 21", () => {
      expect(isOver21("1992-11-02")).toBe(true);
    });

    it("returns false when the age is under 21", () => {
      expect(isOver21("2001-04-01")).toBe(false





      );
    });
  });

  //Write a function that accepts a year (as a string or number)
  // and returns true if the given year is a leap year.
  // Otherwise, return false.
  //
  // You may already know that a leap year is a year that is
  // evenly divisible by four, however there's more to it than that.
  //
  //A leap year that is divisible by 100 must also be divisible by 400 to be a leap year.

  describe("isLeapYear()", function () {
    it("Returns true when is a leap year", function() {
      expect(isLeapYear(1600)).toEqual(true);
      expect(isLeapYear(2008)).toEqual(true);
    });
    it("Returns false when it is NOT a leap year", function() {
      expect(isLeapYear(1900)).toEqual(false);
      expect(isLeapYear(1803)).toEqual(false);
    });
  });
});
