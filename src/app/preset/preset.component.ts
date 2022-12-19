import { Component, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-preset',
  templateUrl: './preset.component.html',
  styleUrls: ['./preset.component.css']
})
export class PresetComponent implements OnInit, OnDestroy {

  @Input() btn!: Element;

  private unlistener!: () => void;

  constructor(
    private renderer2: Renderer2
  ) { }

  ngOnInit(): void {
    console.log(this.btn);

    this.renderer2.listen(this.btn, 'click', () => {
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