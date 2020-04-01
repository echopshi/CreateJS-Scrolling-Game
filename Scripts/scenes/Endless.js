"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Endless = /** @class */ (function (_super) {
        __extends(Endless, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Endless() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Endless.prototype.Start = function () {
            // initilize the game objects
            this._universe = new objects.Universe();
            this._spaceship = new objects.Spaceship();
            this._monsterNum = config.Game.MONSTER_NUM;
            this._monsters = new Array();
            this._bullets = new Array();
            // create an array of monster objects
            for (var index = 0; index < this._monsterNum; index++) {
                this._monsters[index] = new objects.Monster();
            }
            // initialize current ticker
            config.Game.CURRENT_BULLET_TICKER = createjs.Ticker.getTicks();
            // initial the score board
            this._scoreBoard = new managers.ScoreBoard();
            config.Game.SCORE_BOARD = this._scoreBoard;
            this._bulletLabel = new objects.Label("Bullets: INFINITY", "20px", "Consolas", "#FFFF00", 300, 20, true);
            // add background sound
            this._backgroundSound = createjs.Sound.play("backgroundSound");
            this._backgroundSound.loop = -1;
            this._backgroundSound.volume = 0.2;
            this.Main();
        };
        Endless.prototype.Update = function () {
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
        };
        Endless.prototype.Main = function () {
            var _this = this;
            // add universe background
            this.addChild(this._universe);
            // add the score board labels
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._bulletLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
            // add player controlled spaceship
            this.addChild(this._spaceship);
            // add the initial list of monsters
            this._monsters.forEach(function (monster) {
                _this.addChild(monster);
            });
        };
        Endless.prototype.Clean = function () {
            this._backgroundSound.stop();
            this.removeAllChildren();
        };
        Endless.prototype.fireBullet = function () {
            if (config.Game.CURRENT_BULLET_TICKER + 10 ==
                createjs.Ticker.getTicks()) {
                var bullet = this._spaceship.shoot(objects.Vector2.up());
                this.addChild(bullet);
                this._bullets.push(bullet);
                config.Game.CURRENT_BULLET_TICKER = createjs.Ticker.getTicks();
            }
        };
        Endless.prototype.updateMonsters = function () {
            for (var index = 0; index < this._monsterNum; index++) {
                var monster = this._monsters[index];
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
                    var lostLiveSound = createjs.Sound.play("lostLivesSound");
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
        };
        Endless.prototype.updateBullets = function () {
            var _this = this;
            this._bullets.forEach(function (bullet) {
                if (bullet.Active) {
                    bullet.Update();
                    // collision detection
                    for (var index = 0; index < _this._monsterNum; index++) {
                        if (managers.Collision.squaredRadiusCheck(_this._monsters[index], bullet)) {
                            _this.removeChild(bullet);
                            bullet.Reset();
                            _this._monsters[index].lives -= 1;
                            if (_this._monsters[index].lives < 1) {
                                _this.removeChild(_this._monsters[index]);
                                _this._monsters[index] = new objects.Monster();
                                _this.addChild(_this._monsters[index]);
                            }
                        }
                    }
                }
            });
        };
        return Endless;
    }(objects.Scene));
    scenes.Endless = Endless;
})(scenes || (scenes = {}));
//# sourceMappingURL=Endless.js.map