import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent {
  steps = [
    {
      number: 1,
      title: 'Discuss',
      description: 'Understand your business, goals and requirements.',
      icon: 'chat',
      iconBg: '#067a46'
    },
    {
      number: 2,
      title: 'Design',
      description: 'Create a modern and attractive website design.',
      icon: 'pencil',
      iconBg: '#f97316'
    },
    {
      number: 3,
      title: 'Develop',
      description: 'Build and test the website with all features.',
      icon: 'code',
      iconBg: '#c79d6d'
    },
    {
      number: 4,
      title: 'Launch',
      description: 'Deploy your website and provide support.',
      icon: 'rocket',
      iconBg: '#067a46'
    }
  ];
}
