module objects {
  export class Icon extends GameObject {
    // PRIVATE INSTANCE
    private _verticalSpeed?: number;

    // PUBLIC PROPERTIES

    // CONSTRUCTOR
    constructor(type: enums.GameObjectTypes) {
      switch (type) {
        case enums.GameObjectTypes.LIVEICON:
          super(config.Game.ASSETS.getResult("liveIcon"), new Vector2(), true);
          break;
        case enums.GameObjectTypes.STARICON:
          super(config.Game.ASSETS.getResult("starIcon"), new Vector2(), true);
          break;
        case enums.GameObjectTypes.PLANET:
          super(config.Game.ASSETS.getResult("planet"), new Vector2(), true);
          break;
      }
      this.type = type;
      this.Start();
    }

    // PRIVATE METHODS
    protected _checkBounds(): void {
      if (
        this.position.y == -1000 ||
        this.position.y > config.Game.SCREEN_HEIGHT + this.height
      ) {
        this.velocity = new Vector2();

        if (
          this.type == enums.GameObjectTypes.PLANET &&
          config.Game.CURRENT_PLANET_TICKER + 500 == createjs.Ticker.getTicks()
        ) {
          this.Reset();
          config.Game.CURRENT_PLANET_TICKER = createjs.Ticker.getTicks();
        }

        if (
          this.type == enums.GameObjectTypes.LIVEICON &&
          config.Game.CURRENT_LIVEICON_TICKER + 1200 ==
            createjs.Ticker.getTicks()
        ) {
          this.Reset();
          config.Game.CURRENT_LIVEICON_TICKER = createjs.Ticker.getTicks();
        }

        if (
          this.type == enums.GameObjectTypes.STARICON &&
          config.Game.CURRENT_STARICON_TICKER + 800 ==
            createjs.Ticker.getTicks()
        ) {
          this.Reset();
          config.Game.CURRENT_STARICON_TICKER = createjs.Ticker.getTicks();
        }
      }
    }

    private _move(): void {
      this.position = Vector2.add(this.position, this.velocity);
    }

    // PUBLIC METHODS
    public Start(): void {
      switch (this.type) {
        case enums.GameObjectTypes.LIVEICON:
          config.Game.CURRENT_LIVEICON_TICKER = createjs.Ticker.getTicks();
          break;
        case enums.GameObjectTypes.STARICON:
          config.Game.CURRENT_STARICON_TICKER = createjs.Ticker.getTicks();
          break;
        case enums.GameObjectTypes.PLANET:
          config.Game.CURRENT_PLANET_TICKER = createjs.Ticker.getTicks();
          break;
      }
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

    public Collected(): void {
      this.position = new Vector2(-1000, -1000);
      this.velocity = Vector2.zero();
    }
  }
}
