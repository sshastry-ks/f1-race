interface RaceDate {
    date: string;
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
    FirstPractice?: RaceDate;
    SecondPractice?: RaceDate;
    ThirdPractice?: RaceDate;
    Qualifying?: RaceDate;
}

export interface RacesListResponse {
    MRData: {
        RaceTable: {
            Races: Race[]
        },
        total: number;
    }
}

