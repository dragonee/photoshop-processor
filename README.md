# Batch processing and form letters for Photoshop

This tool is a Photoshop Script Library that generates multiple files from one
PSD template, changing text or adding different images for each output file.

The main usecases for this script are:

- Form letters;
- Named certificates & diplomas;
- Wedding invitations.

This script requires minimal knowledge of JavaScript to use it. If you are completely
new to automation and programming, you can read this handy [automation guide](https://github.com/dragonee/photoshop-processor/blob/master/docs/kickstart-guide.md).

## Features

- [x] Setting text layer contents.
    - [x] Scaling down text to fit in the given boundaries.
    - [x] Centering text on a specific layer.
- [x] Replacing parts of text layer.
- [x] Setting a variant of text specified in the layer (e.g. *Mr|Mrs*).
- [x] Adding an image (e.g. company logo) to a file.
    - [x] Scaling and centering of the image.
- [x] A fluent syntax that separates data from transformation description.

## Minimal example

Copy the `Processor.jsxinc` file to a directory and create a file named
`example.jsx` in the same directory:

```javascript
#include "Processor.jsxinc"

processor = new Processor()

processor.transform(function(t) {
    t.putTextOnLayer('TEXT')
     .centerToBoundaryLayer('BOUNDARY')
})

processor.generate({
    'paths': {
        'output': 'C:/My/Path/To/A/Directory',
    },

    'putTextOnLayer.TEXT': {
        'einstein': 'Albert Einstein',
        'planck': 'Max Planck',
    },
})
```

Now, create a PSD file named `example.psd`, which contains two layers:

- A layer named `TEXT` (with or without contents);
- A shape layer named `BOUNDARY` (to center the text layer inside it).

Most likely the `BOUNDARY` layer will be an invisible rectangle on top of a larger background.
Otherwise a longer text could connect with edges of the layer without any padding inside.

In `C:/My/Path/To/A/Directory`, the processor will create three directories,
`JPG`, `PDF` and `PSD` with two files inside each (`XXX` being the specific extension):

- `example-einstein.XXX`
- `example-planck.XXX`

## API

TODO

## Bugs and issues

The script was tested on Adobe CS6 on Mac. If you find some issues using it,
create an issue in the issue tracker on this repository.
