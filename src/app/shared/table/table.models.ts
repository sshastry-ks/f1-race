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
