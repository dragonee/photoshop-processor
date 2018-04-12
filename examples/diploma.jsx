#include "../Processor.jsxinc"

/*
This file is divided into two parts.
The first part defines operations that are going

Idea - napisać psd, którego PNG będzie zaimportowany w readme, który pokazuje kod, założenia i layer w śliczny sposób. Jako example.

Planck
Einstein
Ten od weak
Ten od strong

*/

var processor = new Processor();

processor.transform(function(t) {
    t.putTextOnLayer('TEXT')
    //    .centerToBoundaryLayer('TEXT_BOUNDARY')

    t.putTextVariationOnLayer('VARIANT')
        .withBoundary('30mm', '10mm')

    t.putTextVariationOnLayer('VARIANT_B')
        .separatedBy('|')

    //t.addImageLayer('IMAGE')
    //    .centerToBoundaryLayer('IMAGE_BOUNDARY')

    t.replaceTextOnLayer('FMT')
})

processor.data({
    'suffixes': [
        'ar',
        'mm',
    ],

    'paths': {
        'input': '/Users/dragonee/Kod/images',
        'output': '/Users/dragonee/Kod/output',
    },

    'putTextOnLayer.TEXT': [
        'Aleksandra Różańska',
        'Michał Moroz',
    ],

    'putTextVariationOnLayer.VARIANT.choices': [
        'ona', 'on'
    ],

    'putTextVariationOnLayer.VARIANT': [
        0,1
    ],

    'putTextVariationOnLayer.VARIANT_B': [
        1,2
    ],

    'addImageLayer.IMAGE': {
        'ar': 'ul.png'
    },

    'replaceTextOnLayer.FMT': [
        ['sizer'],
        ['resizer'],
    ],

    'replaceTextOnLayer.FMT.name': [
        1,2
    ],
})

processor.output(['PSD', 'JPG', {format: 'PDF', merged: true} ])
