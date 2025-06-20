import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeLogoComponent } from '../../home-logo/home-logo.component';

@Component({
  selector: 'app-datarecovery',
  standalone: true,
  imports: [RouterModule,HomeLogoComponent],
  templateUrl: './datarecovery.component.html',
  styleUrl: './datarecovery.component.css'
})
export class DatarecoveryComponent {

}
