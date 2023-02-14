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
    lensMaterials = [
        {
            name: 'CR-39',
            value: '30',
        },
        {
            name: 'Polycarbonate',
            value: '50',
        },
        {
            name: 'Hi-Index 1.67',
            value: '100',
        },
    ];
    miscLensOptions = [
        {
            name: 'Rimless mount: 2 or 3 holes',
            value: '30'
        },
        {
            name: 'Mirror coat',
            value: '100'
        },
        {
            name: 'Edge polish',
            value: '20'
        }
    ]

}
