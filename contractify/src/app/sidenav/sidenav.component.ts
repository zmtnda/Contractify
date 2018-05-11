import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() myEvent:EventEmitter<any> =  new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }
  navigate(page:any){
    this.myEvent.emit(page);
  }

}
