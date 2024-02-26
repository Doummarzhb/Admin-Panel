import { Component } from '@angular/core';
import { TextLimitPipe } from '../text-limit.pipe';

@Component({
  selector: 'latest-comments',
  standalone: true,
  imports: [TextLimitPipe],
  templateUrl: './latest-comments.component.html',
  styleUrl: './latest-comments.component.scss'
})
export class LatestCommentsComponent {
data =[
  {
  profileImageSrc:'profile.png',
  username:'test.username',
  comment:'this is a test comment with more than 40 character ',
  DoummarSrc:'Doummar.png',
  },
];
}
