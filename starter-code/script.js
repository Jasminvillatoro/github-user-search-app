fetch('https://api.github.com/users/jasminvillatoro')
  .then((res) => res.json())
  .then((data) => console.log(data));
