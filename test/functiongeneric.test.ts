describe("Function generic", () => {
  function create<T>(value: T): T {
    return value;
  }

  it("should function generic", () => {
    const result = create<string>("Rizal");
    expect(result).toBe("Rizal");
    const result1 = create<number>(123);
    expect(result1).toBe(123);
  });
});
