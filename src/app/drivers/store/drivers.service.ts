import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DriverListResponse } from 'src/app/models';

@Injectable()
export class DriverService {

    private readonly DRIVERS_URL = 'http://ergast.com/api/f1/{{year}}/drivers.json';

    constructor(private httpClient: HttpClient) {}

    public getDriversList(season: string, offset: number, limit: number) {
        const params = new HttpParams().set('limit', limit).set('offset', offset);
        return this.httpClient.get<DriverListResponse>(this.DRIVERS_URL.replace('{{year}}', season), {params});
    }

}
