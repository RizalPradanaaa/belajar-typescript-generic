describe("Generic", () => {
  class GenericData<T> {
    value: T;
    constructor(value: T) {
      this.value = value;
    }
  }

  it("should generic", () => {
    const genericData = new GenericData<number>(1);
    // Cannot
    // genericData.value = "eko"
    // genericData.value = true
  });
});
