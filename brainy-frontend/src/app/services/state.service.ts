import { ConsonantPairs, ConsonantBlends, Consonants } from './../constants/consonant.constants';
import { ICategory, IPhoneme } from './../interfaces/phoneme.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  public categoryState: ICategory;

  public getCategory(key: string) {
    if (key === 'Consonants') {
      return this.getConsonants();
    } else if (key === 'ConsonantPairs') {
      return this.getConsonantPairs();
    } else if (key === 'ConsonantBlends') {
      return this.getConsonantBlends();
    }
  }

  private getConsonants() {
    let consonants = Consonants;
    consonants = consonants.concat(ConsonantPairs, ConsonantBlends);
    console.log(consonants);
    consonants.sort((a, b) => {
      if (a.label > b.label) {
        return 1;
      } else if (a.label < b.label) {
        return -1;
      }
      return 0;
    });
    return consonants;
  }

  private getConsonantPairs() {
    return ConsonantPairs;
  }

  private getConsonantBlends() {
    return ConsonantBlends;
  }
}
