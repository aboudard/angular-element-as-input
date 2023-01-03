import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-preset-btn',
  templateUrl: './preset-btn.component.html',
  styleUrls: ['./preset-btn.component.css']
})
export class PresetBtnComponent {

  @Input()
  label: string;

  @Output()
  clickEvent = new EventEmitter();

  constructor() {
    this.label = 'init'
  }

}