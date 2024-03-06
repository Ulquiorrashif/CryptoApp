import {Component, OnInit} from '@angular/core';

import {NzTableFilterFn, NzTableFilterList, NzTableModule, NzTableSortFn, NzTableSortOrder} from 'ng-zorro-antd/table';

import {FormsModule} from "@angular/forms";
import {DataServiceService} from "../data-service.service";
import {DecimalPipe} from "@angular/common";
import {ICoin} from "../entity/ICard";
import {HttpClientModule} from "@angular/common/http";


interface DataItem extends ICoin{
  name: string;
  price: number;
  amount: number;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<DataItem> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<DataItem> | null;
}

@Component({
  selector: 'app-my-table',
  standalone:true,
  imports:[NzTableModule,FormsModule,HttpClientModule],
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements  OnInit{
  constructor(private DataService:DataServiceService) {
  }
//   this.listOfData.map(coin=>{
//   console.log("hui ",coin)
//   return {
//   text:coin.id,
//   value:coin.id
// }
// })

  listOfData: DataItem[];
  listOfColumns: ColumnItem[];

  trackByName(_: number, item: ColumnItem): string {
    return item.name;
  }

  sortByAge(): void {
    this.listOfColumns.forEach(item => {
      if (item.name === 'Age') {
        item.sortOrder = 'descend';
      } else {
        item.sortOrder = null;
      }
    });
  }
  ngOnInit(): void {
    // this.listOfData=this.DataService.getDataCoins().map(coin=>{
    //   return {
    //     name: coin.id,
    //     price: coin.price,
    //     amount: coin.amount
    //   }
    // })
    this.DataService.getDataCoins().subscribe({next:(data: DataItem[]) => {this.listOfData=data;
      console.log(this.listOfData,"chipi chapa dubi daba ")
      this.listOfColumns= [
        {
          name: 'Name',
          sortOrder: null,
          sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
          listOfFilter: this.listOfData.map(item=>{
            return{text: item.id,
              value: item.id}
          }),
          filterFn: (list: string[], item: DataItem) => {

            return list.some(name => {
              console.log(item.name.indexOf(name),item.name)
              return item.name.indexOf(name) !== -1})}
        },
          {
            name: 'Price, $',
            sortOrder: null,
            sortFn: (a: DataItem, b: DataItem) =>   a.price - b.price  ,
            listOfFilter: [],
            filterFn: null
          },
          {
            name: 'Amount',
            sortFn:(a: DataItem, b: DataItem) =>  a.amount - b.amount ,
            sortOrder: null,
            listOfFilter: [],
            filterFn: null
          }
        ];
    }})
    console.log(this.listOfData,"wtf")

  }
}
