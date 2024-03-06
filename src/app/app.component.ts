import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {MyLayoutComponent} from "./my-layout/my-layout.component";
import {MyCardComponent} from "./my-card/my-card.component";
import {DataServiceService} from "./data-service.service";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,MyLayoutComponent,MyCardComponent],
  providers:[DataServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title:string="CryptoApp"

}
