import { NgModule } from '@angular/core';
// import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {FieldsetModule} from "primeng/fieldset";
import {PanelModule} from "primeng/panel";
import {DividerModule} from "primeng/divider";
import { ToolbarModule } from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton'
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    // MenuModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    DividerModule,
    ToolbarModule,
    SplitButtonModule,
    InputTextModule,
    TableModule
  ]
})
export class PrimeNgModule { }
