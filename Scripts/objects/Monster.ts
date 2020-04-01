/**
 * Author: Hang Li
 * Student Number: 300993981
 * File Name: Monster.ts
 * Modified on: April 01, 2020
 * Game App Description: CreateJS Slot Machine
 * Revision History: available in GitHub
 */
module objects {
  export class Monster extends GameObject {
    // PRIVATE INSTANCE
    private _verticalSpeed: number;
    private _horizontalSpeed: number;
    private _lives: number;
    private _escape: boolean;

    // PUBLIC PROPERTIES
    public set lives(v: number) {
      this._lives = v;
    }
    public get lives(): number {
      return this._lives;
    }

    public get escape(): boolean {
      return this._escape;
    }

    // CONSTRUCTOR
    constructor() {
      // random generate different monster
      let randomMonster = util.Mathf.RandomRange(1, 4);
      if (randomMonster < 2) {
        super(config.Game.ASSETS.getResult("monsterA"), new Vector2(), true);
        this.type = enums.GameObjectTypes.MONSTERA;
        this._lives = 1;
      } else if (randomMonster < 3) {
        super(config.Game.ASSETS.getResult("monsterB"), new Vector2(), true);
        this.type = enums.GameObjectTypes.MONSTERB;
        this._lives = 1;
      } else if (randomMonster < 4) {
        super(config.Game.ASSETS.getResult("monsterC"), new Vector2(), true);
        this.type = enums.GameObjectTypes.MONSTERC;
        this._lives = 2;
      } else {
        super(config.Game.ASSETS.getResult("monsterD"), new Vector2(), true);
        this.type = enums.GameObjectTypes.MONSTERD;
        this._lives = 2;
      }

      // initial escape is false
      this._escape = false;
      this.Start();
    }

    // PRIVATE METHODS
    protected _checkBounds(): void {
      // check vertical boundary
      if (this.position.y > config.Game.SCREEN_HEIGHT + this.height) {
        this._escape = true;
      }
      // check horizontal boundary
      if (
        this.position.x < this.halfWidth ||
        this.position.x > config.Game.SCREEN_WIDTH - this.halfWidth
      ) {
        this._horizontalSpeed = -this._horizontalSpeed;
        this.velocity = new Vector2(this._horizontalSpeed, this._verticalSpeed);
      }
    }

    private _move(): void {
      this.position = Vector2.add(this.position, this.velocity);
    }

    // PUBLIC METHODS
    public Start(): void {
      this.alpha = 0.8; // transparency set to 80%
      this.Reset();
    }
    public Update(): void {
      this._move();
      this._checkBounds();
    }
    public Reset(): void {
      this._verticalSpeed = util.Mathf.RandomRange(2, 4); // speed ranges from 2 to 5 px per frame
      this._horizontalSpeed = util.Mathf.RandomRange(-1, 1); // random horizontal drift
      this.velocity = new Vector2(this._horizontalSpeed, this._verticalSpeed);
      let randomX = util.Mathf.RandomRange(
        this.halfWidth,
        config.Game.SCREEN_WIDTH - this.halfWidth
      );
      let randomY = util.Mathf.RandomRange(-this.height * 2, -this.height);
      this.position = new Vector2(randomX, randomY, this);
    }
  }
}
