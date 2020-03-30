module scenes {
  export class Play extends objects.Scene {
    // PRIVATE INSTANCE MEMBERS
    private _universe: objects.Universe;
    private _spaceship: objects.Spaceship;
    private _planet: objects.Icon;
    private _liveIcon: objects.Icon;
    private _starIcon: objects.Icon;

    private _monsterNum: number;
    private _monsters: objects.Monster[];
    private _bullets: objects.Bullet[];

    private _scoreBoard: managers.ScoreBoard;

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
      this._planet = new objects.Icon(enums.GameObjectTypes.PLANET);
      config.Game.PLANET_ICON = this._planet;
      this._liveIcon = new objects.Icon(enums.GameObjectTypes.LIVEICON);
      config.Game.LIVE_ICON = this._liveIcon;
      this._starIcon = new objects.Icon(enums.GameObjectTypes.STARICON);
      config.Game.STAR_ICON = this._starIcon;

      this._monsterNum = config.Game.MONSTER_NUM;
      this._monsters = new Array<objects.Monster>();

      this._bullets = new Array<objects.Bullet>();

      // create an array of monster objects
      for (let index = 0; index < this._monsterNum; index++) {
        this._monsters[index] = new objects.Monster();
      }

      // initialize current ticker
      config.Game.CURRENT_BULLET_TICKER = createjs.Ticker.getTicks();

      // initial the score board
      this._scoreBoard = new managers.ScoreBoard();
      config.Game.SCORE_BOARD = this._scoreBoard;

      this.Main();
    }

    public Update(): void {
      // make scrolling universe background
      this._universe.Update();

      // movement of the plant, live, and star icons
      this._planet.Update();
      this._liveIcon.Update();
      this._starIcon.Update();

      // movement of the spaceship
      this._spaceship.Update();

      // collision detection for spaceship and planet
      managers.Collision.squaredRadiusCheck(this._spaceship, this._planet);
      managers.Collision.squaredRadiusCheck(this._spaceship, this._liveIcon);
      managers.Collision.squaredRadiusCheck(this._spaceship, this._starIcon);

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

      // add the score board labels
      this.addChild(this._scoreBoard.LivesLabel);
      this.addChild(this._scoreBoard.BulletsLabel);
      this.addChild(this._scoreBoard.ScoreLabel);

      // add planet, live, and star icons
      this.addChild(this._planet);
      this.addChild(this._liveIcon);
      this.addChild(this._starIcon);

      // hide live and star icon for first time
      this._liveIcon.Collected();
      this._starIcon.Collected();

      // add player controlled spaceship
      this.addChild(this._spaceship);

      // add the initial list of monsters
      this._monsters.forEach(monster => {
        this.addChild(monster);
      });
    }

    public fireBullet(): void {
      if (
        config.Game.CURRENT_BULLET_TICKER + 10 ==
        createjs.Ticker.getTicks()
      ) {
        if (config.Game.SCORE_BOARD.Bullets > 0) {
          config.Game.SCORE_BOARD.Bullets -= 1;
          let bullet = this._spaceship.shoot(objects.Vector2.up());
          this.addChild(bullet);
          this._bullets.push(bullet);
        }
        config.Game.CURRENT_BULLET_TICKER = createjs.Ticker.getTicks();
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
          // if monster escaped, detect lives
          config.Game.SCORE_BOARD.Lives -= 1;
          //remove from scene and then create an new one
          this.removeChild(monster);
          this._monsters[index] = new objects.Monster();
          this.addChild(this._monsters[index]);
          // go to end scene if lives less zero
          if (config.Game.LIVES < 1) {
            config.Game.SCENE = scenes.State.END;
          }
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
            bullet.Reset();
            this._monsters[index].lives -= 1;
            if (this._monsters[index].lives < 1) {
              this.removeChild(this._monsters[index]);
              this._monsters[index] = new objects.Monster();
              this.addChild(this._monsters[index]);
            }
          }
        }
      });
    }
  }
}
