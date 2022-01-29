// This introduced to remove the protoryping in es5 syntax.
class Employee {
  constructor(options) {
    this.id = options.id;
    this.name = options.name;
  }
}

const emp = new Employee({ id: 1, name: "Alok" });
console.log(emp);
