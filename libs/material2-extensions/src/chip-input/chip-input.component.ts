import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MatAutocomplete, MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'mat-chip-input',
  styleUrls: ['chip-input.component.scss'],
  templateUrl: './chip-input.component.html',
})
export class ChipInputComponent implements OnInit {
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  separatorKeysCodes = [ENTER, COMMA];

  @Input()
  placeholder = '';

  @Input()
  options: Array<string> = [];
  filteredOptions: Observable<string[]>;
  @Input()
  isOptionsFilter: boolean = true;

  @Output()
  onIllegalInput = new EventEmitter<string>();

  inputValue = '';

  @Input()
  chips: Array<string> = [];

  @Output() onValueChange = new EventEmitter();

  myControl: FormControl = new FormControl();

  @ViewChild(MatAutocomplete) matAutocomplete: MatAutocomplete;

  add(event: MatChipInputEvent): void {
    if (this.inputValue.length === 0 || this.options.indexOf(this.inputValue) < 0) {
      if (this.inputValue.length > 0) {
        console.log('error, not an option', this.inputValue);
        this.onIllegalInput.emit('You can only add items from the list');
      }
    }
    // else if (this.chips.indexOf(this.inputValue) >= 0) {
    //   console.log('error, already selected', this.inputValue);
    //   this.onIllegalInput.emit('You can only select values once');
    // }
    else {
      // Add our chip
      this.chips.push(this.inputValue.trim());
      this.onValueChange.emit(this.chips);
      this.options.splice(this.options.indexOf(this.inputValue), 1);
      this.inputValue = '';
      event.input.value = '';
    }
  }

  remove(chip: any): void {
    let index = this.chips.indexOf(chip);

    if (index >= 0) {
      this.options.push(chip);
      this.chips.splice(index, 1);
      this.onValueChange.emit(this.chips);
    }
  }

  chooseFirstOption(event: KeyboardEvent): void {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      return;
    }
    this.matAutocomplete._keyManager.setFirstItemActive();
  }

  filter(val: string): string[] {
    return this.options.filter(option => {
      if (this.inputValue === '') return false;
      if (this.isOptionsFilter) {
        return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
      } else {
        return true;
      }
    });
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map((val: string) => this.filter(val))
      );
  }
}
