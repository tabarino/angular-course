import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Course } from '../model/course';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
    // encapsulation: ViewEncapsulation.Emulated -> is the Default for Angular
    // If you want to disable it, you can put as
    // encapsulation: ViewEncapsulation.None
    // It's possible also to use -> encapsulation: ViewEncapsulation.ShadowDom
    // ShadowDom is similar to Emulated, but it has also its particularities
    // The best option is always use ViewEncapsulation.Emulated
})
export class CourseCardComponent implements OnInit {
    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Input()
    noImageTpl: TemplateRef<any>;

    @Output()
    courseSelected = new EventEmitter<Course>();

    constructor() {
    }

    ngOnInit(): void {
    }

    onCourseViewed() {
        this.courseSelected.emit(this.course);
    }
}
