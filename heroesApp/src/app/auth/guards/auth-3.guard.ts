import {CanMatchFn} from '@angular/router';

export const auth3Guard: CanMatchFn = (route, segments) => {
  return false;
};
