// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

// вспомогательная функция для формирования массива из объектов
const formMapping = (obj, num) => {
  return [...Array(num)].map(() => {
    return obj;
  });
};


export {getRandomInteger, formMapping};
