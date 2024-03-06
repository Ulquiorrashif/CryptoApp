import {Component, Input, OnInit} from '@angular/core';
import {MyStatComponent} from "./my-stat/my-stat.component";
import {CardItemComponent} from "./card-item/card-item.component";
import {ICard, ITest} from "../entity/ICard";

import {TagComponent} from "../tag/tag.component";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-my-card',
  standalone: true,
  imports: [MyStatComponent, CardItemComponent, TagComponent,DecimalPipe],
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.css'
})
export class MyCardComponent {

  @Input() Coin: ICard ;

}
