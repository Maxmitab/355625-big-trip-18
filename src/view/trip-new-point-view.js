import {createElement} from '../render.js';
import {humanizeTaskDueDate,generatePointType} from '../utils.js';


const createNewPointTemplate = (newForm) => {
  const {type, destination, dateFrom, dateTo, basePrice, offers,photo} = newForm;
  const dateStart = (dateFrom !== null) ? humanizeTaskDueDate(dateFrom, 'DD/MM/YY hh:mm') : '';
  const dateEnd = (dateTo !== null) ? humanizeTaskDueDate(dateTo, 'DD/MM/YY hh:mm') : '';
  const randomType = generatePointType(type);
  const randomDestination = generatePointType(destination);

  return (`<li class="trip-events__item"><form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${randomType}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${type.map((item) => `<div class="event__type-item"><input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item}"><label class="event__type-label  event__type-label--${item}" for="event-type-taxi-1">${item}</label></div>`).join('')}                 
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${randomType}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${randomDestination}" list="destination-list-1">
                    <datalist id="destination-list-1">
                    ${destination.map((item)=>`<option value="${item}"></option>`)}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateStart}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateEnd}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro; 
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Cancel</button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                    <div class="event__available-offers">
                    ${offers.map((item)=>`<div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
                        <label class="event__offer-label" for="event-offer-luggage-1">
                          <span class="event__offer-title">${item.title}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${item.price}</span>
                        </label>
                      </div>`).join('')}
                    </div>
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>

                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                      ${photo.map((item)=>`<img class="event__photo" src="${item}" alt="Event photo">`).join('')}                       
                      </div>
                    </div>
                  </section>
                </section>
              </form></li>`);
};

export default class NewPointAddView {
  constructor(newForm) {
    this.newForm = newForm;
  }

  getTemplate() {
    return createNewPointTemplate(this.newForm);
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
