import { Component } from '@angular/core';
import { HomeLogoComponent } from '../../home-logo/home-logo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-laptop-chiplevel',
  standalone: true,
  imports: [HomeLogoComponent,RouterModule],
  templateUrl: './laptop-chiplevel.component.html',
  styleUrl: './laptop-chiplevel.component.css'
})
export class LaptopChiplevelComponent {

}
