export default class FormsModel {
  newForms = [];
  getForms = () => this.newForms;
  init = (newForms) => {
    this.newForms = newForms;
  };
}
