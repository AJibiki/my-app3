import { Component  } from '@angular/core';


@Component({
  selector: 'app-root'
  , templateUrl: 'app.component.html'
  , styleUrls: ['app.component.css']
})
export class AppComponent {
  private labelvalue1:string = "labelvalue1";
  private tagname1:string = "label";
  private labelid1:string = "labelid1";
  private labelclass1:string = "labelclass1";

  private type:string = "button";
  private disabled:string = "";
  private buttonvalue:string = "go";
  private buttonid:string = "buttonid";
  private buttonclass:string = "btncls";
  private onclk:string = '/test2';

  log(): void {
    this.labelvalue1="ボタンが押されました。";
  }
}
