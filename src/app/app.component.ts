import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    courses = COURSES;
    startDate = new Date(2020, 0, 12);
    title = COURSES[1].description;
    price = 9.99234523;
    rate = 0.67;
    coreCourse = COURSES[0];

    onCourseSelected(course: Course) {
        console.log(course);
    }
}
