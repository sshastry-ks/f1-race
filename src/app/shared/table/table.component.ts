import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable, of, tap } from 'rxjs';
import { ColDef, TableDataConnectorServiceFacade, TABLE_DATA_CONNECTOR_SERVICE } from 'src/app/models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  @Input() public vm!: any;
  @Input() public displayedColumns!: string[];
  @Input() public columns!: ColDef[];

  @Output() pizeSizeChanged = new EventEmitter<number>();
  @Output() pageMoved = new EventEmitter<number>();
  @Output() rowSelectionChanged = new EventEmitter<any>();

  constructor(
    //@Inject(TABLE_DATA_CONNECTOR_SERVICE)private dataConnectorService: TableDataConnectorServiceFacade
  ) {}

  ngOnInit(): void {
    //this.dataConnectorService.dispatchLoadDataAction();
  }

  handlePageEvent(pageEvent: PageEvent): void {
    const { pageIndex, previousPageIndex, pageSize} = pageEvent;
    if(previousPageIndex !== undefined) {
      const pageIndexDifference = pageIndex - previousPageIndex;

      if(pageIndexDifference === 0) {
        this.pizeSizeChanged.emit(pageSize);
        return;
      }

     this.pageMoved.next(pageIndexDifference);
    }
  }

  rowSelected(row: any) {
    this.rowSelectionChanged.emit(row);
  }
}
