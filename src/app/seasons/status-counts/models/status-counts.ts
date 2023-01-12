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
