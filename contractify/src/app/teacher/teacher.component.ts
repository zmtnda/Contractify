import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }
  navigate(path) {
    console.log(path)
    // this.router.navigate([{outlets: {primary: path, sidemenu:path}}], 
    //                      {relativeTo: this.route});
  }

}
