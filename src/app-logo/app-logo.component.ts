import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeLogoComponent } from '../home-logo/home-logo.component';
import { routes } from '../app/app.routes';

@Component({
  selector: 'app-app-logo',
  standalone: true,
  imports: [RouterModule,HomeLogoComponent],
  templateUrl: './app-logo.component.html',
  styleUrl: './app-logo.component.css'
})
export class AppLogoComponent {

}
