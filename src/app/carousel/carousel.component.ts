import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  // @ViewChild('carouselInner', { static: true }) carouselInner!: ElementRef;
  // @ViewChild('dots', { static: true }) dots!: ElementRef;

  // slides = [
  //   { text: 'Des formulaires importants', image: 'assets/l1.PNG', caption: 'Description 1' },
  //   { text: 'Des formulaires plus intelligents', image: 'assets/l2.PNG', caption: 'Description 2' },
  //   { text: 'Automatiser votre flux de travail', image: 'assets/l3.PNG', caption: 'Description 3' },
  //   { text: 'Rassemblez votre équipe', image: 'assets/l4.PNG', caption: 'Description 4' }
  // ];

  // slideIndex = 0;
  // slideInterval: any;

  // ngOnInit() {
  //   this.showSlides();
  // }

  // ngOnDestroy() {
  //   clearTimeout(this.slideInterval);
  // }

  // showSlides() {
  //   const carouselInner = this.carouselInner.nativeElement;
  //   const dots = this.dots.nativeElement.children;

  //   for (let i = 0; i < dots.length; i++) {
  //     dots[i].classList.remove('active');
  //   }

  //   this.slideIndex++;
  //   if (this.slideIndex >= this.slides.length) {
  //     this.slideIndex = 0;
  //   }

  //   const offset = -this.slideIndex * 100;
  //   carouselInner.style.transform = `translateX(${offset}%)`;
  //   dots[this.slideIndex].classList.add('active');

  //   this.slideInterval = setTimeout(() => this.showSlides(), 3000); // Change image every 3 seconds
  // }

  // currentSlide(n: number) {
  //   clearTimeout(this.slideInterval);
  //   this.slideIndex = n;
  //   this.showSlides();
  // }
}
