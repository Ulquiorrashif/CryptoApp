import {Component, OnInit} from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import {ChartType, ChartOptions, Chart,} from 'chart.js';
import {DataServiceService} from "../data-service.service";
import {HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports: [NgChartsModule,HttpClientModule],
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.css'
})
export class DoughnutChartComponent implements OnInit{
  list:any[]
  chart:any
  constructor(private DataService:DataServiceService) {
  }
  ngOnInit(): void {
    this.DataService.getDataCoins().subscribe({next:(data: any) => {this.list=data
    console.log(data,"graph")
        new Chart("myChart", {
          type: 'pie',
          data: {
            labels: this.list.map(item=>item.id),
            datasets:
              [{
              label: '$',
              data:this.list.map(item=>item.totalAmount),
              borderWidth: 1
            }]
          },
          options: {

            // scales: {
            //   y: {
            //     beginAtZero: true
            //   }
            // }
          }
        });
    }})
    console.log(this.list,"ddd")
    // new Chart("myChart", {
    //   type: 'pie',
    //   data: {
    //     labels: this.list.map(item=>item.id),
    //     datasets:
    //       [{
    //       label: '$',
    //       data:this.list.map(item=>item.totalAmount),
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //
    //     // scales: {
    //     //   y: {
    //     //     beginAtZero: true
    //     //   }
    //     // }
    //   }
    // });
  }

}
