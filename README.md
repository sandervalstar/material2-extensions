# Angular Material 2 Extensions
https://www.npmjs.com/package/material2-extensions

This is a component library containing the following custom extensions to Angular Material 2:

* [Chip-input with auto-complete](https://github.com/sandervalstar/material2-extensions#chip-input)


## How to use
### Chip-input
![alt text](https://github.com/sandervalstar/material2-extensions/blob/master/images/chip-input.png "Chip Input")
```angular2html
<mat-chip-input [options]="['option 1', 'option 2', 'option 3']"></mat-chip-input>
```

| Inputs          | Type           | Description                                    | Required |
|-----------------|----------------|------------------------------------------------|----------|
| options         | Array\<string> |                                                | yes      |
| placeholder     | string         | placeholder text in input field                | no       |
| chips           | Array\<string> | preselected chips                              | no       |
| isOptionsFilter | boolean        | filter the options as you type, default = true | no       |

| Outputs        | Type           | Description                                                                                                        |
|----------------|----------------|--------------------------------------------------------------------------------------------------------------------|
| onValueChange  | Array\<string> | emits the list of chips when a chip is added or removed                                                            |
| onIllegalInput | string         | emits an error message if the user pressed enter while the input field contains a value that is not a valid option |
