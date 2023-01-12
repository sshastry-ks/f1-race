import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RaceListSelectors, RaceListActions } from './store';
import { combineLatest, map } from 'rxjs'
import { Race } from '@race/models';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { ColDef, TableViewModel } from '@app/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent {
  constructor(private store: Store, private router: Router, private activatedRoute: ActivatedRoute) { }

  columns: ColDef[] = [
    {
      columnDef: 'round',
      header: 'Round',
      cell: (item: Race) => `${item.round}`,
    },
    {
      columnDef: 'raceName',
      header: 'Race Name',
      cell: (item: Race) => `${item.raceName}`,
    },
    {
      columnDef: 'date',
      header: 'Date',
      cell: (item: Race) => `${item.date}`,
    },
    {
      columnDef: 'location',
      header: 'Location',
      cell: (item: Race) => `${item.time}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (item: Race) => `${item.Circuit.Location.locality}, ${item.Circuit.Location.country}`,
    },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);

  vm$: Observable<TableViewModel<Race>> = combineLatest([
    this.store.select(RaceListSelectors.selectAllRaces),
    this.store.select(RaceListSelectors.selectTotalRaces),
    this.store.select(RaceListSelectors.selectCurrentPageSize),
    this.store.select(RaceListSelectors.selectCurrentPage),
    this.store.select(RaceListSelectors.selectPageSizeOptions),
    this.store.select(RaceListSelectors.selectIsLoadingRaceList),
    ]).pipe(
    map(([items, totalItems, currentPageSize, currentPage, pageSizeOptions, isLoading]) => {
        return {
        items,
        totalItems,
        currentPageSize,
        currentPage,
        pageSizeOptions,
        isLoading
        }
  }));
  

  ngOnInit() {
    this.store.dispatch(RaceListActions.enterRaceList());
  }

  handlePageSizeChangedOrMoved(pageOptions: PageEvent) {
    this.store.dispatch(RaceListActions.pageSizeChangedOrPageMoved({pageOptions}))
  }

  handleRowSelection(row: Race) {
    const {round} = row;

    this.router.navigate(['../', 'races', round], {relativeTo: this.activatedRoute});
  }
}
