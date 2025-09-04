import { Component, Inject, PLATFORM_ID, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  mobileMenuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Add event listener for escape key
    if (isPlatformBrowser(this.platformId)) {
      document.addEventListener('keydown', this.onKeydown.bind(this));
    }
  }

  ngOnDestroy(): void {
    // Clean up event listener and unlock body scroll
    if (isPlatformBrowser(this.platformId)) {
      document.removeEventListener('keydown', this.onKeydown.bind(this));
      this.unlockBodyScroll();
    }
  }

  scrollToSection(sectionId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    
    if (this.mobileMenuOpen) {
      this.lockBodyScroll();
    } else {
      this.unlockBodyScroll();
    }
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    this.unlockBodyScroll();
  }

  private lockBodyScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  private unlockBodyScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    // Close mobile menu on desktop resize
    if (event.target.innerWidth >= 1024 && this.mobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.mobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
}