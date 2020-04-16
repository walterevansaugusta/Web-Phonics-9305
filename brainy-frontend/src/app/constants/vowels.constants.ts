import { vowelPairs, vowels } from './category.constants';
import { IPhoneme } from './../interfaces/phoneme.interface';
import * as w from './lesson.constant';

export const VowelPairs: IPhoneme[] = [
    {
      label: 'ai',
      img: '../../assets/images/vowel_pairs/sail.png',
      sound: '',
      category: vowelPairs,
      words: [w.tail, w.nail, w.rainbow]
    },
    {
      label: 'ay',
      img: '../../assets/images/vowel_pairs/jay.png',
      sound: '',
      category: vowelPairs,
      words: [w.jay]
    },
    {
      label: 'ea',
      img: '../../assets/images/vowel_pairs/leaf.png',
      sound: '',
      category: vowelPairs,
      words: [w.leaf]
    },
    {
      label: 'oa',
      img: '../../assets/images/vowel_pairs/goat.png',
      sound: '',
      category: vowelPairs,
      words: [w.goat, w.boat]
    },
    {
      label: 'ow',
      img: '../../assets/images/vowel_pairs/rainbow.png',
      sound: '',
      category: vowelPairs,
      words: [w.rainbow]
    },
    {
      label: 'oo',
      img: '../../assets/images/vowel_pairs/foot.png',
      sound: '',
      category: vowelPairs,
      words: [w.foot]
    },
    {
      label: 'oi',
      img: '../../assets/images/vowel_pairs/noise.png',
      sound: '',
      category: vowelPairs,
      words: [w.noise]
    },
    {
      label: 'oy',
      img: '../../assets/images/vowel_pairs/toys.png',
      sound: '',
      category: vowelPairs,
      words: [w.toys]
    },
];

export const Vowels: IPhoneme[] = [
    {
      label: 'a',
      img: '../../assets/images/art/ape.png',
      sound: '',
      category: vowels,
      dupKey: 'a1',
      words: [w.ape, w.skate]
    },
    {
      label: 'a',
      img: '../../assets/images/art/bat.png',
      sound: '',
      category: vowels,
      dupKey: 'a2',
      words: [w.bat, w.wagon]
    },
    {
      label: 'a',
      img: '../../assets/images/art/sofa.png',
      sound: '',
      category: vowels,
      dupKey: 'a3',
      words: [w.sofa, w.zebra]
    },
    {
      label: 'e',
      img: '../../assets/images/art/key.png',
      sound: '',
      category: vowels,
      dupKey: 'e1',
      words: [w.key, w.zebra, w.tree]
    },
    {
      label: 'e',
      img: '../../assets/images/art/elf.png',
      sound: '',
      category: vowels,
      dupKey: 'e2',
      words: [w.elf, w.bed, w.net]
    },
    {
      label: 'e',
      img: '../../assets/images/art/oven.png',
      sound: '',
      category: vowels,
      dupKey: 'e3',
      words: [w.oven, w.kitten]
    },
    {
      label: 'i',
      img: '../../assets/images/art/ice.png',
      sound: '',
      category: vowels,
      dupKey: 'i1',
      words: [w.ice, w.climb]
    },
    {
      label: 'i',
      img: '../../assets/images/art/mittens.png',
      sound: '',
      category: vowels,
      dupKey: 'i2',
      words: [w.mittens, w.fish]
    },
    {
      label: 'i',
      img: '../../assets/images/art/rabbit.png',
      sound: '',
      category: vowels,
      dupKey: 'i3',
      words: [w.rabbit, w.pencil, w.family]
    },
    {
      label: 'o',
      img: '../../assets/images/art/old.png',
      sound: '',
      category: vowels,
      dupKey: 'o1',
      words: [w.old, w.mole, w.polar_bear]
    },
    {
      label: 'o',
      img: '../../assets/images/art/oven.png',
      sound: '',
      category: vowels,
      dupKey: 'o2',
      words: [w.oven, w.wagon]
    },
    {
      label: 'u',
      img: '../../assets/images/art/unicycle.png',
      sound: '',
      category: vowels,
      dupKey: 'u1',
      words: [w.unicycle, w.unicorn]
    },
    {
      label: 'u',
      img: '../../assets/images/art/tuba.png',
      sound: '',
      category: vowels,
      dupKey: 'u2',
      words: [w.tuba, w.blue]
    },
    {
      label: 'u',
      img: '../../assets/images/art/bug.png',
      sound: '',
      category: vowels,
      dupKey: 'u3',
      words: [w.bug]
    },
    {
      label: 'y',
      img: '../../assets/images/art/cry.png',
      sound: '',
      category: vowels,
      dupKey: 'y1',
      words: [w.cry, w.fly, w.sky]
    },
    {
      label: 'y',
      img: '../../assets/images/art/baby.png',
      sound: '',
      category: vowels,
      dupKey: 'y2',
      words: [w.baby, w.candy, w.sleepy]
    },
    {
      label: 'y',
      img: '../../assets/images/art/yellow.png',
      sound: '',
      category: vowels,
      dupKey: 'y3',
      words: [w.yellow, w.yo_yo]
    },
];