module objects {
  export class Image extends GameObject {
    // constructor
    constructor(
      imagePath: Object = config.Game.ASSETS.getResult("button"),
      x: number = 0,
      y: number = 0,
      width: number = 0,
      height: number = 0,
      isCentered: boolean = false
    ) {
      super(imagePath, x, y, isCentered);
      super.CustomSize(width, height, isCentered);
      this.Start();
    }

    // PRIVATE LIFE CYCLE METHODS
    protected _checkBounds(): void {}

    // PUBLIC LIFE CYCLE METHODS
    public Start(): void {
      this.name = "Image";
    }

    public Update(): void {}

    public Reset(): void {}
  }
}
