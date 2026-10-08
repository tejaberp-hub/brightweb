import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES_DATA } from '../../data/services.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = SERVICES_DATA;

  scrollToContact(event: Event) {
    event.preventDefault();
    const element = document.getElementById('contact');
    if (!element) return;
    const offsetPosition =
      element.getBoundingClientRect().top + window.pageYOffset - 78;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
}
