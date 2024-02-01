import { Component } from '@angular/core';
import {MyStatComponent} from "../my-stat/my-stat.component";

@Component({
  selector: 'app-my-card',
  standalone: true,
  imports: [MyStatComponent],
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.css'
})
export class MyCardComponent {

}
