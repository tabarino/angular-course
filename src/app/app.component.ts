import { Component, Inject, InjectionToken, OnInit, Self } from '@angular/core';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';
import { Observable } from 'rxjs';
import { AppConfig, CONFIG_TOKEN } from './config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ CoursesService ]
})
export class AppComponent implements OnInit {
    courses$: Observable<Course[]>

    constructor(
        @Self() private coursesService: CoursesService,
        @Inject(CONFIG_TOKEN) private config: AppConfig
    ) {
        console.log(config);
    }

    ngOnInit() {
        this.courses$ = this.coursesService.loadCourses();
    }

    save(course: Course) {
        this.coursesService.saveCourse(course)
            .subscribe(
                () => alert('Course Saved')
            );
    }
}
