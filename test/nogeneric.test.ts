describe("No generic", () => {
  class Data {
    value: any;
    constructor(value: any) {
      this.value = value;
    }
  }

  it("should no generic", () => {
    const data: Data = new Data(1);
    data.value = "Rizal";
    // data.value = true;
    console.info(data.value.toUpperCase());
  });
});
