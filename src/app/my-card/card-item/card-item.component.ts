import {Component, Input} from '@angular/core';
import {DecimalPipe, NgStyle} from "@angular/common";
import {NzTagModule} from "ng-zorro-antd/tag";
import {TagComponent} from "../../tag/tag.component";

@Component({
  selector: 'card-item',
  standalone: true,
  imports: [DecimalPipe,NgStyle,NzTagModule,TagComponent ],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent {
  @Input() title:string="ItemName"
  @Input() content:string|number="ItemContent"
  @Input() sufix:string=""
  // @Input() type:boolean|undefined=undefined
  @Input() type?:boolean

}
