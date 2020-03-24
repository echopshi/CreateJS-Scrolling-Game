module scenes {
  export class Play extends objects.Scene {
    // PRIVATE INSTANCE MEMBERS
    private _universe: objects.Universe;
    private _spaceship: objects.Spaceship;
    private _planet: objects.Planet;

    private _monsterNum: number;
    private _monsters: objects.Monster[];

    private _bulletNum: number;
    private _bullets: objects.Bullet[];

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
      this._planet = new objects.Planet();

      this._monsterNum = config.Game.MONSTER_NUM;
      this._monsters = new Array<objects.Monster>();

      this._bullets = new Array<objects.Bullet>();

      // create an array of monster objects
      for (let index = 0; index < this._monsterNum; index++) {
        this._monsters[index] = new objects.Monster();
      }

      // initialize current ticker
      config.Game.CURREN_BULLET_TICKER = createjs.Ticker.getTicks();

      this.Main();
    }

    public Update(): void {
      // make scrolling universe background
      this._universe.Update();

      // movement of the plant
      this._planet.Update();

      // movement of the spaceship
      this._spaceship.Update();

      // collision detection for spaceship and planet
      managers.Collision.squaredRadiusCheck(this._spaceship, this._planet);

      // shooting event for the spaceship
      this.fireBullet();

      // update each monster in the list
      this.updateMonsters();

      // update each bullet in the list
      this.updateBullets();
    }

    public Main(): void {
      // add universe background
      this.addChild(this._universe);

      // add planet
      this.addChild(this._planet);

      // add player controlled spaceship
      this.addChild(this._spaceship);

      // add the initial list of monsters
      this._monsters.forEach(monster => {
        this.addChild(monster);
      });
    }

    public fireBullet(): void {
      if (config.Game.CURREN_BULLET_TICKER + 10 == createjs.Ticker.getTicks()) {
        let bullet = this._spaceship.shoot(objects.Vector2.up());
        this.addChild(bullet);
        this._bullets.push(bullet);
        config.Game.CURREN_BULLET_TICKER = createjs.Ticker.getTicks();
      }
    }

    public updateMonsters() {
      for (let index = 0; index < this._monsterNum; index++) {
        let monster = this._monsters[index];
        // update monster movements
        monster.Update();
        // collision detection
        managers.Collision.squaredRadiusCheck(this._spaceship, monster);
        // check if the monster escaped or not
        if (monster.escape) {
          // if monster escaped, remove from scene and then create an new one
          this.removeChild(monster);
          this._monsters[index] = new objects.Monster();
          this.addChild(this._monsters[index]);
        }
      }
    }

    public updateBullets() {
      this._bullets.forEach(bullet => {
        bullet.Update();
        // collision detection
        for (let index = 0; index < this._monsterNum; index++) {
          if (
            managers.Collision.squaredRadiusCheck(this._monsters[index], bullet)
          ) {
            this.removeChild(bullet);
            this.removeChild(this._monsters[index]);
            this._monsters[index] = new objects.Monster();
            this.addChild(this._monsters[index]);
          }
        }
      });
    }
  }
}
