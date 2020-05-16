import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
    courses = COURSES;

    @ViewChildren(CourseCardComponent)
    cards: QueryList<CourseCardComponent>;

    @ViewChildren(CourseCardComponent, { read: ElementRef })
    cardsElement: QueryList<ElementRef>;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        // console.log('First: ', this.cards.first);

        // console.log('Last: ', this.cards.last);
        //
        // console.log('Cards Element: ', this.cardsElement);
        //
        // this.cards.changes.subscribe(
        //     cards => console.log(cards)
        // );
    }

    onCoursesEdited() {
        this.courses.push(
            {
                id: 11,
                description: "Angular Core Deep Dive - Test",
                iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
                longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
                category: 'INTERMEDIATE',
                lessonsCount: 10
            }
        )
    }

    onCourseSelected(course: Course) {
        console.log('courses: ', this.courses);
    }
}
