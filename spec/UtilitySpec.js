describe("a set of utility functions", function() {
  describe("fullName();" , function() {
      it("joins two strings w/ a space", function() {
        expect(fullName("Han", "Solo")).toEqual("Han Solo");
        expect(fullName("Boba", "Fett")).toEqual("Boba Fett");
      });
      it("strips whitespace from the names", function() {
        expect(fullName("   Han", "  Solo   ")).toEqual("Han Solo");
      });
  });
});
