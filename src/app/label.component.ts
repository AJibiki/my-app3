import { Component, Input} from '@angular/core';

@Component({
  selector: 'lavel'
 , template: `
   <label
    id="{{labelid}}"
    class="{{labelclass}}"
    >
    {{labelvalue}}
    </label>
  `
})
export class labelComponent {
  @Input() public labelvalue: string;
  @Input() public tagname: string;
  @Input() public labelid: string;
  @Input() public labelclass: string;

}
