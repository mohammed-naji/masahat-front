// Hoisting

// var
// let
// const

// var age = 10;
// var age = 20;
// console.log(age);

// let age = 15;
// age = 30;
// console.log(age);

// const age = 20;
// const age = 30;
// console.log(age);

// console.log(age);
// var age = 20;

console.log(a());
function a() {
  function y() {
    return 0;
  }
  return y();
  function y() {
    return 1;
  }
}

function aa() {
  let a = 5;
  console.log("dd");
  return a;
  console.log("dd");
  console.log("dd");
  console.log("dd");
  console.log("dd");
  console.log("dd");
}
