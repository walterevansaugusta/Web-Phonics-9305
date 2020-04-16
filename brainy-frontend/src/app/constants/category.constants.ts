import { ICategory } from './../interfaces/phoneme.interface';

export const consonants: ICategory = {
  label: 'Consonants',
  key: 'consonants',
  img: '../../assets/images/category_art/consonants.png',
};

export const consonantPairs: ICategory = {
  label: 'Consonant Pairs',
  key: 'consonantpairs',
  img: '../../assets/images/category_art/consonant_pairs.png',
};

export const consonantBlends: ICategory = {
  label: 'Consonant Blends',
  key: 'consonantblends',
  img: '../../assets/images/category_art/consonant_blends.png',
};

export const vowels: ICategory = {
  label: 'Vowels',
  key: 'vowels',
  img: '../../assets/images/category_art/vowels.png',
};

export const vowelPairs: ICategory = {
  label: 'Vowel Pairs',
  key: 'vowelpairs',
  img: '../../assets/images/category_art/vowel_pairs.png',
};

export const vowelConsonantBlends: ICategory = {
  label: 'Vowel Consonant Blends',
  key: 'vowelconsonantblends',
  img: '../../assets/images/category_art/vowel_consonant_blends.png',
};

export const Categories: ICategory[] = [consonants, consonantPairs, consonantBlends, vowels, vowelPairs, vowelConsonantBlends];
