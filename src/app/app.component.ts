import { Component, Inject, Injector, OnInit } from '@angular/core';
import { Course } from './courses/model/course';
import { CoursesService } from './courses/services/courses.service';
import { Observable } from 'rxjs';
import { AppConfig, CONFIG_TOKEN } from './config';
import { COURSES } from '../db-data';
import { createCustomElement } from '@angular/elements';
import { CourseTitleComponent } from './courses/course-title/course-title.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    // courses$: Observable<Course[]>
    courses: Course[] = COURSES;
    coursesTotal = this.courses.length;

    constructor(
        private coursesService: CoursesService,
        @Inject(CONFIG_TOKEN) private config: AppConfig,
        private injector: Injector
    ) {
        console.log(config);
    }

    ngOnInit() {
        // this.courses$ = this.coursesService.loadCourses();

        const htmlElement = createCustomElement(CourseTitleComponent, { injector: this.injector } );
        customElements.define('course-title', htmlElement);
    }

    save(course: Course) {
        this.coursesService.saveCourse(course)
            .subscribe(
                () => alert('Course Saved')
            );
    }

    onEditCourse() {
        console.log('Edited');
    }
}
