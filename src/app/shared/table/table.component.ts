import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ColDef } from 'src/app/models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() public vm!: any;
  @Input() public displayedColumns!: string[];
  @Input() public columns!: ColDef[];

  @Output() pageSizeChangedOrMoved = new EventEmitter<PageEvent>();
  @Output() rowSelectionChanged = new EventEmitter<any>();

  handlePageEvent(pageEvent: PageEvent): void {
    this.pageSizeChangedOrMoved.next(pageEvent);
  }

  rowSelected(row: any) {
    this.rowSelectionChanged.emit(row);
  }
}
