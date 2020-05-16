import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    courses = COURSES;

    @ViewChildren(CourseCardComponent)
    cards: QueryList<CourseCardComponent>;

    @ViewChildren(CourseCardComponent, { read: ElementRef })
    cardsElement: QueryList<ElementRef>;

    constructor() {
    }

    ngOnInit() {
    }

    onCourseSelected(course: Course) {
        console.log('courses: ', this.courses);
    }
}
