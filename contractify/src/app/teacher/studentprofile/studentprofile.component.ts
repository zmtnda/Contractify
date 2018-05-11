import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {
  public people = [{
    name:'Jimmy',
    numberOfdaysAttended: 0,
    publicKey:''
  },{
    name:'Zin',
    numberOfdaysAttended: 0,
    publicKey:''
  },{
    name:'Matt',
    numberOfdaysAttended: 0,
    publicKey:''
  },
  {
    name:'Ted',
    numberOfdaysAttended: 0,
    publicKey:''
  },
  {
    name:'John',
    numberOfdaysAttended: 0,
    publicKey:''
  }
  ]
  constructor() { }

  ngOnInit() {
    
  }
  addToAttendance(index){
    this.people[index].numberOfdaysAttended ++;

  }

}
