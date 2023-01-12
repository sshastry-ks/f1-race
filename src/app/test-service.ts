import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class Test {
    readonly drivers = 'http://ergast.com/api/f1/{{year}}/drivers.json';
    readonly races = 'http://ergast.com/api/f1/{{year}}/status.json';

    constructor(private httpClient: HttpClient) {}

    public getApi(): Observable<any> {
        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json')

        //return this.httpClient.get(this.drivers.replace('{{year}}', '2018'), {headers});

        return this.httpClient.get(this.races.replace('{{year}}', '2019'), {headers});
    }


}