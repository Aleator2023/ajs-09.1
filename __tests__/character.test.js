import { Character } from '../src/character.js';

describe('Character class functionality', () => {
  test('Base attack without distance and stoned modifications', () => {
    const character = new Character(100);
    expect(character.attack).toBe(100);
  });

  test('Attack decreases linearly with distance', () => {
    const character = new Character(100);
    character.distance = 3; // Атака должна уменьшиться на 20%
    expect(character.attack).toBeCloseTo(80);
  });

  test('Attack decreases with stoned effect', () => {
    const character = new Character(100);
    character.distance = 2; // Атака уменьшается на 10% из-за расстояния
    character.stoned = true; // Дополнительное уменьшение из-за дурмана
    const expectedAttack = 100 * 0.9 - Math.log2(2) * 5;
    expect(character.attack).toBeCloseTo(expectedAttack);
  });

  test('Attack should not be negative', () => {
    const character = new Character(100);
    character.distance = 100; // Сильное уменьшение атаки из-за большого расстояния
    character.stoned = true;
    expect(character.attack).toBeGreaterThanOrEqual(0);
  });

  test('Setting attack value directly', () => {
    const character = new Character(100);
    character.attack = 120;
    expect(character.attack).toBe(120);
  });

  test('Distance cannot be less than 1', () => {
    const character = new Character(100);
    character.distance = -5; // Попытка установить недопустимое значение
    expect(character.distance).toBe(1);
  });

  test('Stoned effect toggles correctly', () => {
    const character = new Character(100);
    character.stoned = true;
    expect(character.stoned).toBe(true);
    character.stoned = false;
    expect(character.stoned).toBe(false);
  });
});
