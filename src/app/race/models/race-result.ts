import { Driver } from "@app/drivers/models";
import { Race } from "./race";

export interface RaceResult {
    status: string;
    grid: string;
    laps: string;
    points: string;
    position: number;
    Driver: Driver;
    Time: {
        time: string;
    };
}

export type RaceWithResults = Race & {
    Results: RaceResult[]
}

export interface RacesResultsListResponse {
    MRData: {
        RaceTable: {
            Races: RaceWithResults[]
        },
        total: number;
    }
}