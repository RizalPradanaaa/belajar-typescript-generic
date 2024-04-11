describe("Paramater Default Generic", () => {
  class SimpleGeneric<T = string> {
    private value?: T;

    public setValue(v: T) {
      this.value = v;
    }

    public getValue(): T | undefined {
      return this.value;
    }
  }

  it("should Paramater Default", () => {
    const simple = new SimpleGeneric();
    expect(simple.getValue()).toBe(undefined);
    simple.setValue("Rizal");
    expect(simple.getValue()).toBe("Rizal");
  });
});
