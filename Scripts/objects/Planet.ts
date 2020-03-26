module objects {
  export class Planet extends GameObject {
    // PRIVATE INSTANCE
    private _verticalSpeed?: number;

    // PUBLIC PROPERTIES

    // CONSTRUCTOR
    constructor() {
      super(config.Game.ASSETS.getResult("planet"), new Vector2(), true);
      this.Start();
    }

    // PRIVATE METHODS
    protected _checkBounds(): void {
      if (this.position.y > config.Game.SCREEN_HEIGHT + this.height) {
        this.velocity = new Vector2();
        if (
          config.Game.CURREN_PLANET_TICKER + 500 ==
          createjs.Ticker.getTicks()
        ) {
          this.Reset();
          config.Game.CURREN_PLANET_TICKER = createjs.Ticker.getTicks();
        }
      }
    }

    private _move(): void {
      this.position = Vector2.add(this.position, this.velocity);
    }

    // PUBLIC METHODS
    public Start(): void {
      this.name = "planet";
      config.Game.CURREN_PLANET_TICKER = createjs.Ticker.getTicks();
      this._verticalSpeed = 5;
      this.velocity = new Vector2(0, this._verticalSpeed);
      this.Reset();
    }

    public Update(): void {
      this._move();
      this._checkBounds();
    }

    public Reset(): void {
      this.velocity = new Vector2(0, this._verticalSpeed);
      let randomX = util.Mathf.RandomRange(
        this.halfWidth,
        config.Game.SCREEN_WIDTH - this.halfWidth
      );
      this.position = new Vector2(randomX, -this.height, this);
    }
  }
}
