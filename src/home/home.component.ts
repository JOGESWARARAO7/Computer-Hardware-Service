import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeLogoComponent } from '../home-logo/home-logo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,HomeLogoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
