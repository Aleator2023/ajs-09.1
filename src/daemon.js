import { Character } from '../src/character.js';

class Daemon extends Character {}

const daemon = new Daemon(100);
daemon.distance = 3;
daemon.stoned = false;
console.log(daemon.attack); // Выведет силу атаки с учетом расстояния

export { Daemon };
