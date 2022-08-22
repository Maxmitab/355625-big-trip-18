import {generatePoint} from '../mock/point.js';

export default class PointsModel {
  points = Array.from({length: 6}, generatePoint);

  getTasks = () => this.points;
}
