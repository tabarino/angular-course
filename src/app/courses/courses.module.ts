import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { FilterByCategoryPipe } from './shared/filter-by-category.pipe';

@NgModule({
    declarations: [
        CourseCardComponent,
        CourseImageComponent,
        HighlightedDirective,
        NgxUnlessDirective,
        FilterByCategoryPipe
    ],
    exports: [
        CourseCardComponent,
        CourseImageComponent,
        FilterByCategoryPipe
    ],
    imports: [
        CommonModule
    ]
})
export class CoursesModule {
}