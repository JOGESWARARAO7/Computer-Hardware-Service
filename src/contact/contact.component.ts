import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeLogoComponent } from '../home-logo/home-logo.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule,HomeLogoComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
