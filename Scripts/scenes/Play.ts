module scenes {
  export class Play extends objects.Scene {
    // PRIVATE INSTANCE MEMBERS
    private _universe: objects.Universe;
    private _spaceship: objects.Spaceship;

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
      this._spaceship = new objects.Spaceship();

      this._monsterNum = config.Game.MONSTER_NUM;
      this._monsters = new Array<objects.Monster>();

      // create an array of monster objects
      for (let index = 0; index < this._monsterNum; index++) {
        this._monsters[index] = new objects.Monster();
      }

      this.Main();
    }

    public Update(): void {
      // make scrolling universe background
      this._universe.Update();

      // movement of the spaceship
      this._spaceship.Update();

      // update each monster in the list
      for (let index = 0; index < this._monsterNum; index++) {
        let monster = this._monsters[index];
        monster.Update();
        // check if the monster escaped or not
        if (monster.escape) {
          // if monster escaped, remove from scene and then create an new one
          this.removeChild(monster);
          this._monsters[index] = new objects.Monster();
          this.addChild(this._monsters[index]);
        }
      }
    }

    public Main(): void {
      // add universe background
      this.addChild(this._universe);

      // add player controlled spaceship
      this.addChild(this._spaceship);

      // add the initial list of monsters
      this._monsters.forEach(monster => {
        this.addChild(monster);
      });
    }
  }
}
