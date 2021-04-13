let transformNumToObj = (num) => {
  if ((num > 999) | (num < 0)) {
    console.log('incorrect number');
    return {};
  }
  let hundereds = Math.floor(num / 100);
  num = num % 100;
  let dozens = Math.floor(num / 10);
  num = num % 10;
  let ones = num / 1;
  return {
    единицы: ones,
    десятки: dozens,
    сотни: hundereds,
  };
};
number = parseInt(prompt('Введите число:'));
console.log(transformNumToObj(number));
