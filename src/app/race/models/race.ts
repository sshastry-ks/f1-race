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

export interface RacesListResponse {
    MRData: {
        RaceTable: {
            Races: Race[]
        },
        total: number;
    }
}

