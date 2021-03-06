/**
 * Author: Hang Li
 * Student Number: 300993981
 * File Name: Spaceship.ts
 * Modified on: April 01, 2020
 * Game App Description: CreateJS Slot Machine
 * Revision History: available in GitHub
 */
module objects {
  export class Spaceship extends GameObject {
    // PRIVATE INSTANCE MEMBERS
    private _verticalPosition: number;

    // PUBLIC PROPERTIES

    // CONTRUCTOR
    constructor() {
      super(config.Game.ASSETS.getResult("avatar"), 0, 0, true);
      this.Start();
    }

    // PRIVATE METHODS
    protected _checkBounds(): void {
      // left boundary
      if (this.position.x <= this.halfWidth) {
        this.position = new Vector2(this.halfWidth, this.position.y);
      }

      // right boundary
      if (this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth) {
        this.position = new Vector2(
          config.Game.SCREEN_WIDTH - this.halfWidth,
          this.position.y
        );
      }
    }

    private _move(): void {
      let newPositionX = util.Mathf.Lerp(
        this.position.x,
        this.stage.mouseX,
        0.05
      );
      this.position = new Vector2(newPositionX, this._verticalPosition);
    }

    // PUBLIC METHODS
    public Start(): void {
      this.type = enums.GameObjectTypes.SPACESHIP;
      this._verticalPosition = 610; // locked to the bottom of the screen
    }

    public Update(): void {
      this._move();
      this._checkBounds();
    }

    public Reset(): void {}

    public shoot(aim: Vector2): objects.Bullet {
      let bulletFireSound = createjs.Sound.play("bulletFireSound");
      bulletFireSound.volume = 0.15;
      return new Bullet(this.position.x, this.position.y - 40, aim);
    }
  }
}
