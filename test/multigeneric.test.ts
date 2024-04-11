describe("Multiple Generic Type", () => {
  class Entry<K, V> {
    constructor(public key: K, public value: V) {}
  }

  class Triple<K, V, T> {
    constructor(public first: K, public second: V, public third: T) {}
  }

  it("should Multiple", () => {
    const entry = new Entry<string, number>("Rizal", 22);
    expect(entry.key).toBe("Rizal");
    expect(entry.value).toBe(22);
  });
});
