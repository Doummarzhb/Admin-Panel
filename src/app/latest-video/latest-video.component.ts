import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextLimitPipe } from '../text-limit.pipe';

@Component({
  selector: 'latest-video',
  standalone: true,
  imports: [RouterModule,TextLimitPipe],
  templateUrl: './latest-video.component.html',
  styleUrl: './latest-video.component.scss'
})
export class LatestVideoComponent {
 data={
  videoTitle:
  'full Stack Angular 17 + .Net 8 Lbrary management System ',
  ranking:'2',
  clickthrough:'10',
  duration:'3:22',
  views:100,
  comment:10,
  likes:50,
 };
}
