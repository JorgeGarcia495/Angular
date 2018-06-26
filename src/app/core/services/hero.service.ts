import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';

import { Hero2, heroes } from '../model/data-model';

@Injectable()
export class HeroService {

  delayMs = 500;

  // Fake server get; assume nothing can go wrong
  getHeroes(): Observable<Hero2[]> {
    return of(heroes).pipe(delay(this.delayMs)); // simulate latency with delay
  }

  // Fake server update; assume nothing can go wrong
  updateHero(hero: Hero2): Observable<Hero2> {
    const oldHero = heroes.find(h => h.id === hero.id);
    const newHero = Object.assign(oldHero, hero); // Demo: mutate cached hero
    return of(newHero).pipe(delay(this.delayMs)); // simulate latency with delay
  }
}