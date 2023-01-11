import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RacesQualifyingListResponse } from 'src/app/models';

@Injectable()
export class RaceQualifyingListService {

    private readonly RACE_QUALIFYING_LIST_URL = 'http://ergast.com/api/f1/{{year}}/{{round}}/qualifying.json';

    constructor(private httpClient: HttpClient) {}

    public getRaceQualifyingListList(season: string, round: string, offset: number, limit: number) {
        const params = new HttpParams().set('limit', limit).set('offset', offset);
        return this.httpClient.get<RacesQualifyingListResponse>(
            this.RACE_QUALIFYING_LIST_URL.replace('{{year}}', season).replace('{{round}}', round)
            , {params}
        );
    }
}
