module scenes {
  export class Play extends objects.Scene {
    // PRIVATE INSTANCE MEMBERS
    private _cloudNumber: number;

    // PUBLIC PROPERTIES

    // CONSTRUCTOR
    constructor() {
      super();

      this.Start();
    }

    // PRIVATE METHODS

    // PUBLIC METHODS

    //initialize and instatiate
    public Start(): void {
      this._cloudNumber = config.Game.CLOUD_NUM;
      // create an array of cloud objects
      for (let index = 0; index < this._cloudNumber; index++) {
        //this._clouds[index] = new objects.Cloud();
      }

      this.Main();
    }

    public Update(): void {}

    public Main(): void {}
  }
}
