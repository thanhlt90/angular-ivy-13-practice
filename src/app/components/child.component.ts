import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-home-child',
  template: `
  <div>
    Home child <b>{{ repoStr }}</b>
    <p>{{ formValue | json }}</p>
    <div>
      <input type="text" [(ngModel)]="formValue.name" >
    </div>
  </div>
  `,
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeChildComponent implements OnInit, OnDestroy {
  @Input() formValue: { name: string; age: number };
  // repoStr$: Observable<string>;
  repoStr = 'TEST';
  destroy$: Subject<void> = new Subject<void>();

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService
      .getFirstObj$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((firstObj) => {
        console.log(firstObj);
        this.repoStr = firstObj.name;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
