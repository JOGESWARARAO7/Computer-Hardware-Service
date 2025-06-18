import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeLogoComponent } from '../../home-logo/home-logo.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule,HomeLogoComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
