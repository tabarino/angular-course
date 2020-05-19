import {
    Attribute,
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';
import { Course } from '../model/course';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit, OnDestroy {
    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();

    constructor(@Attribute('type') private type: string) {
        // this.course is empty at this point
    }

    ngOnInit(): void {
        // There is data on this.course at this point
        console.log('ngOnInit');
    }

    onSaveClicked(description: string) {
        this.courseEmitter.emit({
            ...this.course,
            description
        });
    }

    onTitleChanged(newTitle: string) {
        this.course.description = newTitle;
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy');
    }
}
