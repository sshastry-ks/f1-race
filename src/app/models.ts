export interface Driver {
    id: string;
    givenName: string;
    familyName: string;
    dob: string;
    permanentNumber: string;
    nationality: string;
}

export interface RaceResult {
    status: string;
    grid: string;
    laps: string;
    points: string;
    position: number;
    driver: Driver;
}

export interface Qualifying {
    position: number;
    number: string;
    q1: string;
    q2: string;
    q3: string;
    driver: Driver;
}

export interface DriverStanding {
    position: number;
    driver: Driver;
    points: string;
    wins: string;
}

export interface Race {
    round: string;
    raceName: string;
    season: string;
    time: string;
    results: RaceResult[];
    qualyfyings: Qualifying[];
    driverStandings: DriverStanding[];
}