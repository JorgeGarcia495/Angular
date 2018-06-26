import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';

import { Hero2 } from '../../../core/model/data-model';
import { HeroService } from '../../../core/services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Observable<Hero2[]>;
  isLoading = false;
  selectedHero: Hero2;

  constructor(private heroService: HeroService) { }

  ngOnInit() { this.getHeroes(); }

  getHeroes() {
    this.isLoading = true;
    this.heroes = this.heroService.getHeroes()
      // TODO: error handling
      .pipe(finalize(() => this.isLoading = false));
    this.selectedHero = undefined;
  }

  select(hero: Hero2) { this.selectedHero = hero; }
}
