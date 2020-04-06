import { Word } from '../interfaces/word.interface'; 
import { Lesson } from '../interfaces/lesson.interface'; 

export const ape: Word = {
    word: 'ape', 
    img: 'assets/images/art/ape.png', 
    sound: '../../assets/sounds/ape.mp3', 
}

export const ants: Word = {
    word: 'ants', 
    img: 'assets/images/art/ants.png', 
    sound: '../../assets/sounds/ants.mp3', 
}

export const axe: Word = { 
    word: 'axe',
    img: 'assets/images/art/axe.png', 
    sound: '../../assets/sounds/axe.mp3', 
}

export const a: Lesson = { 
    phoneme: 'a', 
    words: [ape, ants, axe]
}

