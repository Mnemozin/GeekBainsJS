//1
let isPrime = (num) => {
  if (num <= 3) return num > 1;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let count = 5;
  while (Math.pow(count, 2) <= num) {
    if (num % count === 0 || num % (count + 2) === 0) return false;
    count += 6;
  }
  return true;
};
let x = 0;
while (x <= 100) {
  if (isPrime(x)) {
    console.log(x);
  }
  ++x;
}

//2, 3
let basket = [
  {
    name: '001',
    price: 1000,
    size: 'xxl',
  },
  {
    name: '002',
    price: 1337,
    size: 'xxl',
  },
  {
    name: '003',
    price: 999,
    size: 'xxl',
  },
  {
    name: '004',
    price: 9,
    size: 'xxl',
  },
];

let countBasketPrice = () => {
  let sum = 0;
  basket.forEach((item) => {
    sum += item.price;
  });
  return sum;
};
console.log('ЗАДАНИЕ НОМЕР ДВА: ' + countBasketPrice());

//4
for (let i = 0; i < 10; console.log(i++));

//5
for (let row = ''; row.length <= 20; row += 'x') {
  console.log(row);
}
