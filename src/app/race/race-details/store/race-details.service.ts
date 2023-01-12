import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RacesListResponse, StatusCountsResponse } from 'src/app/models';

@Injectable()
export class RaceDetailsService {

    private readonly Races_URL = 'http://ergast.com/api/f1/{{year}}/{{raceId}}.json';

    constructor(private httpClient: HttpClient) {}

    public getRacesDetails(season: string, raceId: string) {
        return this.httpClient.get<RacesListResponse>(
            this.Races_URL.replace('{{year}}', season).replace('{{raceId}}', raceId)
        );
    }
}