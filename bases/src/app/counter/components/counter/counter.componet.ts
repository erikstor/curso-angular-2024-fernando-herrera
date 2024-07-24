

import { Component } from "@angular/core";

@Component({
  selector: "counter",
  templateUrl: '../../counter.component.html'
})
export class CounterComponent {

  counter: number = 10


  increaseBy() {
    this.counter++
  }

  decreaseBy() {
    this.counter--
  }

  reset() {
    this.counter = 10
  }

}
