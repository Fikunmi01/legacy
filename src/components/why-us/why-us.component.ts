import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss'],
})
export class WhyUsComponent {
  Perks: Array<any> = [
    {
      item: 'We Can Save You Money',
    },
    {
      item: 'Trust and Expertise Focused',
    },
  ];

    Perks2: Array<any> = [
    {
      item: 'Conversational & Friendly',
    },
    {
      item: 'Results-Driven',
    },
  ];

  whyUs: Array<any> = [
    {
      icon: 'assets/shield-plus (1) 1.png',
      heading: 'Comprehensive coverages',
      description:
        'Our policies provide extensive protection for you and your loved ones in all situations.',
    },
    {
      icon: 'assets/usd-circle 1.png',
      heading: 'Affordable premiums',
      description:
        'Flexible payment options and competitive rates to fit any budget and financial situation',
    },
    {
      icon: 'assets/clock 1.png',
      heading: 'Quick application',
      description:
        'Simple online process with approval in minutes, not weeks. No medical exam required for many policies.',
    },
    {
      icon: 'assets/user-headset 1.png',
      heading: 'Customer support',
      description:
        'Dedicated support team available 24/7 to help with claims and answer any questions.',
    },
  ];
}
