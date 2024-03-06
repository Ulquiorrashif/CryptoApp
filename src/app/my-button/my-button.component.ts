import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [NzButtonModule],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {

}
