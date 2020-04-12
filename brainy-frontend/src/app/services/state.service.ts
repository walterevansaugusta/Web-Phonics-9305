import { Vowels } from './../constants/vowels.constants';
import { ConsonantPairs, ConsonantBlends, Consonants, VowelConsonantBlends } from './../constants/consonant.constants';
import { ICategory, IPhoneme } from './../interfaces/phoneme.interface';
import { Injectable } from '@angular/core';
import { VowelPairs } from '../constants/vowels.constants';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  public categoryState: ICategory;

  public getCategory(key: string) {
    if (key === 'consonants') {
      return this.getConsonants();
    } else if (key === 'consonantpairs') {
      return ConsonantPairs;
    } else if (key === 'consonantblends') {
      return ConsonantBlends;
    } else if (key === 'vowelconsonantblends') {
      return VowelConsonantBlends;
    } else if (key === 'vowelpairs') {
      return VowelPairs;
    } else if (key === 'vowels') {
      return this.getVowels();
    } else {
      return this.getAll();
    }
  }

  private getConsonants() {
    let consonants = Consonants;
    consonants = consonants.concat(ConsonantPairs, ConsonantBlends);
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

  private getVowels() {
    let vowels = Vowels;
    vowels = vowels.concat(VowelPairs, VowelConsonantBlends);
    vowels.sort((a, b) => {
      if (a.label > b.label) {
        return 1;
      } else if (a.label < b.label) {
        return -1;
      }
      return 0;
    });
    return vowels;
  }

  public getAll() {
    const all = this.getConsonants().concat(this.getVowels());
    all.sort((a, b) => {
      if (a.label > b.label) {
        return 1;
      } else if (a.label < b.label) {
        return -1;
      }
      return 0;
    });
    return all;
  }

}
