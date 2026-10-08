import { Component } from '@angular/core';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  templateUrl: './final-cta.component.html',
  styleUrl: './final-cta.component.scss'
})
export class FinalCtaComponent {
  scrollToContact(event: Event) {
    event.preventDefault();
    const element = document.getElementById('contact');
    if (!element) return;
    const offsetPosition =
      element.getBoundingClientRect().top + window.pageYOffset - 78;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
}
