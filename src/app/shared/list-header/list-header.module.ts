import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import { ListHeaderComponent } from "./list-header.component";

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatButtonToggleModule
    ],
    declarations: [ListHeaderComponent],
    exports: [ListHeaderComponent]
})
export class ListHeaderModule {}