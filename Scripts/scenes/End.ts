module scenes {
  export class End extends objects.Scene {
    // PRIVATE INSTANCE MEMBERS
    private _scoreLabel: objects.Label;
    private _highScoreLabel: objects.Label;
    private _restartButton: objects.Button;
    private _exitButton: objects.Button;
    private _universe: objects.Universe;
    private _gameOverImage: objects.Image;
    private _monsterAImage: objects.Image;
    private _monsterBImage: objects.Image;
    private _monsterCImage: objects.Image;
    private _monsterDImage: objects.Image;

    // PUBLIC PROPERTIES

    // CONSTRUCTOR
    constructor() {
      super();
      this.Start();
    }

    // PRIVATE METHODS

    // PUBLIC METHODS

    // Initializing and Instantiating
    public Start(): void {
      // Image
      this._gameOverImage = new objects.Image(
        config.Game.ASSETS.getResult("gameOverLogo"),
        320,
        220,
        600,
        100,
        true
      );
      this._monsterAImage = new objects.Image(
        config.Game.ASSETS.getResult("monsterA"),
        140,
        100,
        60,
        75,
        true
      );
      this._monsterBImage = new objects.Image(
        config.Game.ASSETS.getResult("monsterB"),
        265,
        100,
        60,
        75,
        true
      );
      this._monsterCImage = new objects.Image(
        config.Game.ASSETS.getResult("monsterC"),
        390,
        100,
        60,
        75,
        true
      );
      this._monsterDImage = new objects.Image(
        config.Game.ASSETS.getResult("monsterD"),
        515,
        100,
        60,
        75,
        true
      );
      // labels
      this._scoreLabel = new objects.Label(
        "Current Score: 1999",
        "24px",
        "Consolas",
        "#FFFFFF",
        320,
        350,
        true
      );
      this._highScoreLabel = new objects.Label(
        "Highest Score: 9999",
        "24px",
        "Consolas",
        "#FFFFFF",
        320,
        400,
        true
      );
      // buttons
      this._restartButton = new objects.Button(
        config.Game.ASSETS.getResult("playAgainButton"),
        140,
        560,
        true
      );
      this._exitButton = new objects.Button(
        config.Game.ASSETS.getResult("exitToMenuButton"),
        500,
        560,
        true
      );
      this._universe = new objects.Universe();

      this.Main();
    }

    public Update(): void {
      this._universe.Update();
    }

    public Main(): void {
      // add images to scene
      this.addChild(this._universe);
      this.addChild(this._monsterAImage);
      this.addChild(this._monsterBImage);
      this.addChild(this._monsterCImage);
      this.addChild(this._monsterDImage);
      this.addChild(this._gameOverImage);
      // add labels to scene
      this.addChild(this._scoreLabel);
      this.addChild(this._highScoreLabel);
      // add buttons to scene
      this.addChild(this._restartButton);
      this.addChild(this._exitButton);

      this._restartButton.on("click", () => {
        config.Game.SCENE = scenes.State.PLAY;
      });

      this._exitButton.on("click", () => {
        config.Game.SCENE = scenes.State.START;
      });
    }
  }
}
