import {Component, OnInit} from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import {MySiderComponent} from "../my-sider/my-sider.component";
import {ICard} from "../entity/ICard";
import {ICoin} from "../entity/ICard";
import {MyCardComponent} from "../my-card/my-card.component";
import {NzListModule} from "ng-zorro-antd/list";

import {MySelectComponent} from "../my-select/my-select.component";
import {DataServiceService} from "../data-service.service";
import {DoughnutChartComponent} from "../doughnut-chart/doughnut-chart.component";
import {MyTableComponent} from "../my-table/my-table.component";
import {DecimalPipe} from "@angular/common";
import {MyDrawerComponent} from "../my-drawer/my-drawer.component";
import { NzButtonModule } from 'ng-zorro-antd/button';

import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-my-layout',
  imports: [HttpClientModule,NzLayoutModule, MyCardComponent, NzListModule, MySelectComponent, DoughnutChartComponent, MyTableComponent, NzButtonModule, DecimalPipe, MyDrawerComponent],
  standalone:true,

  templateUrl: './my-layout.component.html',
  styleUrls: ['./my-layout.component.css']
})
export class MyLayoutComponent implements OnInit{
  CardList:any[]
  Summ:number=11
  DrawerIsOpen:boolean=false
  constructor(private DataService:DataServiceService) {
    // this.CardList=this.DataService.getDataCoins()
    this.DataService.getSumm().subscribe({next:(data)=>{
      this.Summ=data
      }})

  }
  openDrawer(increased:boolean){
    this.DrawerIsOpen=increased
  }
  open(){
    console.log("qwe",this.DrawerIsOpen)
    this.DrawerIsOpen=true
    console.log("open",this.DrawerIsOpen)
  }

  ngOnInit(): void {
    this.DataService.getDataCoins().subscribe({next:(data: any) => this.CardList=data})
  }

}
