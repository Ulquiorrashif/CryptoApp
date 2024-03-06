import {
  Component,
  ElementRef,
 Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import {FormsModule, NgForm} from "@angular/forms";
import {DataServiceService} from "../data-service.service";
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzModalService } from 'ng-zorro-antd/modal';
import {UpCasePipe} from "../pipe/up-case.pipe";
import {TagComponent} from "../tag/tag.component";
import {DecimalPipe} from "@angular/common";
import {IsBoldDirective} from "../directive/is-grow.directive";
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
export class MySelectComponent implements  OnInit{
  selectedOS=null;
  list:any[];
  @Input() isModal:boolean=true;
  selectCoin:any;
  @ViewChild("selectElement", {static: false})
  itemSel:ElementRef;
  constructor(private DataService:DataServiceService,private modal: NzModalService) {
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
  }

  ngOnInit(): void {
    this.DataService.getDataApi().subscribe({next:(data: any) => this.list=data["result"]})
    console.log(this.list,"k")
  }

  handleCancel(): void {
    this.isVisible = false;
    this.selectedOS=null
  }
}
