export enum RequestState {
    INIT='init',
    LOADING='loading',
    RESOLVED='resolved',
    ERROR='error'
}

export interface Driver {
    code: string;
    driverId: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    permanentNumber: string;
    nationality: string;
}

export interface DriverListResponse {
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
    Driver: Driver;
    Time: {
        time: string;
    };
}

export interface RaceQualifying {
    position: string;
    number: string;
    Q1: string;
    Q2: string;
    Q3: string;
    Driver: Driver;
}

export interface DriverStanding {
    position: string;
    Driver: Driver;
    points: string;
    wins: string;
}

export interface Race {
    round: string;
    raceName: string;
    season: string;
    time: string;
    Circuit: {
        Location: {
            country: string;
            locality: string;
        }
    };
    date: string;

}

export interface ColDef {
    columnDef: string;
    header: string;
    cell: (item: any) => string;
    cellTitle?: string;
}

export interface TableViewModel {
    items: Array<any>,
    totalItems: number,
    currentPageSize: number;
    currentPage: number;
    pageSizeOptions: number[];
    isLoading: boolean;
}

export interface CarStatusCounts {
    finished: number;
    accident: number;
    oneLap: number; 
}

export interface StatusCount {
    statusId: string;
    status: string;
    count: string;
}

export interface StatusCountsResponse {
    MRData: {
        StatusTable: {
            Status: StatusCount[]
        }
    }
}