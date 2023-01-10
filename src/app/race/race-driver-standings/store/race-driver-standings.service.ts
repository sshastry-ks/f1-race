import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RaceDriverStandingsResponse } from 'src/app/models';

@Injectable()
export class RaceDriverStandingsListService {

    private readonly Races_URL = 'http://ergast.com/api/f1/{{year}}/{{round}}/driverStandings.json';

    constructor(private httpClient: HttpClient) {}

    public getRaceDriverStandingsListList(season: string, round: string, offset: number, limit: number) {
        const params = new HttpParams().set('limit', limit).set('offset', offset);
        return this.httpClient.get<RaceDriverStandingsResponse>(
            this.Races_URL.replace('{{year}}', season).replace('{{round}}', round)
            , {params}
        );
    }
}
