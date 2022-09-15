import {dest, pointTypes, offerTitles, photo} from './const.js';
import {
  getRandomInteger,
  getRandomDate,
  getOffers
} from '../utils.js';


export const generateNewForm = () => {
  const dateFrom = getRandomDate(new Date(2012, 0, 1), new Date(2025, 0, 1));
  const dateTo = getRandomDate(dateFrom, new Date(2025, 0, 1));
  return {
    type: pointTypes,
    destination: dest.name,
    dateFrom: dateFrom.toISOString(),
    dateTo: dateTo.toISOString(),
    basePrice: getRandomInteger(1, 1000),
    offers: getOffers(getRandomInteger(1, offerTitles.length)),
    photo: photo,
  };
};

export const getForms = () => Array.from({length: 1}, generateNewForm);
