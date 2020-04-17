export interface IPhoneme {
  label: string;
  img: string;
  sound: string;
  words?: IPhoneme[];
  category?: ICategory;
  dupKey?: string;
}

export interface ICategory {
  label: string;
  img: string;
  key: string;
}

export interface IUserProgress {
  category: IProgressCategory;
}

export interface IProgressCategory {
  phoneme: number;
}
