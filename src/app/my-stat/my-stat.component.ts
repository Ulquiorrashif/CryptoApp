import {Component} from '@angular/core';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import {FormsModule} from "@angular/forms";
import {DecimalPipe} from "@angular/common";
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';


@Component({
  selector: 'app-my-stat',
  imports:[NzStatisticModule,FormsModule,DecimalPipe,NzCardModule,NzIconModule],
  standalone: true,
  templateUrl: './my-stat.component.html',
  styleUrl: './my-stat.component.css'
})
export class MyStatComponent {

}
