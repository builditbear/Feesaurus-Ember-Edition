import Component from '@glimmer/component';

export default class FeeCalculator extends Component {
    lensOptions = [
        {
            name: 'Single Vision',
            value: 30,
        },
        {
            name: 'Bifocal',
            value: 50,
        },
        {
            name: 'Trifocal',
            value: 100,
        },
        {
            name: 'Progressive',
            value: 200,
        },
    ];
}
