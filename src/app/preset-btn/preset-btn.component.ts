import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-preset-btn',
  templateUrl: './preset-btn.component.html',
  styleUrls: ['./preset-btn.component.css']
})
export class PresetBtnComponent implements OnInit {

  @Output()
  clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}