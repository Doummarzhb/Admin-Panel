import { Component } from '@angular/core';
import { TextLimitPipe } from '../text-limit.pipe';

@Component({
  selector: 'published-videos',
  standalone: true,
  imports: [TextLimitPipe],
  templateUrl: './published-videos.component.html',
  styleUrl: './published-videos.component.scss'
})
export class PublishedVideosComponent {
  data = [
  {
    videoTitle:'Full Stack Angular  17 +   . Net 8 Library Management System Website from Scratch | 2024',
    views:'1000',
    likes:'20',
    comments:'150',
    imageSrc:"Doummar.png",
  },
  {
    videoTitle:'Full Stack Angular  17 +   . Net 8 Library Management System Website from Scratch | 2024',
    views:'1000',
    likes:'20',
    comments:'150',
    imageSrc:"Doummar.png",
  },
  {
    videoTitle:'Full Stack Angular  17 +   . Net 8 Library Management System Website from Scratch | 2024',
    views:'1000',
    likes:'20',
    comments:'150',
    imageSrc:"Doummar.png",
  },
];
}
