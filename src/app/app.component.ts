import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeLogoComponent } from '../home-logo/home-logo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DellService';
}
