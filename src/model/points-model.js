export default class PointsModel {
  points = [];
  getPoints = () => this.points;
  init = (points) => {
    this.points = points;
  };
}
