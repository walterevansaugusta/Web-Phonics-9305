
import { IPhoneme } from './../interfaces/phoneme.interface';
import * as words from './lesson.constant'; 

export const ConsonantPairs: IPhoneme[] = [
    {
      label: 'ch',
      img: '../../assets/images/consonant_pairs/chop.png',
      sound: '',
      words: [words.chop, words.chimp]
      // words.chipmunk, words.chimney, words.catch
    },
    {
      label: 'ng',
      img: '../../assets/images/consonant_pairs/penguin.png',
      sound: '',
      words: [words.penguin, words.king, words.sing]
    },
    {
      label: 'sh',
      img: '../../assets/images/consonant_pairs/shovel.png',
      sound: '',
      words: [words.fish, words.shovel, words.sheep]
      // words.shoes
    },
    {
      label: 'th',
      img: '../../assets/images/consonant_pairs/thief.png',
      sound: '',
      words: [words.moth, words.thief]
      // words.three, words.throne
    },
    {
      label: 'wh',
      img: '../../assets/images/consonant_pairs/whale.png',
      sound: '',
      words: [words.whale]
      // words.whistle, words.wheelchair
    },
];

export const ConsonantBlends: IPhoneme[] = [
    {
      label: 'bl',
      img: '../../assets/images/consonant_blends/blaze.png',
      sound: '',
      words: [words.blue, words.blaze]
      // words.blanket, words.bloodhound
    },
    {
      label: 'br',
      img: '../../assets/images/art/bridge.png',
      sound: '',
      words: [words.broom, words.bridge, words.bride]
      // words.break
    },
    {
      label: 'cl',
      img: '../../assets/images/consonant_blends/clarinet.png',
      sound: '',
      words: [words.clarinet, words.clam, words.climb]
    },
    {
      label: 'cr',
      img: '../../assets/images/consonant_blends/crab.png',
      sound: '',
      words: [words.crab, words.croc, words.cry]
      // words.crane, words.cradle
    },
    {
      label: 'dr',
      img: '../../assets/images/consonant_blends/drum.png',
      sound: '',
      words: [words.drum, words.drop, words.dress]
    },
    {
      label: 'fl',
      img: '../../assets/images/consonant_blends/flute.png',
      sound: '',
      words: [words.flute, words.flag, words.fly]
    },
    {
      label: 'fr',
      img: '../../assets/images/consonant_blends/friend.png',
      sound: '',
      words: [words.friend, words.freeze, words.fry]
    },
    {
      label: 'gl',
      img: '../../assets/images/consonant_blends/glove.png',
      sound: '',
      words: [words.glove, words.glum]
    },
    {
      label: 'gr',
      img: '../../assets/images/consonant_blends/grapes.png',
      sound: '',
      words: [words.grapes, words.green]
    },
    // {
    //   label: 'mp',
    //   this label doesn't exist in the mobile app
    //   img: '../../assets/images/consonant_blends/chimp.png',
    //   sound: '',
    //   words: [words.chimp]
    // },
    {
      label: 'pl',
      img: '../../assets/images/consonant_blends/plug.png',
      sound: '',
      words: [words.plug]
    },
    {
      label: 'pr',
      img: '../../assets/images/consonant_blends/prize.png',
      sound: '',
      words: [words.prize]
    },
    {
      label: 'sc',
      img: '../../assets/images/consonant_blends/scarf.png',
      sound: '',
      words: [words.scarf]
    },
    {
      label: 'sk',
      img: '../../assets/images/consonant_blends/skate.png',
      sound: '',
      words: [words.skate, words.sky]
    },
    {
      label: 'sl',
      img: '../../assets/images/consonant_blends/slide.png',
      sound: '',
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
      words: [words.snout]
    },
    {
      label: 'sp',
      img: '../../assets/images/consonant_blends/spider.png',
      sound: '',
      words: [words.spider, words.spyglass]
    },
    {
      label: 'st',
      img: '../../assets/images/consonant/stilts.png',
      sound: '',
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
      words: [words.swim, words.swing]
    },
    {
      label: 'tr',
      img: '../../assets/images/consonant_blends/tree.png',
      sound: '',
      words: [words.tree]
    },
];

export const VowelConsonantBlends: IPhoneme[] = [
    {
      label: 'le',
      img: '../../assets/images/art/unicycle.png',
      sound: '',
      words: [words.bubbles, words.whale, words.unicycle]
    },
    {
      label: 'qu',
      img: '../../assets/images/art/quill.png',
      sound: '',
      words: [words.quill, words.quick, words.quiz]
    },
];

export const Consonants: IPhoneme[] = [
    {
      label: 'b',
      img: '../../assets/images/consonants/bubbles.png',
      sound: '',
      words: [words.bubbles, words.baby, words.bat]
    },
    {
      label: 'c',
      img: '../../assets/images/consonants/cabbage.png',
      sound: '',
      words: [words.cabbage, words.candy, words.cap]
    },
    {
      label: 'c',
      img: '../../assets/images/consonants/centipede.png',
      sound: '',
      words: [words.centipede, words.face]
    },
    {
      label: 'd',
      img: '../../assets/images/consonants/doc.png',
      sound: '',
      words: [words.doc, words.disc, words.dandelion]
    },
    {
      label: 'f',
      img: '../../assets/images/consonants/fox.png',
      sound: '',
      words: [words.fox, words.fairy, words.family]
    },
    {
      label: 'g',
      img: '../../assets/images/consonants/goose.png',
      sound: '',
      words: [words.gate, words.gazelle, words.goat]
    },
    {
      label: 'g',
      img: '../../assets/images/consonants/fridge.png',
      sound: '',
      words: [words.fridge]
    },
    {
      label: 'h',
      img: '../../assets/images/consonants/hug.png',
      sound: '',
      words: [words.hug, words.hawk, words.hippo]
    },
    {
      label: 'j',
      img: '../../assets/images/consonants/jump.png',
      sound: '',
      words: [words.jump, words.jacket, words.jeep]
    },
    {
      label: 'k',
      img: '../../assets/images/consonants/kangaroo.png',
      sound: '',
      words: [words.kangaroo, words.kayak, words.key]
    },
    {
      label: 'l',
      img: '../../assets/images/art/lemon.png',
      sound: '',
      words: [words.lemon, words.lion, words.lip]
    },
    {
      label: 'm',
      img: '../../assets/images/consonants/monkey.png',
      sound: '',
      words: [words.monkey, words.mermaid, words.mittens]
    },
    {
      label: 'n',
      img: '../../assets/images/consonants/nail.png',
      sound: '',
      words: [words.nail, words.nap, words.nose]
    },
    {
      label: 'p',
      img: '../../assets/images/consonants/puppy.png',
      sound: '',
      words: [words.puppy, words.paint, words.pencil]
    },
    {
      label: 'r',
      img: '../../assets/images/consonants/raccoons.png',
      sound: '',
      words: [words.raccoons, words.rainbow, words.rabbit]
    },
    {
      label: 's',
      img: '../../assets/images/consonants/suitcase.png',
      sound: '',
      words: [words.suitcases, words.sail, words.soap]
    },
    {
      label: 's',
      img: '../../assets/images/consonants/stilts.png',
      sound: '',
      words: [words.stilts]
    },
    {
      label: 't',
      img: '../../assets/images/consonants/toe.png',
      sound: '',
      words: [words.toe, words.tail, words.tent]
    },
    {
      label: 'v',
      img: '../../assets/images/consonants/volcano.png',
      sound: '',
      words: [words.volcano, words.van, words.violin]
    },
    {
      label: 'w',
      img: '../../assets/images/consonants/wagon.png',
      sound: '',
      words: [words.wagon, words.web, words.wig]
    },
    {
      label: 'x',
      img: '../../assets/images/consonants/taxi.png',
      sound: '',
      words: [words.taxi, words.fox, words.axe]
    },
    {
      label: 'y',
      img: '../../assets/images/consonants/yoyo.png',
      sound: '',
      words: [words.yo_yo, words.yawn, words.yacht]
    },
    {
      label: 'z',
      img: '../../assets/images/consonants/zebra.png',
      sound: '',
      words: [words.zebra, words.zigzag, words.zipper]
    },
];
