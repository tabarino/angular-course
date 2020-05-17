import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Course } from './model/course';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    courses$: Observable<Course[]>

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        const params = new HttpParams()
            .set('page', '1')
            .set('pageSize', '10');

        this.courses$ = this.http.get<Course[]>('api/courses', { params })
            .pipe(
                map(courses => courses['payload'])
            );
    }
}
