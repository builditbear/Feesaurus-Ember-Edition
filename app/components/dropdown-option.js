import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class DropdownOption extends Component {
    @tracked patientResponsibility = 0;

    @action
    updateChosenOption(event) {
        this.patientResponsibility = event.target.value || 0;
    }
}
