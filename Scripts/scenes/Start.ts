/**
 * Author: Hang Li
 * Student Number: 300993981
 * File Name: Start.ts
 * Modified on: April 01, 2020
 * Game App Description: CreateJS Slot Machine
 * Revision History: available in GitHub
 */
module scenes {
  export class Start extends objects.Scene {
    // PRIVATE INSTANCE MEMBERS
    private _playButton: objects.Button;
    private _instructionButton: objects.Button;
    private _exitButton: objects.Button;
    private _universe: objects.Universe;
    private _titleImage: objects.Image;
    private _monsterAImage: objects.Image;
    private _monsterBImage: objects.Image;
    private _monsterCImage: objects.Image;
    private _monsterDImage: objects.Image;
    private _avatarImage: objects.Image;
    private _planetImage: objects.Image;
    private _liveImage: objects.Image;
    private _starImage: objects.Image;

    // PUBLIC PROPERTIES

    // CONSTRUCTOR
    constructor() {
      super();
      this.Start();
    }

    // PRIVATE METHODS

    // PUBLIC METHODS
    public Start(): void {
      // Images
      this._titleImage = new objects.Image(
        config.Game.ASSETS.getResult("spaceshipFreedomLogo"),
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
      this._avatarImage = new objects.Image(
        config.Game.ASSETS.getResult("avatar"),
        265,
        400,
        60,
        75,
        true
      );
      this._planetImage = new objects.Image(
        config.Game.ASSETS.getResult("planet"),
        390,
        400,
        60,
        75,
        true
      );
      this._liveImage = new objects.Image(
        config.Game.ASSETS.getResult("liveIcon"),
        140,
        400,
        45,
        45,
        true
      );
      this._starImage = new objects.Image(
        config.Game.ASSETS.getResult("starIcon"),
        515,
        400,
        45,
        45,
        true
      );
      // buttons
      this._playButton = new objects.Button(
        config.Game.ASSETS.getResult("playButton"),
        140,
        560,
        true
      );
      this._instructionButton = new objects.Button(
        config.Game.ASSETS.getResult("instructionButton"),
        320,
        565,
        true
      );
      this._exitButton = new objects.Button(
        config.Game.ASSETS.getResult("exitButton"),
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
      this.addChild(this._universe);
      this.addChild(this._monsterAImage);
      this.addChild(this._monsterBImage);
      this.addChild(this._monsterCImage);
      this.addChild(this._monsterDImage);
      this.addChild(this._titleImage);
      this.addChild(this._liveImage);
      this.addChild(this._avatarImage);
      this.addChild(this._planetImage);
      this.addChild(this._starImage);
      this.addChild(this._playButton);
      this.addChild(this._instructionButton);
      this.addChild(this._exitButton);

      this._instructionButton.on("click", () => {
        config.Game.SCENE = scenes.State.INSTRUCTION;
      });

      this._playButton.on("click", () => {
        config.Game.LIVES = 5;
        config.Game.BULLETS = 99;
        config.Game.SCORE = 0;
        config.Game.SCENE = scenes.State.PLAY;
      });

      this._exitButton.on("click", () => {
        config.Game.LIVES = 5;
        config.Game.BULLETS = 99;
        config.Game.SCORE = 0;
        config.Game.HIGH_SCORE = 0;
        config.Game.SCENE = scenes.State.EXIT;
      });
    }

    public Clean(): void {}
  }
}
