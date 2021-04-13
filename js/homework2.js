// var a = 1,
//   b = 1,
//   c,
//   d;
// c = ++a;
// alert(c); // 2 Преинкремент — сперва a увеличится на 1, затем значение a запишется в с
// d = b++;
// alert(d); // 1 Постинкремент — сперва значение b запишется в d, затем a увеличится на 1(2)
// c = 2 + ++a;
// alert(c); // 5 Преинкремент а(3) + 2
// d = 2 + b++;
// alert(d); // 4 Постинкремент b(2) + 2, затем b равно 3
// alert(a); // 3 См. строку 10
// alert(b); // 3 См. строку 11

//var a = 2;
//var x = 1 + (a *= 2); = 1 + (a = a * 2) = 1 + (a = 4)
//x = 5

//3
let func = (a, b) => {
  if (isNaN(a) | isNaN(b)) {
    return 'NaN';
  }
  if (a >= 0 && b >= 0) {
    return Math.abs(a - b);
  }
  if (a < 0 && b < 0) {
    return a * b;
  }
  return a + b;
};

let x = 3;
let y = -3;
console.log(func(x, y));

//4
let switchPractise = (a) => {
  for (let i = 0; i <= 15; ++i) {
    switch (i >= a) {
      case true:
        console.log(i);
    }
  }
};
let a = Math.floor(Math.random() * (15 - 0 + 1));
switchPractise(a);

//5
let sum = (a, b) => {
  return a + b;
};

let diff = (a, b) => {
  return a - b;
};

let mult = (a, b) => {
  return a * b;
};

let div = (a, b) => {
  return a / b;
};

//6
let mathOperation = (arg1, arg2, operation) => {
  switch (operation) {
    case '+':
      return arg1 + arg2;
    case '-':
      return arg1 - arg2;
    case '*':
      return arg1 * arg2;
    case '/':
      return arg1 / arg2;
    default:
      return 'error';
  }
};

//8
let power = (val, pow) => {
  if (pow == 0) return 1;
  else return val * power(val, pow - 1);
};

console.log(power(3, 3));
