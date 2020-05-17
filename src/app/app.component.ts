import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    courses;

    constructor(
        private http: HttpClient
    ) {
    }

    ngOnInit() {
        const params = new HttpParams()
            .set('page', '1')
            .set('pageSize', '10');

        this.http.get('api/courses', { params })
            .subscribe(
                courses => this.courses = courses['payload']
            );
    }
}
