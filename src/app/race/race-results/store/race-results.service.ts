import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RacesListResponse, RacesResultsListResponse } from 'src/app/models';

@Injectable()
export class RaceResultService {

    private readonly Races_URL = 'http://ergast.com/api/f1/{{year}}/{{round}}/results.json';

    constructor(private httpClient: HttpClient) {}

    public getRaceResultsList(season: string, round: string, offset: number, limit: number) {
        const params = new HttpParams().set('limit', limit).set('offset', offset);
        return this.httpClient.get<RacesResultsListResponse>(
            this.Races_URL.replace('{{year}}', season).replace('{{round}}', round)
            , {params}
        );
    }
}
