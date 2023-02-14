import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class CheckboxOptionsComponent extends Component {
    @tracked patientResponsibility = 0;

    @action
    updateChoice(event) {
        debugger;
        if(event.target.checked) {
            this.patientResponsibility += Number((event.target.value || 0));
        } else {
            this.patientResponsibility -= Number((event.target.value || 0));
        }
    }
}
