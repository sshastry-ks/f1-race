import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RaceSelectors from './store/race.selectors';
import * as RaceActions from './store/race.actions';
import { combineLatest, map } from 'rxjs'
import { Race } from 'src/app/models';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent {
  constructor(private store: Store, private router: Router, private activatedRoute: ActivatedRoute) { }

  columns = [
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

  vm$ = combineLatest([
    this.store.select(RaceSelectors.selectAllRaces),
    this.store.select(RaceSelectors.selectTotalRaces),
    this.store.select(RaceSelectors.selectCurrentPageSize),
    this.store.select(RaceSelectors.selectCurrnetPage),
    this.store.select(RaceSelectors.selectPageSizeOptions),
    this.store.select(RaceSelectors.SelectIsLoadingRaceList),
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
    this.store.dispatch(RaceActions.enterRaceList());
  }

  handlePageSizeChangedOrMoved(pageOptions: PageEvent) {
    this.store.dispatch(RaceActions.pageSizeChangedOrPageMoved({pageOptions}))
  }

  handleRowSelection(row: Race) {
    const {round} = row;

    this.router.navigate(['../', 'races', round], {relativeTo: this.activatedRoute});
  }
}
