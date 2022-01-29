fetch("https://covidhelp.page")
  .then((response) => response.json())
  .then((data) => console.log(data));
