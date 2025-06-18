import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeLogoComponent } from '../../home-logo/home-logo.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dell',
  standalone: true,
  imports: [RouterModule,HomeLogoComponent,NgFor],
  templateUrl: './dell.component.html',
  styleUrl: './dell.component.css'
})
export class DellComponent {

  imageList = [
    'assets/dell1.jpg',
    'assets/dell2.jpg',
    'assets/dell3.jpg',
    'assets/dell4.jpg',
    'assets/dell5.webp'
  ];
}
