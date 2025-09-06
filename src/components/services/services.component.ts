import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  scrollToSection(sectionId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  }
  servicesArray: Array<any> = [
    {
      title: 'Term Life Insurance',
      description:
        'Provides temporary protection at affordable rates, ideal for specific stages or short-term needs.',
      icon1: 'assets/shield-plus 1.png',
      icon2: 'assets/Union.png',
      icon3: 'assets/Union (1).png',
    },
    {
      title: 'Whole Life Insurance',
      description:
        'Offering lifelong coverage with fixed premiums and builds cash value you can access overtime here.',
      icon1: 'assets/infinity 1.png',
      icon2: 'assets/Vector (8).png',
      icon3: 'assets/Vector (11).png',
    },
    {
      title: 'Universal Life Insurance',
      description:
        'Flexible lifetime coverage that combines protection with savings and adjustable premium options',
      icon1: 'assets/Vector (9).png',
      icon2: 'assets/Vector (10).png',
      icon3: 'assets/population-globe 2.png',
    },
  ];

  servicesArray2: Array<any> = [
    {
      title: 'Term Life',
      description:
        'Affordable coverage for a set period, perfect securing your family’s future during key responsibilities or life stages.',
      img: 'assets/Vector (2).png',
      perk1: 'Affordable monthly premiums',
      perk2: 'Fixed-term coverage',
      perk3: 'Simple and easy application',
      perk4: 'High coverage amount',
    },
    {
      title: "Children's Life",
      description:
        'Life insurance designed to protect your children’s future while building early financial value for their long-tern security.',
      img: 'assets/Vector (3).png',
      perk1: 'Early financial planning',
      perk2: 'Low premium rates',
      perk3: 'Cash value growth',
      perk4: 'Future insurability',
    },
    {
      title: 'Whole Life ',
      description:
        'Lifelong protection with fixed  premiums and cash value growth that supports long-tern goals and lasting peace of mind',
      img: 'assets/house-hands 1.png',
      perk1: 'Lifetime coverage',
      perk2: 'Cash value component',
      perk3: 'Fixed premiums',
      perk4: 'Dividend potential',
    },
    {
      title: 'Mortgage Protection',
      description:
        'Ensures your mortgage is covered so your home stays safe in case of unexpected death or disability',
      img: 'assets/Vector (4).png',
      perk1: 'Dividend potential',
      perk2: 'Decreasing term option',
      perk3: 'Affordable rates',
      perk4: 'Quick approval',
    },

    {
      title: 'Final Expense',
      description:
        'Helps cover funeral and end-of- life costs, easing the burdens on your loved ones during difficult times.',
      img: 'assets/Vector (5).png',
      perk1: 'Covers funeral costs',
      perk2: 'No medical exam',
      perk3: 'Guaranteed acceptance',
      perk4: 'Immediate coverage',
    },
    {
      title: 'Accidental Death Benefits',
      description:
        'Pays additional benefits if death occurs due to an accident, providing extra protection when it’s needed most.',
      img: 'assets/Vector (6).png',
      perk1: 'Double indemnity',
      perk2: '24/7 coverage',
      perk3: 'Additional benefits',
      perk4: 'Affordable add-on',
    },
  ];
}
