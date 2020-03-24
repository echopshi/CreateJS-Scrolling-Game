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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
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
            this._currentTicker = createjs.Ticker.getTicks();
            this.Main();
        };
        Play.prototype.Update = function () {
            // make scrolling universe background
            this._universe.Update();
            // movement of the spaceship
            this._spaceship.Update();
            // shooting even for the spaceship
            this.fireBullet();
            // update each monster in the list
            for (var index = 0; index < this._monsterNum; index++) {
                var monster = this._monsters[index];
                monster.Update();
                // check if the monster escaped or not
                if (monster.escape) {
                    // if monster escaped, remove from scene and then create an new one
                    this.removeChild(monster);
                    this._monsters[index] = new objects.Monster();
                    this.addChild(this._monsters[index]);
                }
            }
            this._bullets.forEach(function (bullet) {
                bullet.Update();
            });
        };
        Play.prototype.Main = function () {
            var _this = this;
            // add universe background
            this.addChild(this._universe);
            // add player controlled spaceship
            this.addChild(this._spaceship);
            // add the initial list of monsters
            this._monsters.forEach(function (monster) {
                _this.addChild(monster);
            });
        };
        Play.prototype.fireBullet = function () {
            if (this._currentTicker + 10 == createjs.Ticker.getTicks()) {
                var bullet = this._spaceship.shoot(objects.Vector2.up());
                this.addChild(bullet);
                this._bullets.push(bullet);
                this._currentTicker = createjs.Ticker.getTicks();
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map