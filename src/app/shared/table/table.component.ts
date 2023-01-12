import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ColDef } from './table.models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() public vm!: any;
  @Input() public displayedColumns!: string[];
  @Input() public columns!: ColDef[];
  @Input() public rowClickbale: boolean = false;

  @Output() pageSizeChangedOrMoved = new EventEmitter<PageEvent>();
  @Output() rowSelectionChanged = new EventEmitter<any>();

  handlePageEvent(pageEvent: PageEvent): void {
    this.pageSizeChangedOrMoved.next(pageEvent);
  }

  rowSelected(row: any) {
    this.rowSelectionChanged.emit(row);
  }
}
