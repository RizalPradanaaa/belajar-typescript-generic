describe("Generic Constraint", () => {
  interface Employee {
    id: number;
    name: string;
  }

  interface Manajer extends Employee {
    numberOfEmploye: number;
  }

  interface VP extends Manajer {
    numberOfManajer: number;
  }

  class EmployeeData<T extends Employee> {
    constructor(public employee: T) {}
  }

  it("generic employe", () => {
    const data1 = new EmployeeData<Manajer>({
      id: 1,
      name: "Boy",
      numberOfEmploye: 10,
    });
    const data2 = new EmployeeData<VP>({
      id: 2,
      name: "boboiboy",
      numberOfEmploye: 5,
      numberOfManajer: 2,
    });
  });

  //   const salah = new EmployeeData<string>("Rizal");
});
