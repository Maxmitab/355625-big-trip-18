import dayjs from 'dayjs';
import {offerTitles} from './mock/const';


const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const humanizeTaskDueDate = (datePeriod, format) => dayjs(datePeriod).format(format);
const humanizeDiffDate = (dateTo, dateFrom, period, float) => dayjs(dateTo).diff(dayjs(dateFrom), period, float);

const generatePointType = (arr) => {
  const randomIndex = getRandomInteger(0, arr.length - 1);
  return arr[randomIndex];
};

const generatePointDestination = (dest) => {
  const randomIndex = getRandomInteger(0, dest.name.length - 1);
  return dest.name [randomIndex];
};

const getRandomDate = (start, end) => new Date(
  start.getTime() + Math.random() * (end.getTime() - start.getTime())
);

const getOffer = () => ({
  id: getRandomInteger(1, 10),
  title: getRandomElement(offerTitles),
  price: getRandomInteger(1, 1000),
});

const getOffers = (num) => Array.from({length: num}, () => getOffer());


export {
  getRandomInteger,
  getRandomElement,
  humanizeTaskDueDate,
  humanizeDiffDate,
  generatePointType,
  generatePointDestination,
  getRandomDate,
  getOffers
};
