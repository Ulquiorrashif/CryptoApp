import {Component, OnInit} from '@angular/core';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {MyCardComponent} from "../my-card/my-card.component";
import {ICard, ICoin} from "../entity/ICard";
import {DataServiceService} from "../data-service.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'my-sider',
  standalone: true,
  imports: [NzLayoutModule,MyCardComponent,HttpClientModule],
  templateUrl: './my-sider.component.html',
  styleUrl: './my-sider.component.css'
})
export class MySiderComponent implements OnInit{
  constructor(private dataService:DataServiceService) {
  }
  list:ICoin[]

  ngOnInit(): void {
    // this.list=this.dataService.getDataCoins()
    this.dataService.getDataCoins().subscribe({next:(data: any) => this.list=data})
  }

}
