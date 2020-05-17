import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ CoursesService ]
})
export class AppComponent implements OnInit {
    courses$: Observable<Course[]>

    constructor(private coursesService: CoursesService) {
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
