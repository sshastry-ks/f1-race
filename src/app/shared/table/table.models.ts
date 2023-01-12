export interface ColDef {
    columnDef: string;
    header: string;
    cell: (item: any) => string;
    cellTitle?: string;
}

export interface TableViewModel<T> {
    items: Array<T>;
    totalItems: number;
    currentPageSize: number;
    currentPage: number;
    pageSizeOptions: number[];
    isLoading: boolean;
}
