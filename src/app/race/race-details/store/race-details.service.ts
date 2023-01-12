import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RacesListResponse } from '@race/models';

@Injectable()
export class RaceDetailsService {

    private readonly RACE_DETAILS_URL = 'http://ergast.com/api/f1/{{year}}/{{raceId}}.json';

    constructor(private httpClient: HttpClient) {}

    public getRacesDetails(season: string, raceId: string) {
        return this.httpClient.get<RacesListResponse>(
            this.RACE_DETAILS_URL.replace('{{year}}', season).replace('{{raceId}}', raceId)
        );
    }
}