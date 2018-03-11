describe("Utility Examples", function() {
  describe("fullName()", function() {
    it("concatenates two name parts, separated by a space", function() {
      expect(fullName("Billy", "Bob")).toEqual("Billy Bob");
    });
  });
});
