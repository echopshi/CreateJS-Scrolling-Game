/**
 * Author: Hang Li
 * Student Number: 300993981
 * File Name: Universe.ts
 * Modified on: April 01, 2020
 * Game App Description: CreateJS Slot Machine
 * Revision History: available in GitHub
 */
module objects {
  export class Universe extends GameObject {
    // PRIVATE INSTANCE MEMBERS
    private _verticalSpeed?: number;

    // PUBLIC PROPERTIES

    // CONSTRUCTOR
    constructor() {
      super(config.Game.ASSETS.getResult("universe"));
      this.Start();
    }

    // PRIVATE METHODS
    protected _checkBounds(): void {
      if (this.y >= 0) {
        this.Reset();
      }
    }

    private _move(): void {
      this.position = Vector2.add(this.position, this.velocity);
    }

    // PUBLIC METHODS
    public Start(): void {
      this.type = enums.GameObjectTypes.UNIVERSE;
      this._verticalSpeed = 5;
      this.velocity = new Vector2(0, this._verticalSpeed);
      this.Reset();
    }

    public Update(): void {
      this._move();
      this._checkBounds();
    }

    public Reset(): void {
      this.position = new Vector2(0, -1200);
    }
  }
}
