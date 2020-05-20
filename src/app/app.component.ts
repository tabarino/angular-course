import { Component, Inject, OnInit } from '@angular/core';
import { Course } from './courses/model/course';
import { CoursesService } from './courses/services/courses.service';
import { Observable } from 'rxjs';
import { AppConfig, CONFIG_TOKEN } from './config';
import { COURSES } from '../db-data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    // courses$: Observable<Course[]>
    courses: Course[] = COURSES;

    constructor(
        private coursesService: CoursesService,
        @Inject(CONFIG_TOKEN) private config: AppConfig,
    ) {
        console.log(config);
    }

    ngOnInit() {
        // this.courses$ = this.coursesService.loadCourses();
    }

    save(course: Course) {
        this.coursesService.saveCourse(course)
            .subscribe(
                () => alert('Course Saved')
            );
    }
}
