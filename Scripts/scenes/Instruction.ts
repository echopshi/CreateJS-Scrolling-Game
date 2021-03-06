/**
 * Author: Hang Li
 * Student Number: 300993981
 * File Name: Instruction.ts
 * Modified on: April 01, 2020
 * Game App Description: CreateJS Slot Machine
 * Revision History: available in GitHub
 */
module scenes {
  export class Instruction extends objects.Scene {
    // PRIVATE INSTANCE MEMBERS
    private _playButton: objects.Button;
    private _exitButton: objects.Button;
    private _universe: objects.Universe;
    private _titleImage: objects.Image;
    private _instructionImage: objects.Image;
    private _instructionLabel: objects.Label;
    private _iconsImage: objects.Image;

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
        100,
        600,
        100,
        true
      );
      this._instructionImage = new objects.Image(
        config.Game.ASSETS.getResult("instructionLogo"),
        150,
        180,
        60,
        75,
        true
      );
      this._iconsImage = new objects.Image(
        config.Game.ASSETS.getResult("iconsImage"),
        305,
        400,
        30,
        30,
        true
      );
      // Label
      let instruction =
        "1. Bullet hits Monster, Score + 10\n\n" +
        "2. Some Monsters are stronger than others\n\n" +
        "3. Spaceship hits Monster, Live – 1\n\n" +
        "4. Monster escaped, Live – 1\n\n" +
        "5. Spaceship grab    , Live + 1\n\n" +
        "6. Spaceship grab    , Score + 50\n\n" +
        "7. Spaceship grab    , Bullet + 50\n\n" +
        "8. Endless level with infinity bullets\n\n" +
        "9. Live = 0 then Game Over\n\n";
      this._instructionLabel = new objects.Label(
        instruction,
        "24px",
        "Consolas",
        "#FFFFFF",
        50,
        230,
        false
      );
      // buttons
      this._playButton = new objects.Button(
        config.Game.ASSETS.getResult("playButton"),
        140,
        590,
        true
      );
      this._exitButton = new objects.Button(
        config.Game.ASSETS.getResult("exitToMenuButton"),
        500,
        590,
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
      this.addChild(this._titleImage);
      this.addChild(this._instructionImage);
      this.addChild(this._iconsImage);
      this.addChild(this._instructionLabel);
      this.addChild(this._playButton);
      this.addChild(this._exitButton);

      this._playButton.on("click", () => {
        config.Game.LIVES = 5;
        config.Game.BULLETS = 99;
        config.Game.SCORE = 0;
        config.Game.SCENE = scenes.State.PLAY;
      });

      this._exitButton.on("click", () => {
        config.Game.SCENE = scenes.State.START;
      });
    }

    public Clean(): void {}
  }
}
