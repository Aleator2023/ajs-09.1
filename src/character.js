export class Character {
    constructor(baseAttack) {
      this.baseAttack = baseAttack;
      this._stoned = false;
      this._distance = 1;
    }
  
    get attack() {
      let adjustedAttack = this.baseAttack * (1 - (this._distance - 1) * 0.1);
      if (this._stoned) {
        adjustedAttack -= Math.log2(this._distance) * 5;
      }
      return adjustedAttack > 0 ? adjustedAttack : 0;
    }
  
    set attack(value) {
      this.baseAttack = value;
    }
  
    get stoned() {
      return this._stoned;
    }
  
    set stoned(value) {
      this._stoned = value;
    }
  
    get distance() {
      return this._distance;
    }
  
    set distance(value) {
      this._distance = value >= 1 ? value : 1;
    }
  }

  