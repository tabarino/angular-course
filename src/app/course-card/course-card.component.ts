import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Course } from '../model/course';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
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
