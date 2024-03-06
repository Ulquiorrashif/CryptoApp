import {Component, OnInit} from '@angular/core';
import {MySelectComponent} from "../my-select/my-select.component";
import {DataServiceService} from "../data-service.service";
import {NzSelectModule} from "ng-zorro-antd/select";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule, Validators,
} from "@angular/forms"
import {UpCasePipe} from "../pipe/up-case.pipe";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzIconModule} from "ng-zorro-antd/icon";
import {ICoinAPI} from "../entity/ICard";
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import {NzButtonModule} from "ng-zorro-antd/button";
import { NzResultModule } from 'ng-zorro-antd/result';
import {DecimalPipe} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [NzMentionModule,
    NzDatePickerModule,
    NzButtonModule,
    NzResultModule,
    DecimalPipe,
    HttpClientModule,

    MySelectComponent, NzSelectModule, FormsModule, UpCasePipe,ReactiveFormsModule,NzFormModule,NzIconModule,NzInputModule,NzCalendarModule,
  ],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css',

})
export class MyFormComponent implements OnInit{
  list:any[]
  validateForm: FormGroup<{
    amount: FormControl<string>;
    price: FormControl<string>;
    date: FormControl<Date| null>;
    total: FormControl<number>;
  }>;
  selectedCoinId?:string=null
  selectedCoin?:ICoinAPI=null
  status:boolean=false
  amount:string
  constructor(private fb: NonNullableFormBuilder,private dataService :DataServiceService,private formBuilder: FormBuilder) {
    // use `MyValidators`
    this.validateForm = this.fb.group({
      amount: ['', [Validators.required,Validators.pattern("^[0-9]+[.]?[0-9]*$"),]],
      price: [{value: 'Nancy Drew', disabled: true},],
      date: this.formBuilder.control<Date | null>(null),
      total: [{value: null, disabled: true},]
    });

  }
  change(){
    this.selectedCoin=this.list.find(item=>item.id===this.selectedCoinId)
    console.log(this.selectedCoin)
    this.validateForm.controls.price.setValue(this.selectedCoin.price.toString())
  }
  ngOnInit(): void {
    // this.list=this.dataService.getDataApi()
    this.dataService.getDataApi().subscribe({next:(data: any) => this.list=data["result"]})
  }

  submitForm(): void{
    console.log('/')
    console.log(this.validateForm)
    console.log(this.validateForm.controls["amount"].errors)
    console.log(this.validateForm.controls)
    console.log('/')
    if (this.validateForm.valid) {
      this.validateForm.controls.total.setValue(parseInt(this.validateForm.controls.amount.value)*this.selectedCoin.price)
      console.log('submit', this.validateForm.getRawValue());
      this.amount=this.validateForm.controls.amount.value
      this.dataService.addAsset({id:this.selectedCoin.id,...this.validateForm.getRawValue()}).subscribe({
        next:(data: any) => {console.log(data)},
        error: error => console.log(error)
      });
      this.status=true
      this.validateForm.reset()
    } else {
    }
  }

  protected readonly parseInt = parseInt;
}


