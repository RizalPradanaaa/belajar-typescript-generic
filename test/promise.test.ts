describe("Promise", () => {
  async function fetchData(value: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (value === "Eko") {
          resolve("Hello " + value);
        } else {
          reject("Not Found");
        }
      }, 1000);
    });
  }

  it("should support promise", async () => {
    const result = await fetchData("Eko");
    expect(result.toUpperCase()).toBe("HELLO EKO");

    try {
      await fetchData("Budi");
    } catch (e) {
      expect(e).toBe("Not Found");
    }
  });
});
