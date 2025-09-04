import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  aboutUsItems: Array<any> = [
    {
      items: 'Affordable monthly premiums',
      description: 'Competitve rates that fit your budgets',
      icon: 'assets/usd-circle 1.png',
    },
    {
      items: 'Fixed-term coverage',
      description: 'Guaranteed coverage for your term.',
      icon: 'assets/clock 1.png',
    },
    {
      items: 'Simple and easy',
      description: 'Streamlined application process.',
      icon: 'assets/check-circle 1.png',
    },
    {
      items: 'High  coverage amount',
      description: 'Substantial protection for your family.',
      icon: 'assets/growth-chart-invest 1.png',
    },
    {
      items: 'Convertible options',
      description: 'Flexibility to change coverage as needed.',
      icon: 'assets/exchange 1.png',
    },
    {
      items: 'Great for families',
      description: 'Comprehensive family protection plans',
      icon: 'assets/family 1.png',
    },
  ];
}
