export interface ColDef {
    /**
     * column internal name
     */
    columnDef: string;

    /**
     * Column header display name
     */
    header: string;

    /**
     * Function that gets called to calculate value for a cell
     * @param item an entiity within data source
     * @returns a string that will be displayed in the cell
     */
    cell: (item: any) => string;

    /**
     * Cell title to be displayed using css
     */
    cellTitle?: string;
}

export interface TableViewModel<T> {
    /**
     * Collection of entities that will be displayed as table rows
     */
    items: Array<T>;

    /**
     * TotalItems in the collection
     */
    totalItems: number;

    /**
     * Current selected Page size option
     */
    currentPageSize: number;

    /**
     * Current page index
     */
    currentPage: number;

    /**
     * Avsilable page size options
     */
    pageSizeOptions: number[];

    /**
     * Boolean to check if the entity collection is loading
     */
    isLoading: boolean;
}
