import { consonantPairs, consonantBlends, vowelConsonantBlends, consonants } from './category.constants';

import { IPhoneme } from './../interfaces/phoneme.interface';
import * as words from './lesson.constant';

export const ConsonantPairs: IPhoneme[] = [
    {
      label: 'ch',
      img: '../../assets/images/consonant_pairs/chop.png',
      sound: '',
      category: consonantPairs,
      words: [words.chop, words.chimp]
      // words.chipmunk, words.chimney, words.catch
    },
    {
      label: 'ng',
      img: '../../assets/images/consonant_pairs/penguin.png',
      sound: '',
      category: consonantPairs,
      words: [words.penguin, words.king, words.sing]
    },
    {
      label: 'sh',
      img: '../../assets/images/consonant_pairs/shovel.png',
      sound: '',
      category: consonantPairs,
      words: [words.fish, words.shovel, words.sheep]
      // words.shoes
    },
    {
      label: 'th',
      img: '../../assets/images/consonant_pairs/thief.png',
      sound: '',
      category: consonantPairs,
      words: [words.moth, words.thief]
      // words.three, words.throne
    },
    {
      label: 'wh',
      img: '../../assets/images/consonant_pairs/whale.png',
      sound: '',
      category: consonantPairs,
      words: [words.whale]
      // words.whistle, words.wheelchair
    },
];

export const ConsonantBlends: IPhoneme[] = [
    {
      label: 'bl',
      img: '../../assets/images/consonant_blends/blaze.png',
      sound: '',
      category: consonantBlends,
      words: [words.blue, words.blaze]
      // words.blanket, words.bloodhound
    },
    {
      label: 'br',
      img: '../../assets/images/art/bridge.png',
      sound: '',
      category: consonantBlends,
      words: [words.broom, words.bridge, words.bride]
      // words.break
    },
    {
      label: 'cl',
      img: '../../assets/images/consonant_blends/clarinet.png',
      sound: '',
      category: consonantBlends,
      words: [words.clarinet, words.clam, words.climb]
    },
    {
      label: 'cr',
      img: '../../assets/images/consonant_blends/crab.png',
      sound: '',
      category: consonantBlends,
      words: [words.crab, words.croc, words.cry]
      // words.crane, words.cradle
    },
    {
      label: 'dr',
      img: '../../assets/images/consonant_blends/drum.png',
      sound: '',
      category: consonantBlends,
      words: [words.drum, words.drop, words.dress]
    },
    {
      label: 'fl',
      img: '../../assets/images/consonant_blends/flute.png',
      sound: '',
      category: consonantBlends,
      words: [words.flute, words.flag, words.fly]
    },
    {
      label: 'fr',
      img: '../../assets/images/consonant_blends/friend.png',
      sound: '',
      category: consonantBlends,
      words: [words.friend, words.freeze, words.fry]
    },
    {
      label: 'gl',
      img: '../../assets/images/consonant_blends/glove.png',
      sound: '',
      category: consonantBlends,
      words: [words.glove, words.glum]
    },
    {
      label: 'gr',
      img: '../../assets/images/consonant_blends/grapes.png',
      sound: '',
      category: consonantBlends,
      words: [words.grapes, words.green]
    },
    // {
    //   label: 'mp',
    //   this label doesn't exist in the mobile app but Walter may still require it
    //   img: '../../assets/images/consonant_blends/chimp.png',
    //   sound: '',
    //   words: [words.chimp]
    // },
    {
      label: 'pl',
      img: '../../assets/images/consonant_blends/plug.png',
      sound: '',
      category: consonantBlends,
      words: [words.plug]
    },
    {
      label: 'pr',
      img: '../../assets/images/consonant_blends/prize.png',
      sound: '',
      category: consonantBlends,
      words: [words.prize]
    },
    {
      label: 'sc',
      img: '../../assets/images/consonant_blends/scarf.png',
      sound: '',
      category: consonantBlends,
      words: [words.scarf]
    },
    {
      label: 'sk',
      img: '../../assets/images/consonant_blends/skate.png',
      sound: '',
      category: consonantBlends,
      words: [words.skate, words.sky]
    },
    {
      label: 'sl',
      img: '../../assets/images/consonant_blends/slide.png',
      sound: '',
      category: consonantBlends,
      words: [words.slide, words.sled, words.sleepy]
    },
    // {
    //   label: 'sm',
    //   img: '../../assets/images/consonant_blends/skate.png',
    //   sound: '',
    //   words: [words.sm]
    // },
    {
      label: 'sn',
      img: '../../assets/images/consonant_blends/snout.png',
      sound: '',
      category: consonantBlends,
      words: [words.snout]
    },
    {
      label: 'sp',
      img: '../../assets/images/consonant_blends/spider.png',
      sound: '',
      category: consonantBlends,
      words: [words.spider, words.spyglass]
    },
    {
      label: 'st',
      img: '../../assets/images/consonant/stilts.png',
      sound: '',
      category: consonantBlends,
      words: [words.statue, words.stilts, words.steal]
    },
    // {
    //   label: 'st',
    //   Duplicate
    //   img: '../../assets/images/consonant_blends/cast.png',
    //   sound: '',
    //   words: [words.cast]
    // },
    {
      label: 'sw',
      img: '../../assets/images/consonant_blends/swing.png',
      sound: '',
      category: consonantBlends,
      words: [words.swim, words.swing]
    },
    {
      label: 'tr',
      img: '../../assets/images/consonant_blends/tree.png',
      sound: '',
      category: consonantBlends,
      words: [words.tree]
    },
];

export const VowelConsonantBlends: IPhoneme[] = [
    {
      label: 'le',
      img: '../../assets/images/art/unicycle.png',
      sound: '',
      category: vowelConsonantBlends,
      words: [words.bubbles, words.whale, words.unicycle]
    },
    {
      label: 'qu',
      img: '../../assets/images/art/quill.png',
      sound: '',
      category: vowelConsonantBlends,
      words: [words.quill, words.quick, words.quiz]
    },
];

export const Consonants: IPhoneme[] = [
    {
      label: 'b',
      img: '../../assets/images/consonants/bubbles.png',
      sound: '',
      category: consonants,
      words: [words.bubbles, words.baby, words.bat]
    },
    {
      label: 'c',
      img: '../../assets/images/consonants/cabbage.png',
      sound: '',
      category: consonants,
      dupKey: ':c1',
      words: [words.cabbage, words.candy, words.cap]
    },
    {
      label: 'c',
      img: '../../assets/images/consonants/centipede.png',
      sound: '',
      category: consonants,
      dupKey: ':c2',
      words: [words.centipede, words.face]
    },
    {
      label: 'd',
      img: '../../assets/images/consonants/doc.png',
      sound: '',
      category: consonants,
      words: [words.doc, words.disc, words.dandelion]
    },
    {
      label: 'f',
      img: '../../assets/images/consonants/fox.png',
      sound: '',
      category: consonants,
      words: [words.fox, words.fairy, words.family]
    },
    {
      label: 'g',
      img: '../../assets/images/consonants/goose.png',
      sound: '',
      category: consonants,
      dupKey: ':g1',
      words: [words.gate, words.gazelle, words.goat]
    },
    {
      label: 'g',
      img: '../../assets/images/consonants/fridge.png',
      sound: '',
      category: consonants,
      dupKey: ':g2',
      words: [words.fridge]
    },
    {
      label: 'h',
      img: '../../assets/images/consonants/hug.png',
      sound: '',
      category: consonants,
      words: [words.hug, words.hawk, words.hippo]
    },
    {
      label: 'j',
      img: '../../assets/images/consonants/jump.png',
      sound: '',
      category: consonants,
      words: [words.jump, words.jacket, words.jeep]
    },
    {
      label: 'k',
      img: '../../assets/images/consonants/kangaroo.png',
      sound: '',
      category: consonants,
      words: [words.kangaroo, words.kayak, words.key]
    },
    {
      label: 'l',
      img: '../../assets/images/art/lemon.png',
      sound: '',
      category: consonants,
      words: [words.lemon, words.lion, words.lip]
    },
    {
      label: 'm',
      img: '../../assets/images/consonants/monkey.png',
      sound: '',
      category: consonants,
      words: [words.monkey, words.mermaid, words.mittens]
    },
    {
      label: 'n',
      img: '../../assets/images/consonants/nail.png',
      sound: '',
      category: consonants,
      words: [words.nail, words.nap, words.nose]
    },
    {
      label: 'p',
      img: '../../assets/images/consonants/puppy.png',
      sound: '',
      category: consonants,
      words: [words.puppy, words.paint, words.pencil]
    },
    {
      label: 'r',
      img: '../../assets/images/consonants/raccoons.png',
      sound: '',
      category: consonants,
      words: [words.raccoons, words.rainbow, words.rabbit]
    },
    {
      label: 's',
      img: '../../assets/images/consonants/suitcase.png',
      sound: '',
      category: consonants,
      dupKey: ':s1',
      words: [words.suitcases, words.sail, words.soap]
    },
    {
      label: 's',
      img: '../../assets/images/consonants/stilts.png',
      sound: '',
      category: consonants,
      dupKey: ':s2',
      words: [words.stilts]
    },
    {
      label: 't',
      img: '../../assets/images/consonants/toe.png',
      sound: '',
      category: consonants,
      words: [words.toe, words.tail, words.tent]
    },
    {
      label: 'v',
      img: '../../assets/images/consonants/volcano.png',
      sound: '',
      category: consonants,
      words: [words.volcano, words.van, words.violin]
    },
    {
      label: 'w',
      img: '../../assets/images/consonants/wagon.png',
      sound: '',
      category: consonants,
      words: [words.wagon, words.web, words.wig]
    },
    {
      label: 'x',
      img: '../../assets/images/consonants/taxi.png',
      sound: '',
      category: consonants,
      words: [words.taxi, words.fox, words.axe]
    },
    {
      label: 'y',
      img: '../../assets/images/consonants/yoyo.png',
      sound: '',
      category: consonants,
      words: [words.yo_yo, words.yawn, words.yacht]
    },
    {
      label: 'z',
      img: '../../assets/images/consonants/zebra.png',
      sound: '',
      category: consonants,
      words: [words.zebra, words.zigzag, words.zipper]
    },
];
