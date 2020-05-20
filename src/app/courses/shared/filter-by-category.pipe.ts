import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../model/course';

@Pipe({
    name: 'filterByCategory',
    pure: false
})
export class FilterByCategoryPipe implements PipeTransform {
    // By default on Angular all pipes are pure and it is just called when the user loads the page
    // When the pure is set to false, the transform function is called everytime a change is done in the object
    // Only set a pipe as impure if you really need it, because it can cause performance issues in your system
    transform(courses: Course[], category: string) {
        return courses.filter(course => course.category === category);
    }
}
