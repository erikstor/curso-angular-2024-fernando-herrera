import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] | undefined;

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de angular', icon: 'pi pi-desktop', items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/products/'
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink: '/products/numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: '/products/uncommons'
          },
        ]

      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom pipes',
            icon: 'pi pi-cog',
            routerLink: '/products/custom'
          }
        ]
      }
    ];
  }
}
