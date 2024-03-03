import { Daemon } from '../src/daemon.js';

test('Daemon attack at distance 3 without stoned', () => {
    const daemon = new Daemon(100);
    daemon.distance = 3;
    daemon.stoned = false;
    expect(daemon.attack).toBeCloseTo(80);
  });
