import {generatePoint} from '../mock/point.js';

export default class PointModel {
  points = Array.from({length: 6}, generatePoint);

  getTasks = () => this.points;
}
