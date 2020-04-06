import { IPhoneme } from '../interfaces/phoneme.interface'; 
import { Lesson } from '../interfaces/lesson.interface'; 

export const ape: IPhoneme = {
    label: 'ape', 
    img: 'assets/images/art/ape.png', 
    sound: '../../assets/sounds/ape.mp3', 
}

export const ants: IPhoneme = {
    label: 'ants', 
    img: 'assets/images/art/ants.png', 
    sound: '../../assets/sounds/ants.mp3', 
}

export const axe: IPhoneme = { 
    label: 'axe',
    img: 'assets/images/art/axe.png', 
    sound: '../../assets/sounds/axe.mp3', 
}

export const a: Lesson = { 
    phoneme: 'a', 
    words: [ape, ants, axe]
}

