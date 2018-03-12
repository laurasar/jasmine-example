describe("Utility Examples", function() {
  describe("fullName()", function() {
    it("concatenates two name parts, separated by a space", function() {
      expect(fullName("Billy", "Bob")).toEqual("Billy Bob");
    });
  });

  describe("ageInYears()", function() {
    const nowStub = new Date("2018-03-11");

    beforeEach(() => {
      spyOn(Date, "now").and.returnValue(nowStub);
    });

    it("returns the age from a birthday", function(){
      expect(ageInYears("1980-05-17")).toEqual(37);
    });
  });

  describe("isOver21()", () => {
    const nowStub = new Date("2018-03-11");

    beforeEach(() => {
      spyOn(Date, "now").and.returnValue(nowStub);
    });

    it("returns true when the age is 21", () => {
      expect(isOver21("1997-01-01")).toBe(true);
    });

    it("returns true when the age is over 21", () => {
      expect(isOver21("1992-01-01")).toBe(true);
    });

    it("returns false when the age is under 21", () => {
      expect(isOver21("2000-01-01")).toBe(false);
    });
  });

  describe("isLeapYear()", () => {
    it("returns true if the year is evenly divisible by 4", () => {
      expect(isLeapYear(2016)).toBe(true);
    });

    it("returns false if the year is not evenly divisible by 4", () => {
      expect(isLeapYear(2018)).toBe(false);
    });
  });
});
