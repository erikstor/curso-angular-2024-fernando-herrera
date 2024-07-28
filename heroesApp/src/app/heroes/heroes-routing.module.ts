import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutPageComponent} from "./pages/layout-page/layout-page.component";
import {ListPageComponent} from "./pages/list-page/list-page.component";
import {NewPageComponent} from "./pages/new-page/new-page.component";
import {SearchPageComponent} from "./pages/search-page/search-page.component";
import {HeroePageComponent} from "./pages/heroe-page/heroe-page.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'list',
        component: ListPageComponent
      },
      {
        path: 'new-heroe',
        component: NewPageComponent
      },
      {
        path: "search",
        component: SearchPageComponent
      },
      {
        path: "edit/:id",
        component: NewPageComponent
      },
      {
        //OJO CON ESTAS POSICIONES SI SE PONE DE PRIMERA PUEDE CAUSAR UN PROBLEMA YA QUE ES UN COMODIN EL PARAM
        path: ":id",
        component: HeroePageComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {
}
