import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChipInputComponent } from './chip-input.component';
import { MatChipInputModule } from 'material2-extensions';
import { MatChipInputEvent } from '@angular/material';

describe('ChipInputComponent', () => {
  let component: ChipInputComponent;
  let fixture: ComponentFixture<ChipInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatChipInputModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipInputComponent);
    component = fixture.componentInstance;
    component.options = ['tomaat', 'appel', 'banaan', 'peer', 'bes'];
    fixture.detectChanges();
  });

  function add(opt: string) {
    component.inputValue = opt;
    component.add({input: {value: opt}} as MatChipInputEvent);
  }
  it('should create ChipInputComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to add chips', () => {
    const opt = 'banaan';
    expect(component.chips.indexOf(opt)).toBe(-1);
    expect(component.options.indexOf(opt)).toBeGreaterThan(-1);
    add(opt);
    expect(component.chips.indexOf(opt)).toBeGreaterThan(-1);
    expect(component.options.indexOf(opt)).toBe(-1);
  });

  it('should be able to remove chips', () => {
    const opt = 'banaan';
    add(opt);
    expect(component.chips.indexOf(opt)).toBeGreaterThan(-1);
    expect(component.options.indexOf(opt)).toBe(-1);
    component.remove(opt);
    expect(component.chips.indexOf(opt)).toBe(-1);
    expect(component.options.indexOf(opt)).toBeGreaterThan(-1);
  });

  it('should be able to filter options', () => {
    const input = 'b';
    let iter = 0;
    component.filteredOptions.subscribe(fopts => {
      if (iter === 0) {
        expect(fopts.length).toBe(0);
        iter++;
      } else {
        expect(fopts).toContain('banaan');
        expect(fopts).toContain('bes');
        expect(fopts.length).toBe(2);
      }
    });
    component.myControl.setValue(input);
  });

  it('should be able to change options', () => {

    const input = 'b';
    let iter = 0;
    component.filteredOptions.subscribe(fopts => {
      if (iter === 0) {
        expect(fopts.length).toBe(0);
        iter++;
      } else if (iter === 1) {
        expect(fopts).toContain('banaan');
        expect(fopts).toContain('bes');
        expect(fopts.length).toBe(2);
        component.options = ['bloemkool', 'spruitjes', 'boerenkool', 'rode bieten', 'spitskool'];
        iter++;
      } else if (iter === 2) {
        expect(fopts).toContain('bloemkool');
        expect(fopts).toContain('boerenkool');
        expect(fopts.length).toBe(2);
      }
    });
    component.myControl.setValue(input);
    component.myControl.setValue(input);
  });
});
