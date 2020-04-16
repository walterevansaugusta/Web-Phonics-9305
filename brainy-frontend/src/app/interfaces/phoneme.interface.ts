export interface IPhoneme {
  label: string;
  img: string;
  sound: string;
  words: IPhoneme[];
  category?: ICategory;
  dupKey?: string;
}

export interface ICategory {
  label: string;
  img: string;
  key: string;
}
