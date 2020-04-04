/**
 * Author: Hang Li
 * Student Number: 300993981
 * File Name: Start.ts
 * Modified on: April 04, 2020
 * Game App Description: CreateJS Slot Machine
 * Revision History: available in GitHub
 */
module scenes {
  export class Exit extends objects.Scene {
    // PRIVATE INSTANCE MEMBERS
    private _universe: objects.Universe;
    private _titleImage: objects.Image;
    private _thankYouLabel: objects.Label;

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
      this._universe = new objects.Universe();
      this._thankYouLabel = new objects.Label(
        "Thank you for playing this game!",
        "32px",
        "Consolas",
        "#FFFFFF",
        50,
        320,
        false
      );
      this.Main();
    }

    public Update(): void {
      this._universe.Update();
    }

    public Main(): void {
      this.addChild(this._universe);
      this.addChild(this._titleImage);
      this.addChild(this._thankYouLabel);
    }

    public Clean(): void {}
  }
}
