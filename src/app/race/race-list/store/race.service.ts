import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RacesListResponse } from '@race/models';

@Injectable()
export class RaceService {

    private readonly RACE_LIST_URL = 'http://ergast.com/api/f1/{{year}}.json';

    constructor(private httpClient: HttpClient) {}

    public getRacesList(season: string, offset: number, limit: number) {
        const params = new HttpParams().set('limit', limit).set('offset', offset);
        return this.httpClient.get<RacesListResponse>(
            this.RACE_LIST_URL.replace('{{year}}', season), {params}
        );
    }

}
