describe("Generic Collection", () => {
  it("should array", () => {
    const arr = new Array<string>();
    arr.push("Rizal");
    arr.push("Pradana");
    expect(arr[0].toUpperCase()).toBe("RIZAL");
    expect(arr[1].toUpperCase()).toBe("PRADANA");
  });

  it("should set", () => {
    const st = new Set<string>();
    st.add("zal");
    st.add("dana");
    st.add("zal");

    expect(st.size).toBe(2);
    expect(st.has("zal")).toBe(true);
    expect(st.has("dana")).toBe(true);
  });

  it("should map", () => {
    const mp = new Map<string, number>();
    mp.set("zal", 22);
    mp.set("boy", 21);

    expect(mp.get("zal")).toBe(22);
    expect(mp.get("boy")).toBe(21);
  });
});
