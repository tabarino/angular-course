import {
    AfterContentChecked,
    Attribute,
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input, OnChanges,
    OnDestroy,
    OnInit,
    Output, SimpleChanges
} from '@angular/core';
import { Course } from '../model/course';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges, AfterContentChecked {
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

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges: ', changes);
    }

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked');

        this.course.description = 'ngAfterContentChecked';
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
