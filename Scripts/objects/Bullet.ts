/**
 * Author: Hang Li
 * Student Number: 300993981
 * File Name: Bullet.ts
 * Modified on: April 01, 2020
 * Game App Description: CreateJS Slot Machine
 * Revision History: available in GitHub
 */
module objects {
  export class Bullet extends GameObject {
    // PRIVATE INSTANCE
    private _direction: Vector2;
    private _active: boolean;

    // PUBLIC PROPERTIES
    public get Active(): boolean {
      return this._active;
    }

    // CONSTRUCTOR
    constructor(x: number, y: number, direction: Vector2) {
      super(config.Game.ASSETS.getResult("bullet"), x, y, true);
      this._direction = direction;
      this._active = true;
      this.Start();
    }

    // PRIVATE METHODS
    protected _checkBounds(): void {
      // check horizontal boundary
      if (
        this.x <= this.halfWidth ||
        this.x >= config.Game.SCREEN_WIDTH - this.halfWidth
      ) {
        this.velocity = Vector2.zero();
      }
    }

    private _move(): void {
      this.position.add(this.velocity);
      this.position = new Vector2(this.position.x, this.position.y);
    }

    // PUBLIC METHODS
    public Start(): void {
      this.type = enums.GameObjectTypes.BULLET;
      let speed = 10;
      this._direction.scale(speed);
      this.velocity = this._direction;
    }

    public Update(): void {
      this._move();
      this._checkBounds();
    }

    public Reset(): void {
      this.position = new Vector2(-1000, -1000);
      this._active = false;
    }
  }
}
