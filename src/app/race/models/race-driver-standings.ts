import { Driver } from "@drivers/models";

export interface RaceDriverStandingsResponse {
    MRData: {
        StandingsTable: {
            StandingsLists: {
                DriverStandings: DriverStanding[]
            }[]
        },
        total: number
    }
}

export interface DriverStanding {
    position: string;
    Driver: Driver;
    points: string;
    wins: string;
}