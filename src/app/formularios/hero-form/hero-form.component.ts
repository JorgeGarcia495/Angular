import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../core/model/hero';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  @Input() heroForm: FormGroup;
  powers = [
    { value: 0, viewValue: 'Really smart' },
    { value: 1, viewValue: 'Super Flexible' },
    { value: 2, viewValue: 'Super Hot' },
    { value: 3, viewValue: 'Weather Change' }
  ];

  model = new Hero(18, 'Dr IQ', this.powers[0].viewValue, 'Chuck Overstreet');

  submitted = false;

  constructor() { }

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      'name': new FormControl(this.model.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'alterEgo': new FormControl(this.model.alterEgo),
      'power': new FormControl(this.model.power, Validators.required)
    });
  }

  get name() { return this.heroForm.get('name'); }

  get power() { return this.heroForm.get('power'); }

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

}
