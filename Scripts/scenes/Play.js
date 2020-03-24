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
            this._monsterNum = config.Game.MONSTER_NUM;
            this._monsters = new Array();
            // create an array of monster objects
            for (var index = 0; index < this._monsterNum; index++) {
                this._monsters[index] = new objects.Monster();
            }
            this.Main();
        };
        Play.prototype.Update = function () {
            this._universe.Update();
            this._monsters.forEach(function (monster) {
                monster.Update();
            });
        };
        Play.prototype.Main = function () {
            var _this = this;
            this.addChild(this._universe);
            this._monsters.forEach(function (monster) {
                _this.addChild(monster);
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map