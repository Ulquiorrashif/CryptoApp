import {Component, EventEmitter, Input, Output} from '@angular/core';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import {FormsModule} from "@angular/forms";
import {MyFormComponent} from "../my-form/my-form.component";
@Component({
  selector: 'app-my-drawer',
  standalone:true,
  imports: [NzDrawerModule, FormsModule, MyFormComponent],
  templateUrl: './my-drawer.component.html'
})
export class MyDrawerComponent {
  @Input() visible=false
  @Output() visibleChange = new EventEmitter<boolean>();
  change(increased:boolean){
    this.visible=increased
    this.visibleChange.emit(increased)
    console.log(this.visible,this.visibleChange)
  }

}
