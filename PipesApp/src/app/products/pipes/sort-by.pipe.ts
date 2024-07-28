import {Pipe, PipeTransform} from '@angular/core';
import {HeroInterface} from "../interfaces/hero.interface";

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: HeroInterface[], sortBy?: keyof HeroInterface | ''): HeroInterface[] {

    switch (sortBy) {

      case 'name':
        return heroes.sort((a, b) => {
          return a.name > b.name ? 1 : -1
        })

      case 'canFly':
        return heroes.sort((a, b) => {
          return a.canFly > b.canFly ? 1 : -1
        })

      case 'color':
        return heroes.sort((a, b) => {
          return a.color > b.color ? 1 : -1
        })

      default:
        return heroes
    }

  }

}
