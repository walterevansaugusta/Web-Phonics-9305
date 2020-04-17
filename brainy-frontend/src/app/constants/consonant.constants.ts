import { consonantPairs, consonantBlends, vowelConsonantBlends, consonants } from './category.constants';

import { IPhoneme } from './../interfaces/phoneme.interface';
import * as words from './lesson.constant';

export const CH: IPhoneme = {
  label: 'ch',
  img: '../../assets/images/consonant_pairs/chop.png',
  sound: '',
  category: consonantPairs,
  words: [words.chop, words.chimp, words.chimney]
};
export const NG: IPhoneme = {
  label: 'ng',
  img: '../../assets/images/consonant_pairs/penguin.png',
  sound: '',
  category: consonantPairs,
  words: [words.penguin, words.king, words.sing]
};
export const SH: IPhoneme = {
  label: 'sh',
  img: '../../assets/images/consonant_pairs/shovel.png',
  sound: '',
  category: consonantPairs,
  words: [words.fish, words.shovel, words.sheep]
};
export const TH: IPhoneme = {
  label: 'th',
  img: '../../assets/images/consonant_pairs/thief.png',
  sound: '',
  category: consonantPairs,
  words: [words.moth, words.thief, words.three]
};
export const WH: IPhoneme = {
  label: 'wh',
  img: '../../assets/images/consonant_pairs/whale.png',
  sound: '',
  category: consonantPairs,
  words: [words.whale, words.whistle, words.wheelchair]
};

export const ConsonantPairs: IPhoneme[] = [
  CH, NG, SH, TH, WH
];

export const BL: IPhoneme = {
  label: 'bl',
  img: '../../assets/images/consonant_blends/blaze.png',
  sound: '',
  category: consonantBlends,
  words: [words.blue, words.blaze, words.blanket]
};
export const BR: IPhoneme = {
  label: 'br',
  img: '../../assets/images/art/bridge.png',
  sound: '',
  category: consonantBlends,
  words: [words.broom, words.bridge, words.bride]
};
export const CL: IPhoneme = {
  label: 'cl',
  img: '../../assets/images/consonant_blends/clarinet.png',
  sound: '',
  category: consonantBlends,
  words: [words.clarinet, words.clam, words.climb]
};
export const CR: IPhoneme = {
  label: 'cr',
  img: '../../assets/images/consonant_blends/crab.png',
  sound: '',
  category: consonantBlends,
  words: [words.crab, words.croc, words.cry]
};
export const DR: IPhoneme = {
  label: 'dr',
  img: '../../assets/images/consonant_blends/drum.png',
  sound: '',
  category: consonantBlends,
  words: [words.drum, words.drop, words.dress]
};
export const FL: IPhoneme = {
  label: 'fl',
  img: '../../assets/images/consonant_blends/flute.png',
  sound: '',
  category: consonantBlends,
  words: [words.flute, words.flag, words.fly]
};
export const FR: IPhoneme = {
  label: 'fr',
  img: '../../assets/images/consonant_blends/friend.png',
  sound: '',
  category: consonantBlends,
  words: [words.friend, words.freeze, words.fry]
};
export const GL: IPhoneme = {
  label: 'gl',
  img: '../../assets/images/consonant_blends/glove.png',
  sound: '',
  category: consonantBlends,
  words: [words.glove, words.glum, words.juggler]
};
export const GR: IPhoneme = {
  label: 'gr',
  img: '../../assets/images/consonant_blends/grapes.png',
  sound: '',
  category: consonantBlends,
  words: [words.grapes, words.green, words.angry]
};
export const PL: IPhoneme = {
  label: 'pl',
  img: '../../assets/images/consonant_blends/plug.png',
  sound: '',
  category: consonantBlends,
  words: [words.plug, words.playground, words.airplane]
};
export const PR: IPhoneme = {
  label: 'pr',
  img: '../../assets/images/consonant_blends/prize.png',
  sound: '',
  category: consonantBlends,
  words: [words.prize, words.pretzel, words.proud]
};
export const SK: IPhoneme = {
  label: 'sk',
  img: '../../assets/images/consonant_blends/skate.png',
  sound: '',
  category: consonantBlends,
  words: [words.skate, words.sky, words.skunk]
};
export const SL: IPhoneme = {
  label: 'sl',
  img: '../../assets/images/consonant_blends/slide.png',
  sound: '',
  category: consonantBlends,
  words: [words.slide, words.sled, words.sleepy]
};
export const SP: IPhoneme = {
  label: 'sp',
  img: '../../assets/images/consonant_blends/spider.png',
  sound: '',
  category: consonantBlends,
  words: [words.spider, words.spyglass, words.spoon]
};
export const ST: IPhoneme = {
  label: 'st',
  img: '../../assets/images/consonants/stilts.png',
  sound: '',
  category: consonantBlends,
  words: [words.statue, words.stilts, words.steal]
};
export const SW: IPhoneme = {
  label: 'sw',
  img: '../../assets/images/consonant_blends/swing.png',
  sound: '',
  category: consonantBlends,
  words: [words.swim, words.swing, words.sweets]
};
export const TR: IPhoneme = {
  label: 'tr',
  img: '../../assets/images/consonant_blends/tree.png',
  sound: '',
  category: consonantBlends,
  words: [words.tree, words.tricycle, words.firetruck]
};

export const ConsonantBlends: IPhoneme[] = [
  BL, BR, CL, CR, DR, FL, FR, GL, GR, PL, PR, SK, SL, SP, ST, SW, TR
    // {
    //   label: 'mp',
    //   this label doesn't exist in the mobile app but Walter may still require it
    //   img: '../../assets/images/consonant_blends/chimp.png',
    //   sound: '',
    //   words: [words.chimp]
    // },
    // {
    //   label: 'sm',
    //   img: '../../assets/images/consonant_blends/skate.png',
    //   sound: '',
    //   words: [words.sm]
    // },
    // {
    //   label: 'st',
    //   Duplicate
    //   img: '../../assets/images/consonant_blends/cast.png',
    //   sound: '',
    //   words: [words.cast]
    // },
];

export const LE: IPhoneme = {
  label: 'le',
  img: '../../assets/images/art/unicycle.png',
  sound: '',
  category: vowelConsonantBlends,
  words: [words.bubbles, words.whale, words.unicycle]
};
export const QU: IPhoneme = {
  label: 'qu',
  img: '../../assets/images/art/quill.png',
  sound: '',
  category: vowelConsonantBlends,
  words: [words.quill, words.quick, words.quiz]
}

export const VowelConsonantBlends: IPhoneme[] = [
  LE, QU
];

export const B: IPhoneme = {
  label: 'b',
  img: '../../assets/images/consonants/bubbles.png',
  sound: '',
  category: consonants,
  words: [words.bubbles, words.baby, words.bat]
};
export const C1: IPhoneme = {
  label: 'c',
  img: '../../assets/images/consonants/cabbage.png',
  sound: '',
  category: consonants,
  dupKey: ':c1',
  words: [words.cabbage, words.candy, words.cap]
};
export const C2: IPhoneme = {
  label: 'c',
  img: '../../assets/images/consonants/centipede.png',
  sound: '',
  category: consonants,
  dupKey: ':c2',
  words: [words.centipede, words.face, words.balance]
};
export const D: IPhoneme = {
  label: 'd',
  img: '../../assets/images/consonants/doc.png',
  sound: '',
  category: consonants,
  words: [words.doc, words.disc, words.dandelion]
};
export const F: IPhoneme = {
  label: 'f',
  img: '../../assets/images/consonants/fox.png',
  sound: '',
  category: consonants,
  words: [words.fox, words.fairy, words.family]
};
export const G1: IPhoneme = {
  label: 'g',
  img: '../../assets/images/consonants/goose.png',
  sound: '',
  category: consonants,
  dupKey: ':g1',
  words: [words.gate, words.gazelle, words.goat]
};
export const G2: IPhoneme = {
  label: 'g',
  img: '../../assets/images/consonants/fridge.png',
  sound: '',
  category: consonants,
  dupKey: ':g2',
  words: [words.fridge, words.gingerbread_man, words.giraffe]
};
export const H: IPhoneme = {
  label: 'h',
  img: '../../assets/images/consonants/hug.png',
  sound: '',
  category: consonants,
  words: [words.hug, words.hawk, words.hippo]
};
export const J: IPhoneme = {
  label: 'j',
  img: '../../assets/images/consonants/jump.png',
  sound: '',
  category: consonants,
  words: [words.jump, words.jacket, words.jeep]
};
export const K: IPhoneme = {
  label: 'k',
  img: '../../assets/images/consonants/kangaroo.png',
  sound: '',
  category: consonants,
  words: [words.kangaroo, words.kayak, words.key]
};
export const L: IPhoneme = {
  label: 'l',
  img: '../../assets/images/art/lemon.png',
  sound: '',
  category: consonants,
  words: [words.lemon, words.lion, words.lip]
};
export const M: IPhoneme = {
  label: 'm',
  img: '../../assets/images/consonants/monkey.png',
  sound: '',
  category: consonants,
  words: [words.monkey, words.mermaid, words.mittens]
};
export const N: IPhoneme = {
  label: 'n',
  img: '../../assets/images/consonants/nail.png',
  sound: '',
  category: consonants,
  words: [words.nail, words.nap, words.nose]
};
export const P: IPhoneme = {
  label: 'p',
  img: '../../assets/images/consonants/puppy.png',
  sound: '',
  category: consonants,
  words: [words.puppy, words.paint, words.pencil]
};
export const R: IPhoneme = {
  label: 'r',
  img: '../../assets/images/consonants/raccoons.png',
  sound: '',
  category: consonants,
  words: [words.raccoons, words.rainbow, words.rabbit]
};
export const S1: IPhoneme = {
  label: 's',
  img: '../../assets/images/consonants/suitcase.png',
  sound: '',
  category: consonants,
  dupKey: ':s1',
  words: [words.suitcases, words.sail, words.soap]
};
export const S2: IPhoneme = {
  label: 's',
  img: '../../assets/images/consonants/stilts.png',
  sound: '',
  category: consonants,
  dupKey: ':s2',
  words: [words.stilts, words.dogs, words.skis]
};
export const T: IPhoneme = {
  label: 't',
  img: '../../assets/images/consonants/toe.png',
  sound: '',
  category: consonants,
  words: [words.toe, words.tail, words.tent]
};
export const V: IPhoneme = {
  label: 'v',
  img: '../../assets/images/consonants/volcano.png',
  sound: '',
  category: consonants,
  words: [words.volcano, words.van, words.violin]
};
export const W: IPhoneme = {
  label: 'w',
  img: '../../assets/images/consonants/wagon.png',
  sound: '',
  category: consonants,
  words: [words.wagon, words.web, words.wig]
};
export const X: IPhoneme = {
  label: 'x',
  img: '../../assets/images/consonants/taxi.png',
  sound: '',
  category: consonants,
  words: [words.taxi, words.fox, words.axe]
};
export const YConsonant: IPhoneme = {
  label: 'y',
  img: '../../assets/images/consonants/yoyo.png',
  sound: '',
  category: consonants,
  words: [words.yo_yo, words.yawn, words.yacht]
};
export const Z: IPhoneme = {
  label: 'z',
  img: '../../assets/images/consonants/zebra.png',
  sound: '',
  category: consonants,
  words: [words.zebra, words.zigzag, words.zipper]
};

export const Consonants: IPhoneme[] = [
  B, C1, C2, D, F, G1, G2, H, J, K, L, M, N, P, R, S1, S2, T, V, W, X, YConsonant, Z
];
