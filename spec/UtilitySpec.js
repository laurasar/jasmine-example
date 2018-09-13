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
});
