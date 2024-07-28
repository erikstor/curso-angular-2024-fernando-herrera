import {Pipe, PipeTransform} from '@angular/core';
import {HeroInterface} from "../interfaces/hero.interface";

@Pipe({
  name: 'heroImgUrl'
})
export class HeroImgUrlPipe implements PipeTransform {

  transform(hero: HeroInterface): string {

    if (!hero.id && !hero.alt_img) {
      return 'img/no-image.png'
    }

    if (hero.alt_img) return hero.alt_img

    return `img/heroes/${hero.id}.jpg`;
  }

}
