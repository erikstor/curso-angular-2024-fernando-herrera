import {Component} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-commons-page',
  templateUrl: './uncommons-page.component.html',
  styleUrl: './uncommons-page.component.css'
})
export class UncommonsPageComponent {

  public name: string = 'erik'
  public gender: 'hombre' | 'mujer' = 'hombre'
  public invitationMap = {
    'hombre': 'invitarlo',
    'mujer': 'invitarla'
  }

  //i18nPlural
  public clients: string[] = ['a', 'b', 'c']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  }

  //KeyValue Pipe
  public person = {
    name: 'Erik',
    age: 26,
    address: 'Cali, Colombia'
  }

  //Async pipe
  public observableTimer = interval(2000)


  public promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos una promesa')
    }, 3500)
  })

  changePerson() {
    if (this.gender === 'mujer') {
      this.name = 'erik'
      this.gender = 'hombre'
    } else {
      this.name = 'melisa'
      this.gender = 'mujer'
    }
  }

  deleteClient() {
    this.clients.shift()
  }

}
