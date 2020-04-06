export interface IPhoneme {
  label: string;
  img: string;
  sound: string; 
  words: IPhoneme[]; 
}

export interface ICategory {
  label: string;
  img: string;
  key: string;
}
