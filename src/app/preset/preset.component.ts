import { Component, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { PresetBtnComponent } from '../preset-btn/preset-btn.component';

@Component({
  selector: 'app-preset',
  templateUrl: './preset.component.html',
  styleUrls: ['./preset.component.css']
})
export class PresetComponent implements OnInit, OnDestroy {

  @Input() btn!: PresetBtnComponent;

  private unlistener!: () => void;

  constructor(
    private renderer2: Renderer2
  ) { }

  handleEvent($event){
    console.log($event); // should be `false` if child executed the above code
  }

  ngOnInit(): void {
    console.log(this.btn);


    this.btn.clickEvent.subscribe(() => {
      console.log('click event');
    })

    this.unlistener = this.renderer2.listen(this.btn, 'click', () => {
      console.log('click');
    });

    /*this.btn.addEventListener('click', () => {
      console.log('click');
    });*/

  }

  ngOnDestroy() {
    this.unlistener();
  }

}