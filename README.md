# Angular Material 2 Extensions

A component library of custom extensions to Angular Material 2.

[![Build Status](https://api.travis-ci.org/sandervalstar/material2-extensions.png)](https://travis-ci.org/sandervalstar/material2-extensions)
[![Greenkeeper badge](https://badges.greenkeeper.io/sandervalstar/material2-extensions.svg)](https://greenkeeper.io/)

[![https://nodei.co/npm/material2-extensions.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/material2-extensions.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/material2-extensions)

## Components
* [Chip-input with auto-complete](#chip-input)

## How to use
### Chip-input
![](https://raw.githubusercontent.com/sandervalstar/material2-extensions/master/images/chip-input.png "Chip Input")
```html
<mat-chip-input [options]="['option 1', 'option 2', 'option 3']"></mat-chip-input>
```

| Inputs          | Type           | Description                                    | Required |
|-----------------|----------------|------------------------------------------------|----------|
| options         | Array\<string> | the list of auto-complete options              | yes      |
| placeholder     | string         | placeholder text in input field                | no       |
| chips           | Array\<string> | preselected chips                              | no       |
| isOptionsFilter | boolean        | filter the options as you type, default = true | no       |

| Outputs        | Type           | Description                                                                                                        |
|----------------|----------------|--------------------------------------------------------------------------------------------------------------------|
| onValueChange  | Array\<string> | emits the list of chips when a chip is added or removed                                                            |
| onIllegalInput | string         | emits an error message if the user pressed enter while the input field contains a value that is not a valid option |
