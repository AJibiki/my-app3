import { Component  } from '@angular/core';


@Component({
  selector: 'app-root'
  , template: `
　内部遷移をしたんでっせ！
<btn
  [type]="type"
  [disabled]="disabled"
  [buttonvalue]="buttonvalue"
  [buttonid]="buttonid"
  [buttonclass]="buttonclass"
  [onclk]="onclk"
  (log)="log($event)">
</btn>
  `
})
export class Test0Component {
  private type:string = "button";
  private disabled:string = "";
  private buttonvalue:string = "back";
  private buttonid:string = "buttonid";
  private buttonclass:string = "btncls";
  private onclk:string = '/';

  log(): void {
    this.buttonvalue="close";
  }
}
