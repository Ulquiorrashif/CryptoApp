import {Component, Input} from '@angular/core';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import {FormsModule} from "@angular/forms";
import {DecimalPipe} from "@angular/common";
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {ICard} from "../../entity/ICard";
import {UpCasePipe} from "../../../up-case.pipe";


@Component({
  selector: 'app-my-stat',
  imports:[NzStatisticModule,FormsModule,DecimalPipe,NzCardModule,NzIconModule,UpCasePipe],
  standalone: true,
  templateUrl: './my-stat.component.html',
  styleUrl: './my-stat.component.css'
})
export class MyStatComponent {
  @Input() coin:ICard
  title:string="gct"

}
