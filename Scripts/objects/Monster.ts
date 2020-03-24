module objects {
  export class Monster extends GameObject {
    // PRIVATE INSTANCE
    private _verticalSpeed?: number;
    private _horizontalSpeed?: number;

    // PUBLIC PROPERTIES

    // CONSTRUCTOR
    constructor() {
      let randomMonster = util.Mathf.RandomRange(1, 4);
      if (randomMonster < 2) {
        super(config.Game.ASSETS.getResult("monsterA"), new Vector2(), true);
        this.name = "MonsterA";
      } else if (randomMonster < 3) {
        super(config.Game.ASSETS.getResult("monsterB"), new Vector2(), true);
        this.name = "MonsterB";
      } else if (randomMonster < 4) {
        super(config.Game.ASSETS.getResult("monsterC"), new Vector2(), true);
        this.name = "MonsterC";
      } else {
        super(config.Game.ASSETS.getResult("monsterD"), new Vector2(), true);
        this.name = "MonsterD";
      }

      this.position = new Vector2(this.width, this.height);
      this.Start();
    }

    // PRIVATE METHODS
    protected _checkBounds(): void {
      if (this.position.y > config.Game.SCREEN_HEIGHT + this.height) {
        this.Reset();
      }
      // check horizontal boundary
      if (
        this.position.x < this.width ||
        this.position.x > config.Game.SCREEN_WIDTH - this.width
      ) {
        this.velocity = new Vector2(
          -this._horizontalSpeed,
          this._verticalSpeed
        );
      }
    }

    private _move(): void {
      this.position = Vector2.add(this.position, this.velocity);
    }

    // PUBLIC METHODS
    public Start(): void {
      this.name = "Monster";
      this.alpha = 0.7; // transparency set to 70%
      this.Reset();
    }
    public Update(): void {
      this._move();
      this._checkBounds();
    }
    public Reset(): void {
      this._verticalSpeed = util.Mathf.RandomRange(2, 5); // speed ranges from 2 to 5 px per frame
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
