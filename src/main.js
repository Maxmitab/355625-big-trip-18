import FilterView from './view/trip-filters-view';
import HeaderInfoView from './view/trip-info-view';
import BoardPresenter from './presenter/board-presenter.js';
import {render, RenderPosition} from './render.js';


const headerElement = document.querySelector('.page-header');
const mainElement = document.querySelector('.page-main');
const tripEventElement = mainElement.querySelector('.trip-events');
const tripControlFilters = headerElement.querySelector('.trip-controls__filters');
const headerInfoElements = headerElement.querySelector('.trip-main');
const boardPresenter = new BoardPresenter();

render(new HeaderInfoView(), headerInfoElements, RenderPosition.AFTERBEGIN);
render(new FilterView(), tripControlFilters);

boardPresenter.init(tripEventElement);
