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
