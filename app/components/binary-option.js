import { action, set } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class BinaryOption extends Component {
  @tracked patientResponsibility = 0;

  @action
  updateChosenOption(event) {
    let isOptionChosen = event.target.value;
    this.patientResponsibility = (isOptionChosen === 'yes' ? 69.99 : 0);
    console.log(this.patientResponsibility);
  }
}
