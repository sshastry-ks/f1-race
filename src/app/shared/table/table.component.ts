import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ColDef, TableViewModel } from './table.models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> {
  /**
   * Table's view model to pull data
   */
  @Input() public vm!: TableViewModel<T>;

  /**
   * Displayed columns
   */
  @Input() public displayedColumns!: string[];

  /**
   * Table's column definition
   */
  @Input() public columns!: ColDef[];

  /**
   * Boolean to check if table's row are clickable
   * (Table adds additional hover styling to rows if true)
   */
  @Input() public rowClickbable: boolean = false;

  /**
   * Output to broadcase combined pagesize changed or page moved event
   */
  @Output() pageSizeChangedOrMoved = new EventEmitter<PageEvent>();

  /**
   * Output to broadcast row click event
   */
  @Output() rowSelectionChanged = new EventEmitter<any>();

  /**
   * Pagesize change or page moved event handler
   * @param pageEvent page current configuration
   */
  handlePageEvent(pageEvent: PageEvent): void {
    this.pageSizeChangedOrMoved.next(pageEvent);
  }

  /**
   * table row selected event handler
   * @param row selected table row
   */
  rowSelected(row: T) {
    this.rowSelectionChanged.emit(row);
  }
}
