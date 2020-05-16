import {
    AfterContentInit,
    Component,
    ContentChild, ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output, QueryList, TemplateRef
} from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterContentInit {
    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Input()
    noImageTpl: TemplateRef<any>;

    @Output()
    courseSelected = new EventEmitter<Course>();

    @ContentChild(CourseImageComponent)
    image: CourseImageComponent;

    @ContentChild(CourseImageComponent, { read: ElementRef })
    imageElement: ElementRef;

    @ContentChildren(CourseImageComponent)
    images: QueryList<CourseImageComponent>;

    @ContentChildren(CourseImageComponent, { read: ElementRef })
    imagesElement: QueryList<ElementRef>;

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        console.log('Image: ', this.image);
        console.log('Image Element: ', this.imageElement);

        console.log('Images: ', this.images);
        console.log('Images Element: ', this.imagesElement);
    }

    onCourseViewed() {
        this.courseSelected.emit(this.course);
    }
}
