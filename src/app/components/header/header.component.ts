import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'home';

  navItems = [
    { label: 'Home', link: '#home', id: 'home' },
    { label: 'Services', link: '#services', id: 'services' },
    { label: 'Portfolio', link: '#portfolio', id: 'portfolio' },
    { label: 'Pricing', link: '#pricing', id: 'pricing' },
    { label: 'About', link: '#about', id: 'about' },
    { label: 'Contact', link: '#contact', id: 'contact' }
  ];

  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.checkScroll();
    this.updateActiveSection();
  }

  checkScroll() {
    this.isScrolled = window.scrollY > 16;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    this.closeMobileMenu();

    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerOffset = 78;
    const offsetPosition =
      element.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    this.activeSection = sectionId;
  }

  updateActiveSection() {
    const scrollPosition = window.scrollY + 120;
    for (const item of this.navItems) {
      const element = document.getElementById(item.id);
      if (!element) continue;
      const top = element.offsetTop;
      const height = element.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        this.activeSection = item.id;
      }
    }
  }
}
