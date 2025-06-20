import { Component } from '@angular/core';
import { HomeLogoComponent } from '../../home-logo/home-logo.component';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hp',
  standalone: true,
  imports: [HomeLogoComponent,RouterModule,NgFor],
  templateUrl: './hp.component.html',
  styleUrl: './hp.component.css'
})
export class HpComponent {

    imageList = [
    'assets/hp-laptop-service.jpg',
    'assets/dell2.jpg',
    'assets/dell3.jpg',
    'assets/dell4.jpg',
    'assets/Hp-loptop-repair.jpg'
  ];
}
