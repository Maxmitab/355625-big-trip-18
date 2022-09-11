import {dest, pointTypes, offerTitles} from './const.js';
import {
  getRandomInteger,
  generatePointType,
  generatePointDestination,
  getRandomDate,
  getOffers
} from '../utils.js';


export const generateNewForm = () => {
  const dateFrom = getRandomDate(new Date(2012, 0, 1), new Date(2025, 0, 1));
  const dateTo = getRandomDate(dateFrom, new Date(2025, 0, 1));
  return {
    type: generatePointType(pointTypes),
    destination: generatePointDestination(dest),
    dateFrom: dateFrom.toISOString(),
    dateTo: dateTo.toISOString(),
    basePrice: getRandomInteger(1, 1000),
    offers: getOffers(getRandomInteger(1, offerTitles.length)),
  };
};

export const getForms = () => Array.from({length: 1}, generateNewForm);
