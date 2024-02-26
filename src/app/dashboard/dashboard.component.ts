import { Component } from '@angular/core';
import { LatestCommentsComponent } from '../latest-comments/latest-comments.component';
import { LatestVideoComponent } from '../latest-video/latest-video.component';
import { PublishedVideosComponent } from '../published-videos/published-videos.component';
import { SubscribeWatchtimeChartComponent } from '../subscribe-watchtime-chart/subscribe-watchtime-chart.component';
import { ViewRevenueChartComponent } from '../view-revenue-chart/view-revenue-chart.component';
import { AudienceChartComponent } from '../audience-chart/audience-chart.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [LatestCommentsComponent,LatestVideoComponent,PublishedVideosComponent,SubscribeWatchtimeChartComponent,ViewRevenueChartComponent,AudienceChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
