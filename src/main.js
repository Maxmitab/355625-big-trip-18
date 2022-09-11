import FilterView from './view/trip-filters-view';
import HeaderInfoView from './view/trip-info-view';
import BoardPresenter from './presenter/board-presenter';
import {render, RenderPosition} from './render.js';
import PointsModel from './model/points-model';
import {getPoints} from './mock/point.js';
import FormsModel from './model/forms-model';
import {getForms} from './mock/forms.js';


const headerElement = document.querySelector('.page-header');
const mainElement = document.querySelector('.page-main');
const tripEventElement = mainElement.querySelector('.trip-events');
const tripControlFilters = headerElement.querySelector('.trip-controls__filters');
const headerInfoElements = headerElement.querySelector('.trip-main');
const points = getPoints();
const newForm = getForms();
const pointsModel = new PointsModel();
const formModel = new FormsModel();
pointsModel.init(points);
formModel.init(newForm);
const boardPresenter = new BoardPresenter();


render(new HeaderInfoView(), headerInfoElements, RenderPosition.AFTERBEGIN);
render(new FilterView(), tripControlFilters);

boardPresenter.init(tripEventElement, pointsModel, formModel);
