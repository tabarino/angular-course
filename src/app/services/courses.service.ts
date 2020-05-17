import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    constructor(private http: HttpClient) {
    }

    loadCourses(): Observable<Course[]> {
        const params = new HttpParams()
            .set('page', '1')
            .set('pageSize', '10');

        return this.http.get<Course[]>('api/courses', { params })
            .pipe(
                map(courses => courses['payload'])
            );
    }
}
