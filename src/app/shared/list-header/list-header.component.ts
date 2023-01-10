import { Component, Inject } from '@angular/core';
import { ListHeaderDataFacade, LIST_HEADER_DATA_SERVICE } from 'src/app/models';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent {

  constructor(@Inject(LIST_HEADER_DATA_SERVICE) private listHeaderdataSevice: ListHeaderDataFacade) {}

  vm$ = this.listHeaderdataSevice.getViewModel$();

  movePage(direction: number) {
    this.listHeaderdataSevice.dispatchMovePageAction(direction);
  }

  updatePageSize(newPageSize: number) {
    this.listHeaderdataSevice.dispatchPageSizeChangedAction(newPageSize);
  }

}
