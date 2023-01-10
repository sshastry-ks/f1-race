import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export enum RequestState {
    INIT='init',
    LOADING='loading',
    RESOLVED='resolved',
    ERROR='error'
}

export interface Driver {
    driverId: string;
    givenName: string;
    familyName: string;
    dob: string;
    permanentNumber: string;
    nationality: string;
}

export interface DriversListResponse {
    MRData: {
        DriverTable: {
            Drivers: Driver[]
        },
        total: number;
    }
}

export interface RacesListResponse {
    MRData: {
        RaceTable: {
            Races: Race[]
        },
        total: number;
    }
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

export interface RaceResult {
    status: string;
    grid: string;
    laps: string;
    points: string;
    position: number;
    driver: Driver;
}

export interface RaceQualifying {
    position: string;
    number: string;
    q1: string;
    q2: string;
    q3: string;
    driver: Driver;
}

export interface DriverStanding {
    position: string;
    driver: Driver;
    points: string;
    wins: string;
}

export interface Race {
    round: string;
    raceName: string;
    season: string;
    time: string;

}

export const LIST_HEADER_DATA_SERVICE = new InjectionToken<string>('ListHeaderDataService')

export interface ListHeaderDataFacade {
    dispatchMovePageAction: (direction: number) => void;
    dispatchPageSizeChangedAction: (newPageSize: number) => void;
    getViewModel$: () => Observable<{
        totalPages: number;
        currentPage: number;
        currentPageSize: number;
        pageSizeOptions: number[]
    }>;
}