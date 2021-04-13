//1
let x = 0;
while (x <= 100) {
  console.log(x);
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
for (let i = 0; i < 20; i++) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row += 'x';
  }
  console.log(row);
}
