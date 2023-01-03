import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { PresetBtnComponent } from '../preset-btn/preset-btn.component';

@Component({
  selector: 'app-preset',
  templateUrl: './preset.component.html',
  styleUrls: ['./preset.component.css']
})
export class PresetComponent implements OnInit {

  @Input() btn!: PresetBtnComponent;

  constructor(
  ) { }

  handleEvent($event){
    console.log($event); // should be `false` if child executed the above code
  }

  ngOnInit(): void {

    console.log(this.btn);
    

    this.btn.clickEvent.subscribe(() => {
      this.btn.label = 'test';
    })

  }


}