import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home',
  template: `
  <!-- <form [formGroup]="contactForm">
    <label for="name">Name: </label>
    <input type="text" formControlName="name" [class.alert]="name.dirty"/>
    <label for="name">Age: </label>
    <input type="number" formControlName="age" />
    <label for="name">Male: </label>
    <input type="checkbox" formControlName="male" />
    <button [disabled]="!contactForm.valid">Submit</button>
    
  </form>

  <input type="checkbox" [(ngModel)]="isSelected" /> {{ isSelected }}

  <p>Form Status: {{ contactForm.status }}</p>
  <p>Form Status: {{ contactForm.value | json }}</p>

  <button (click)="changeRepoStr()">Update home child</button> -->

  <!-- <app-home-child [formValue]="contactForm.value"></app-home-child> -->
  Home page
  `,
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  isSelected = true;

  users = [1, 2, 3, 4, 5, 6];
  name = new FormControl('');

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    male: new FormControl('', Validators.required),
  });

  updateName() {
    this.name.setValue('Nancy');
  }

  changeRepoStr() {
    const strRandom = Math.round(Math.random() * 100);
    // this.sharedService.updateStr('ABC' + strRandom);
    this.sharedService.updateFirstObj({
      index: Math.round(Math.random() * 100),
      name: strRandom.toString(),
    });
  }

  ngOnInit() {
    this.contactForm.patchValue({
      name: 'ABC',
      age: 10,
      male: true,
    });
  }
}
