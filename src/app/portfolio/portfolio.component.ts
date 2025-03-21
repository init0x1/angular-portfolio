import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = [
    { name: 'Unixity Scanner', description: 'vulnerability scanner for network and web application security assessments.', link: 'https://unixity.safebuffer.org/' },
    { name: 'Storefront Backend', description: 'a comprehensive backend API that facilitates the management of products, orders ,and users', link: 'https://github.com/init0x1/store-api' },
    { name: 'Image Processing API', description: 'real-world scenario in which you would read and write to your disk via a express server rather than a database to change height and width of any image useing Api endpoint with Express.js', link: 'https://github.com/init0x1/image-processing-api' }
  ];
}
