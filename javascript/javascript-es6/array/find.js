var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true },
];

function isAdmin(user) {
  return user.admin;
}

// Passing a function
var admin = users.find(isAdmin);

var admin = users.find(function (user) {
  return user.admin;
});

console.log(admin);
