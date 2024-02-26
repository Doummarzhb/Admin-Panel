import { Component } from '@angular/core';
import {NgChartsModule} from 'ng2-charts';
import { ChartData} from 'chart.js';
@Component({
  selector: 'subscribe-watchtime-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './subscribe-watchtime-chart.component.html',
  styleUrl: './subscribe-watchtime-chart.component.scss'
})
export class SubscribeWatchtimeChartComponent {
data : ChartData<'bar'> ={
labels:['jan','Feb','Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
datasets:[
  {

    data:this.getTotalSubs(),
    label:'Subscribers'
  },
  {
    data:this.getWatchTime(),
    label:'watchtime'
  },
],

};

getTotalSubs(){
  return [100,200,300,250,500,450,150,200,550,350,200,300];
}
getWatchTime(){
  return [100,200,300,250,500,450,150,200,550,350,200,300];
}
getTotalWatchTime(){
  let sum=0;
  this.getWatchTime().forEach((v) => (sum+=v));
  return sum;
}
}
