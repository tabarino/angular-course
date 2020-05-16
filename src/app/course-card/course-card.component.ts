import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit {
    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output()
    courseSelected = new EventEmitter<Course>();

    @ContentChild(CourseImageComponent)
    image: CourseImageComponent;

    @ContentChild(CourseImageComponent, { read: ElementRef })
    imageElement: ElementRef;

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        console.log('Image: ', this.image);
        console.log('Image Element: ', this.imageElement);
    }

    onCourseViewed() {
        this.courseSelected.emit(this.course);
    }
}
