import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StatusCountsResponse } from "@seasons/status-counts/models";

@Injectable()
export class StatusCountsService {

    private readonly STATUS_COUNTS_URL = '/api/f1/{{year}}/status.json';

    constructor(private httpClient: HttpClient) {}

    public getStatusCounts(season: string) {
        return this.httpClient.get<StatusCountsResponse>(
            this.STATUS_COUNTS_URL.replace('{{year}}', season)
        );
    }
}