function greeting() {
  let userName = "Johan";

  function displayUserName() {
    return `hello ${userName}`;
  }
  return displayUserName;
}

const g = greeting;
console.log(g);
