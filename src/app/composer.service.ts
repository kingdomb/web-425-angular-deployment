//=========================================
// Title: composer.service.ts
// Author: Professor Krasso
// Date: 10/7/20
// Modified by: King Major
// Description: Week 4 enterprise-composer-project
//=========================================

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface'
import { Observable } from 'rxjs'
import { of } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ComposerService {
  composers: Array<IComposer>

    constructor(){
      this.composers= [
        {
          composerId: 100, fullName: "Roxanna Panufnik", genre: "Contemporary Composer"
        },
        {
          composerId: 101, fullName: "Thea Musgrave", genre: "Contemporary Composer"
        },
        {
          composerId: 102, fullName: "Kaija Saariaho", genre: "Contemporary Composer"
        },
        {
          composerId: 103, fullName: "Olga Neuwirth", genre: "Contemporary Composer"
        },
        {
          composerId: 104, fullName: "Anna Thorvaldsdóttir", genre: "Contemporary Composer"
        }
      ]
    }

    getComposers (): Observable<IComposer[]> {
      return of(this.composers)
    }

    getComposer (composerId: number) {
      for (let composer of this.composers) {
        if (composer.composerId === composerId) {
          return composer
        }
      }
    }
    filterComposers(name: string): Observable<IComposer[]> {
      return of(this.composers).pipe(
        map(composers => composers.filter(composer => composer.fullName.indexOf(name) > -1)))
  }
}
