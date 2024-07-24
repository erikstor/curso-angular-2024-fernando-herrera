import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.componet";




@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {

}
