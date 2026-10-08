import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (!element) return;

    const offsetPosition =
      element.getBoundingClientRect().top + window.pageYOffset - 78;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
}
