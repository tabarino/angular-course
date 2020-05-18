import { Component, Inject, InjectionToken, OnInit, Self, SkipSelf } from '@angular/core';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';
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
    courses = COURSES

    constructor(
        private coursesService: CoursesService,
        @Inject(CONFIG_TOKEN) private config: AppConfig
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

    onEditCourse() {
        // When we turn on the ChangeDetectionStrategy.OnPush on the course-card component
        // This line won't change the description
        // Because the course object is the same
        // this.courses[0].description = 'New Value';

        // However, if we mutate the whole object, it will change anyway
        // The course object uses @Input and On Push change detection check if this object has changed
        // It's not recommended to change the object like that, because you are mutating the course object
        const course = this.courses[0];
        const newCourse = { ...course };

        newCourse.description = 'New Value';

        this.courses[0] = newCourse;
    }
}
