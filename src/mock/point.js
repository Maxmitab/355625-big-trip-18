import {
  getRandomInteger,
  generatePointType,
  generatePointDestination,
  getRandomDate,
  getOffers
} from '../utils.js';
import {dest, pointTypes, offerTitles} from './const.js';

const OFFERS_COUNT = 8;

export const generatePoint = () => {
  const dateFrom = getRandomDate(new Date(2012, 0, 1), new Date(2025, 0, 1));
  const dateTo = getRandomDate(dateFrom, new Date(2025, 0, 1));
  return {
    type: generatePointType(pointTypes),
    destination: generatePointDestination(dest),
    dateFrom: dateFrom.toISOString(),
    dateTo: dateTo.toISOString(),
    basePrice: getRandomInteger(1, 1000),
    offers: getOffers(getRandomInteger(1, offerTitles.length)),
    isFavorite: Math.random() > 0.5 // boolean random generator
  };
};

export const getPoints = () => Array.from({length: OFFERS_COUNT}, generatePoint);
