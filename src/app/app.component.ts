import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, OnInit } from '@angular/core';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';
import { Observable } from 'rxjs';
import { AppConfig, CONFIG_TOKEN } from './config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, DoCheck {
    // courses$: Observable<Course[]>
    courses: Course[];
    loaded = false;

    constructor(
        private coursesService: CoursesService,
        @Inject(CONFIG_TOKEN) private config: AppConfig,
        private cdr: ChangeDetectorRef
    ) {
        console.log(config);
    }

    ngOnInit() {
        // this.courses$ = this.coursesService.loadCourses();

        this.coursesService.loadCourses()
            .subscribe(courses => {
                this.courses = courses;
                this.loaded = true;
            })
    }

    ngDoCheck(): void {
        if (this.loaded) {
            this.cdr.markForCheck();

            console.log('called markForCheck');

            this.loaded = undefined;
        }
    }

    save(course: Course) {
        this.coursesService.saveCourse(course)
            .subscribe(
                () => alert('Course Saved')
            );
    }

    onEditCourse() {

    }
}
