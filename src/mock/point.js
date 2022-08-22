import {getRandomInteger, formMapping} from '../utils.js';
import  {dest, offer, pointTypes} from './const.js';


const generatePointOffer = (num) => {
  return formMapping(offer, num);
};

const generatePointDestination = (dest) => {
  const randomIndex = getRandomInteger(0, dest.name.length - 1);
  return dest.name [randomIndex];
};

const generatePointType = (arr) => {
  const randomIndex = getRandomInteger(0, arr.length - 1);
  return arr[randomIndex];
};

const generatePoint = () => ({
  type: generatePointType(pointTypes),
  destination: generatePointDestination(dest),
  dateFrom: null,
  dateTo: null,
  basePrice: getRandomInteger(1, 1000),
  offers: generatePointOffer(getRandomInteger(1, 10)),
  isFavorite: false
});
