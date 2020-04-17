import { vowelPairs, vowels } from './category.constants';
import { IPhoneme } from './../interfaces/phoneme.interface';
import * as w from './lesson.constant';

export const AI: IPhoneme = {
  label: 'ai',
  img: '../../assets/images/vowel_pairs/sail.png',
  sound: '',
  category: vowelPairs,
  words: [w.tail, w.nail, w.rainbow]
};
export const AY: IPhoneme = {
  label: 'ay',
  img: '../../assets/images/vowel_pairs/jay.png',
  sound: '',
  category: vowelPairs,
  words: [w.jay, w.crayons, w. playground]
};
export const EA: IPhoneme = {
  label: 'ea',
  img: '../../assets/images/vowel_pairs/leaf.png',
  sound: '',
  category: vowelPairs,
  words: [w.leaf, w.eat, w.eagle]
};
export const OA: IPhoneme = {
  label: 'oa',
  img: '../../assets/images/vowel_pairs/goat.png',
  sound: '',
  category: vowelPairs,
  words: [w.goat, w.boat, w.coat]
};
export const OW: IPhoneme = {
  label: 'ow',
  img: '../../assets/images/vowel_pairs/rainbow.png',
  sound: '',
  category: vowelPairs,
  words: [w.rainbow, w.snow, w.bow_and_arrows]
};
export const OO: IPhoneme = {
  label: 'oo',
  img: '../../assets/images/vowel_pairs/foot.png',
  sound: '',
  category: vowelPairs,
  words: [w.foot, w.wood, w.cookies]
};
export const OI: IPhoneme = {
  label: 'oi',
  img: '../../assets/images/vowel_pairs/noise.png',
  sound: '',
  category: vowelPairs,
  words: [w.noise, w.poison, w.coin]
};
export const OY: IPhoneme = {
  label: 'oy',
  img: '../../assets/images/vowel_pairs/toys.png',
  sound: '',
  category: vowelPairs,
  words: [w.toys, w.oyster, w.boy]
};


export const VowelPairs: IPhoneme[] = [
  AI, AY, EA, OA, OW, OO, OI, OY
];

export const A1: IPhoneme = {
  label: 'a',
  img: '../../assets/images/art/ape.png',
  sound: '',
  category: vowels,
  dupKey: ':a1',
  words: [w.ape, w.skate, w.crane]
};
export const A2: IPhoneme = {
  label: 'a',
  img: '../../assets/images/art/bat.png',
  sound: '',
  category: vowels,
  dupKey: ':a2',
  words: [w.bat, w.wagon, w.cat]
};
export const A3: IPhoneme = {
  label: 'a',
  img: '../../assets/images/art/sofa.png',
  sound: '',
  category: vowels,
  dupKey: ':a3',
  words: [w.sofa, w.zebra, w.canoe]
};
export const E1: IPhoneme = {
  label: 'e',
  img: '../../assets/images/art/key.png',
  sound: '',
  category: vowels,
  dupKey: ':e1',
  words: [w.key, w.zebra, w.tree]
};
export const E2: IPhoneme = {
  label: 'e',
  img: '../../assets/images/art/elf.png',
  sound: '',
  category: vowels,
  dupKey: ':e2',
  words: [w.elf, w.bed, w.net]
};
export const E3: IPhoneme = {
  label: 'e',
  img: '../../assets/images/art/oven.png',
  sound: '',
  category: vowels,
  dupKey: ':e3',
  words: [w.oven, w.kitten, w.camel]
};
export const I1: IPhoneme = {
  label: 'i',
  img: '../../assets/images/art/ice.png',
  sound: '',
  category: vowels,
  dupKey: ':i1',
  words: [w.ice, w.climb, w.life_jacket]
};
export const I2: IPhoneme = {
  label: 'i',
  img: '../../assets/images/art/mittens.png',
  sound: '',
  category: vowels,
  dupKey: ':i2',
  words: [w.mittens, w.fish, w.hit]
};
export const I3: IPhoneme = {
  label: 'i',
  img: '../../assets/images/art/rabbit.png',
  sound: '',
  category: vowels,
  dupKey: ':i3',
  words: [w.rabbit, w.pencil, w.family]
};
export const O1: IPhoneme = {
  label: 'o',
  img: '../../assets/images/art/old.png',
  sound: '',
  category: vowels,
  dupKey: ':o1',
  words: [w.old, w.mole, w.polar_bear]
};
export const O2: IPhoneme = {
  label: 'o',
  img: '../../assets/images/art/oven.png',
  sound: '',
  category: vowels,
  dupKey: ':o2',
  words: [w.oven, w.wagon, w.onion]
};
export const U1: IPhoneme = {
  label: 'u',
  img: '../../assets/images/art/unicycle.png',
  sound: '',
  category: vowels,
  dupKey: ':u1',
  words: [w.unicycle, w.unicorn, w.binoculars]
};
export const U2: IPhoneme = {
  label: 'u',
  img: '../../assets/images/art/tuba.png',
  sound: '',
  category: vowels,
  dupKey: ':u2',
  words: [w.tuba, w.blue, w.dune_buggy]
};
export const U3: IPhoneme = {
  label: 'u',
  img: '../../assets/images/art/bug.png',
  sound: '',
  category: vowels,
  dupKey: ':u3',
  words: [w.bug, w.bucket, w.chipmunk]
};
export const YVowel1: IPhoneme = {
  label: 'y',
  img: '../../assets/images/art/cry.png',
  sound: '',
  category: vowels,
  dupKey: ':y1',
  words: [w.cry, w.fly, w.sky]
};
export const YVowel2: IPhoneme = {
  label: 'y',
  img: '../../assets/images/art/baby.png',
  sound: '',
  category: vowels,
  dupKey: ':y2',
  words: [w.baby, w.candy, w.sleepy]
};
export const YVowel3: IPhoneme = {
  label: 'y',
  img: '../../assets/images/art/yellow.png',
  sound: '',
  category: vowels,
  dupKey: 'y3',
  words: [w.yellow, w.yo_yo, w.crayons]
};


export const Vowels: IPhoneme[] = [
  A1, A2, A3, E1, E2, E3, I1, I2, I3, O1, O2, U1, U2, U3, YVowel1, YVowel2, YVowel3
];
