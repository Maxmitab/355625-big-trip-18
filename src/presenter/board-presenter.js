import SortView from '../view/trip-sort-view';
import SingleEventView from '../view/trip-event-item-view';
import ListItemContainerView from '../view/trip-event-listitem-view';
import NewPointAddView from '../view/trip-new-point-view';
import PointEditView from '../view/trip-edit-point-view';
import {render, RenderPosition} from '../render.js';


export default class BoardPresenter {
  sortViewComponent = new SortView();
  listItemContainerView = new ListItemContainerView();


  init = (boardContainer) => {
    this.boardContainer = boardContainer;

    render(this.sortViewComponent, this.boardContainer, RenderPosition.AFTERBEGIN);
    render(this.listItemContainerView, this.boardContainer);
    render(new NewPointAddView(), this.listItemContainerView.getElement());
    for (let i = 0; i < 3; i++) {
      render(new SingleEventView(), this.listItemContainerView.getElement());
      render(new PointEditView(), this.listItemContainerView.getElement());
    }

  };
}
