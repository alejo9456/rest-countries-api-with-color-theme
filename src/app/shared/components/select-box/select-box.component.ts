import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'shared-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent<T> {

  @Input() options: T[] = [];
  @Output() selectedOption = new EventEmitter<T>();
  showDropdown = false;
  selectedValue: T | undefined;

  toggleDropdown(){
    this.showDropdown = !this.showDropdown;
  }

  onOptionClicked(option: T) {
    this.selectedValue = option;
    this.selectedOption.emit(option);
    this.showDropdown = !this.showDropdown;
  }
}
