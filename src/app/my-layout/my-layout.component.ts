import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {MyCardComponent} from "../my-card/my-card.component";

@Component({
  selector: 'app-my-layout',
  imports:[NzLayoutModule,MyCardComponent],
  standalone:true,
  templateUrl: './my-layout.component.html',
  styleUrls: ['./my-layout.component.css']
})
export class MyLayoutComponent {

}
