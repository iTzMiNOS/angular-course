import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input({
    required: true
  })
  course:Course;

  @Input({
    required: true
  })
  cardIndex:Number;

  @Output()
  courseEvent = new EventEmitter<Course>();


  onCourseView(){
    console.log("clicked!!!")
    this.courseEvent.emit(this.course);
  }
}
