import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasicsPageComponent} from "./pages/basics-page/basics-page.component";
import {NumbersPageComponent} from "./pages/numbers-page/numbers-page.component";
import {UncommonsPageComponent} from "./pages/uncommons-page/uncommons-page.component";
import {OrderComponent} from "./pages/order/order.component";

const routes: Routes = [
  {
    path: '',
    component: BasicsPageComponent
  },
  {
    path: 'numbers',
    component: NumbersPageComponent
  },
  {
    path: 'uncommons',
    component: UncommonsPageComponent
  },
  {
    path: 'custom',
    component: OrderComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
