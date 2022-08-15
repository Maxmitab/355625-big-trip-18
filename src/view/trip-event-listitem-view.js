import {createElement} from '../render';

const createListItemContainerTemplate = () => (
  `<ul class="trip-events__list"></ul>`
);

export default class ListItemContainerView {
  getTemplate() {
    return createListItemContainerTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
