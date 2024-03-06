import { Component } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-my-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './my-modal.component.html',
  styleUrl: './my-modal.component.css'
})
export class MyModalComponent {

}
