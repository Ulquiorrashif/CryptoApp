import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Injectable, Input,
  NgModule,
  OnInit,
  ViewChild
} from '@angular/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import {FormsModule, NgForm} from "@angular/forms";
import {DataServiceService} from "../data-service.service";
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzModalService } from 'ng-zorro-antd/modal';
import {UpCasePipe} from "../../up-case.pipe";
import {TagComponent} from "../tag/tag.component";
import {DecimalPipe} from "@angular/common";
import {IsBoldDirective} from "../../is-grow.directive";
import {NzPipesModule} from "ng-zorro-antd/pipes";
import {HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-my-select',
  imports: [NzSelectModule, FormsModule, NzModalModule, UpCasePipe, TagComponent,DecimalPipe,IsBoldDirective,NzPipesModule,HttpClientModule],
  standalone:true,
  providers:[NzModalService],
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.css']
})
export class MySelectComponent implements  OnInit,AfterViewInit{
  selectedOS=null;
  list:any[];
  @Input() isModal:boolean=true;
  selectCoin:any;
  @ViewChild("selectElement", {static: false})
  itemSel:ElementRef;
  constructor(private DataService:DataServiceService,private modal: NzModalService) {
    // document.addEventListener("keypress",(item)=>{
    //   if (item.key==="/")
    //     this.isOpen=!this.isOpen
    //   console.log(this.selectedOS)
    // })

  }

  isVisible = false;

  showModal(): void {
    if (this.isModal){
      console.log(this.selectedOS)
      this.selectCoin=this.list.find((item)=>{
        return item.id===this.selectedOS});
      console.log(this.selectCoin)

      this.isVisible = true;
    }

    // this.modal.confirm({
    //   nzTitle: '<i>Do you Want to delete these items?</i>',
    //   nzContent: '<b>Some descriptions</b>',
    //   nzOnOk: () => console.log('OK'),
    //   nzStyle:{color:"red"}
    // });
    // console.log(this.selectedOS)
  }

  ngOnInit(): void {
    // this.list=this.DataService.getDataApi()
    this.DataService.getDataApi().subscribe({next:(data: any) => this.list=data["result"]})
    console.log(this.list,"k")
  }
  handleOk(): void {
    console.log(this.selectedOS)
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.selectedOS=null
  }

  ngAfterViewInit(): void {
    console.log(this.itemSel)
    // this.itemSel.nativeElement.addEventListener("click",()=>{
    //   this.isVisible = true;
    //   console.log(this.isVisible)
    // })
  }
}
