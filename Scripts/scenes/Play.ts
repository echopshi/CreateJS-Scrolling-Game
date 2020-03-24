module scenes {
  export class Play extends objects.Scene {
    // PRIVATE INSTANCE MEMBERS
    private _universe: objects.Universe;

    private _monsterNum: number;
    private _monsters: objects.Monster[];

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
      this._universe = new objects.Universe();

      this._monsterNum = config.Game.MONSTER_NUM;
      this._monsters = new Array<objects.Monster>();

      // create an array of monster objects
      for (let index = 0; index < this._monsterNum; index++) {
        this._monsters[index] = new objects.Monster();
      }

      this.Main();
    }

    public Update(): void {
      this._universe.Update();
      this._monsters.forEach(monster => {
        monster.Update();
      });
    }

    public Main(): void {
      this.addChild(this._universe);
      this._monsters.forEach(monster => {
        this.addChild(monster);
      });
    }
  }
}
