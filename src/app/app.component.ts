import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES;
  title = 9.99;
  startDate = new Date(2000,0,1);

  courseEventFunc(course:Course){
    console.log("custom clicked!!!", course)
  }
}
