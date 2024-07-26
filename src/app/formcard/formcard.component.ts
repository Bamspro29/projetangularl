import { Component } from '@angular/core';

@Component({
  selector: 'app-formcard',
  templateUrl: './formcard.component.html',
  styleUrl: './formcard.component.css'
})
export class FormcardComponent {

  activeLink: string = 'Application Forms'
  forms = [
    { name: 'Job Application Form Template', image: 'path/to/job-application.jpg' },
    { name: 'Rental Application Form Template', image: 'path/to/rental-application.jpg' },
    { name: 'Volunteer Application Form Template', image: 'path/to/volunteer-application.jpg' },
    { name: 'Affiliate Application Form Template', image: 'path/to/affiliate-application.jpg' },
    { name: 'Award Application Form Template', image: 'path/to/award-application.jpg' },
    { name: 'Brand Ambassador Application Form Template', image: 'path/to/brand-ambassador-application.jpg' }
  ];

  constructor() { }

  ngOnInit(): void { }
  setActive(link: string): void {
    this.activeLink = link;
  }


}
