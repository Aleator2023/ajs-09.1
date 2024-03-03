import { Character } from '../src/character.js';

class Magician extends Character {}

const magician = new Magician(100);
magician.distance = 2;
magician.stoned = true;
console.log(magician.attack); // Выведет силу атаки с учетом расстояния и дурмана

export { Magician };
