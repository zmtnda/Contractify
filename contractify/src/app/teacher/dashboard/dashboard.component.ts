import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [30, 40, 50, 60, 70, 80, 90, 100], label: 'Completed' },
    { data: [20, 30, 40, 50, 60, 70, 80, 90], label: 'Failed' },
  ];
  doChartData = [
    { data: [2, 18, 3]},
  ];

  chartLabels = ['Sept 2017', 'Oct 2017', 'Nov 2017', 'Dec 2017', 'Jan 2018', 'Feb 2018', 'Mar 2018', 'Apr 2018'];
  doChartLabels = ['Completed', 'On Track', 'At Risk'];

  onChartClick(event) {
    console.log(event);
  }

}
