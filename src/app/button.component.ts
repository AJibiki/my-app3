import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'btn'
 , template: `
 <button
 (click)="alert()"
 type="{{type}}"
 id="{{buttonid}}"
 class="{{buttonclass}}"
 >
 {{buttonvalue}}
 </button>`
})
export class ButtonComponent {
  @Input() public type: string;
  @Input() public disabled: string;
  @Input() public buttonvalue: string;
  @Input() public buttonid: string;
  @Input() public buttonclass: string;
  @Input() public onclk: string;
  @Output() log = new EventEmitter();
  constructor(
    private router: Router) { }
  alert(): void {
    this.log.emit();
    this.buttonvalue="test";
    this.router.navigate([this.onclk]);
  }

}
