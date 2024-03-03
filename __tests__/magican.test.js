
import { Magician } from '../src/magican.js';

describe('Character functionality', () => {
  test('Magician attack at distance 2 with stoned', () => {
    const magician = new Magician(100);
    magician.distance = 2;
    magician.stoned = true;
    expect(magician.attack).toBeCloseTo(85); 
  });
});

  

  