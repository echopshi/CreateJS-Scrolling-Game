module scenes {
  export class Endless extends objects.Scene {
    // PRIVATE INSTANCE MEMBERS
    private _universe: objects.Universe;
    private _spaceship: objects.Spaceship;
    private _monsterNum: number;
    private _monsters: objects.Monster[];
    private _bullets: objects.Bullet[];

    private _scoreBoard: managers.ScoreBoard;
    private _bulletLabel: objects.Label;

    private _backgroundSound: createjs.AbstractSoundInstance;

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
      // initilize the game objects
      this._universe = new objects.Universe();
      this._spaceship = new objects.Spaceship();

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

      this._bulletLabel = new objects.Label(
        "Bullets: INFINITY",
        "20px",
        "Consolas",
        "#FFFF00",
        300,
        20,
        true
      );

      // add background sound
      this._backgroundSound = createjs.Sound.play("backgroundSound");
      this._backgroundSound.loop = -1;
      this._backgroundSound.volume = 0.2;

      this.Main();
    }

    public Update(): void {
      // make scrolling universe background
      this._universe.Update();

      // movement of the spaceship
      this._spaceship.Update();

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
      this.addChild(this._bulletLabel);
      this.addChild(this._scoreBoard.ScoreLabel);

      // add player controlled spaceship
      this.addChild(this._spaceship);

      // add the initial list of monsters
      this._monsters.forEach(monster => {
        this.addChild(monster);
      });
    }

    public Clean(): void {
      this._backgroundSound.stop();
      this.removeAllChildren();
    }

    public fireBullet(): void {
      if (
        config.Game.CURRENT_BULLET_TICKER + 10 ==
        createjs.Ticker.getTicks()
      ) {
        let bullet = this._spaceship.shoot(objects.Vector2.up());
        this.addChild(bullet);
        this._bullets.push(bullet);
        config.Game.CURRENT_BULLET_TICKER = createjs.Ticker.getTicks();
      }
    }

    public updateMonsters() {
      for (let index = 0; index < this._monsterNum; index++) {
        let monster = this._monsters[index];
        // update monster movements
        monster.Update();
        // collision detection
        if (managers.Collision.squaredRadiusCheck(this._spaceship, monster)) {
          //remove from scene and then create an new one
          this.removeChild(monster);
          this._monsters[index] = new objects.Monster();
          this.addChild(this._monsters[index]);
        }
        // check if the monster escaped or not
        if (monster.escape) {
          let lostLiveSound = createjs.Sound.play("lostLivesSound");
          lostLiveSound.volume = 0.25;
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
        if (bullet.Active) {
          bullet.Update();
          // collision detection
          for (let index = 0; index < this._monsterNum; index++) {
            if (
              managers.Collision.squaredRadiusCheck(
                this._monsters[index],
                bullet
              )
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
        }
      });
    }
  }
}
