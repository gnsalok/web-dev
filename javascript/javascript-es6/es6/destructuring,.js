const profile = {
  title: "Engineer",
  department: "Engineering",
};

// solution 1
function isEngineer(profile) {
  let { title, department } = profile;
  return title === "Engineer" && department === "Engineering";
}

// solution 2
function isEngineer({ title, department }) {
  return title === "Engineer" && department === "Engineering";
}

isEngineer(profile);

// Example 2

const classes = [
  ["Chemistry", "9AM", "Mr. Darnick"],
  ["Physics", "10:15AM", "Mrs. Lithun"],
  ["Math", "11:30AM", "Mrs. Vitalis"],
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
  return { subject, time, teacher };
});

classesAsObject;
