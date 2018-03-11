describe("Utility Examples", function() {
  describe("fullName()", function() {
    it("concatenates two name parts, separated by a space", function() {
      expect(fullName("Billy", "Bob")).toEqual("Billy Bob");
    });
  });

  describe("ageInYears()", function() {
    it("returns the age from a birthday", function(){
      expect(ageInYears("1980-05-17")).toEqual(37);
    });
  });
});
