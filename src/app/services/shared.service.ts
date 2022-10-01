import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SharedService {
  nestedObject = {
    obj1: {
      name: 'abc',
      age: '10',
    },
    obj2: {
      name: 'xyz',
      age: '19',
      gender: 'male',
      position: {
        id: 1,
        name: 'student',
      },
    },
  };

  private repository$: BehaviorSubject<any> = new BehaviorSubject({} as any);

  // {
  //   firstObj: {
  //     index: 1,
  //     name: 'abv',
  //   },
  //   secondObj: {
  //     index: 2,
  //     desc: 'abc',
  //   },
  // }

  // firstObj: {
  //   index: number;
  //   name: string;
  // };
  // secondObj: {
  //   index: number;
  //   desc: string;
  // };

  private get repository(): ExpObj {
    return this.repository$.value;
  }

  private set repository(value: ExpObj) {
    this.repository$.next(value);
  }

  // getString$(): Observable<ExpObj> {
  //   return this.repository$.pipe(map((value) => value));
  // }

  // updateStr(str: string) {
  //   this.repository = str;
  // }

  updateFirstObj(obj: { index: number; name: string }) {
    this.repository = { ...this.repository, ...{ firstObj: obj } };
    console.log(this.repository);
  }

  updateSecondObj(obj: { index: number; desc: string }) {
    this.repository = { ...this.repository, ...{ secondObj: obj } };
    console.log(this.repository);
  }

  getFirstObj$(): Observable<{ index: number; name: string }> {
    return this.repository$.pipe(map(({ firstObj }) => firstObj));
  }

  getSecondObj$(): Observable<{ index: number; desc: string }> {
    return this.repository$.pipe(map(({ secondObj }) => secondObj));
  }
}

interface ExpObj {
  firstObj: {
    index: number;
    name: string;
  };
  secondObj: {
    index: number;
    desc: string;
  };
}
