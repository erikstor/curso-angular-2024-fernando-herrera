import { Component } from '@angular/core';

interface MenuItem {

  title: string
  route: string

}


@Component({
  selector: 'shared-side-bar',
  templateUrl: './side-bar.component.html',
  styles: ``
})
export class SideBarComponent {

  public reactiveMenu: MenuItem[] = [
    {
      title: 'Basicos',
      route: './reactive/basic'
    },
    {
      title: 'Dinamicos',
      route: './reactive/dynamic'
    },
    {
      title: 'Switches',
      route: './reactive/switches'
    },
  ]

  public authMenu: MenuItem[] = [
    {
      title: 'Registro',
      route: './auth/'
    },
  ]


}
