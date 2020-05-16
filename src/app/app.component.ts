import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
    courses = COURSES;

    @ViewChild(HighlightedDirective)
    highlighted: HighlightedDirective;

    @ViewChild(CourseCardComponent, { read: HighlightedDirective })
    highlightedDirective: HighlightedDirective;

    @ViewChildren(CourseCardComponent, { read: HighlightedDirective })
    cards: QueryList<CourseCardComponent>;

    @ViewChildren(CourseCardComponent, { read: ElementRef })
    cardsElement: QueryList<ElementRef>;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        console.log(this.highlighted);
        console.log(this.highlightedDirective);
    }

    onCourseSelected(course: Course) {
        console.log('courses: ', this.courses);
    }

    onToggle(isHighlighted: boolean) {
        console.log(isHighlighted);
    }
}
