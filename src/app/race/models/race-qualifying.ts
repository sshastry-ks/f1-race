import { Driver } from "@app/drivers/models";
import { Race } from "./race";

export interface RaceQualifying {
    position: string;
    number: string;
    Q1: string;
    Q2: string;
    Q3: string;
    Driver: Driver;
}

export type RaceWithQualifyingList = Race & {
    QualifyingResults: RaceQualifying[]
}

export interface RacesQualifyingListResponse {
    MRData: {
        RaceTable: {
            Races: RaceWithQualifyingList[]
        },
        total: number;
    }
}
