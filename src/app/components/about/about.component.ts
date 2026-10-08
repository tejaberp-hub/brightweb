import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  highlights = [
    {
      title: 'Built for small businesses',
      desc: 'Clear pages, simple navigation and practical features that help customers take action.'
    },
    {
      title: 'Transparent pricing',
      desc: 'Straightforward packages with no padded complexity — so you know exactly what you are getting.'
    },
    {
      title: 'Support after launch',
      desc: 'Every plan includes support so your website stays usable after it goes live.'
    }
  ];
}
