import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RacesResultsListResponse } from '@race/models';

@Injectable()
export class RaceResultsService {

    private readonly RACE_RESULTS_URL = '/api/f1/{{year}}/{{round}}/results.json';

    constructor(private httpClient: HttpClient) {}

    public getRaceResultsList(season: string, round: string, offset: number, limit: number) {
        const params = new HttpParams().set('limit', limit).set('offset', offset);
        return this.httpClient.get<RacesResultsListResponse>(
            this.RACE_RESULTS_URL.replace('{{year}}', season).replace('{{round}}', round)
            , {params}
        );
    }
}
