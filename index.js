// Write your solution here!
let cats= ["Milo", "Otis", "Garfield"];
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function destructivelyAppendCat(name) {
  cats.push(name);
}
destructivelyAppendCat("Ralph")

function destructivelyPrependCat(name) {
  cats.unshift(name);
}
destructivelyPrependCat("Bob")

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  return [...cats, name];
}
appendCat("Broom")

function prependCat(name) {
  return [name, ...cats];
}
prependCat("Arnold")

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1);
}
