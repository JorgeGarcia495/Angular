import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Address, Hero2, states } from '../../core/model/data-model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnChanges {
  @Input() hero: Hero2;
  // name = new FormControl(); // Se asocia a un <input> llamado name
  heroForm: FormGroup;
  states = states;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      address: this.fb.group(new Address()), // <-- a FormGroup with a new address
      power: '',
      sidekick: ''
    });
  }

  rebuildForm() {
    this.heroForm.reset({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
  }

}
