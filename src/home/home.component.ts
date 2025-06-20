import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeLogoComponent } from '../home-logo/home-logo.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,HomeLogoComponent,NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  reviews = [
  {
    name: 'Ananya Sharma',
    role: 'Software Engineer',
    comment: 'Superb service! Got my Dell laptop screen replaced in just 1 day.',
    image: 'assets/screenreplace.jpg'
  },
  {
    name: 'Rahul Verma',
    role: 'Freelancer',
    comment: 'The boot issue was resolved professionally. Highly recommend Laplabs!',
    image: 'assets/booting.jpg'
  },
  {
    name: 'Sneha Rao',
    role: 'Digital Marketer',
    comment: 'Their support is amazing. Very polite team and great service quality.',
    image: 'assets/client3.jpg'
  },
  {
    name: 'Vikram Singh',
    role: 'Student',
    comment: 'Affordable and fast! My hard disk crash recovery was smooth.',
    image: 'assets/HardDisk Crack.jpg'
  }
];

// Pagination logic
currentPage = 1;
itemsPerPage = 3;

get totalPages() {
  return Math.ceil(this.reviews.length / this.itemsPerPage);
}

get totalPagesArray() {
  return Array(this.totalPages).fill(0);
}

get displayedReviews() {
  const start = (this.currentPage - 1) * this.itemsPerPage;
  return this.reviews.slice(start, start + this.itemsPerPage);
}

changePage(page: number) {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
  }
}


}
