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
var objects;
(function (objects) {
    var Monster = /** @class */ (function (_super) {
        __extends(Monster, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Monster() {
            var _this = this;
            var randomMonster = util.Mathf.RandomRange(1, 4);
            if (randomMonster < 2) {
                _this = _super.call(this, config.Game.ASSETS.getResult("monsterA"), new objects.Vector2(), true) || this;
                _this.name = "MonsterA";
            }
            else if (randomMonster < 3) {
                _this = _super.call(this, config.Game.ASSETS.getResult("monsterB"), new objects.Vector2(), true) || this;
                _this.name = "MonsterB";
            }
            else if (randomMonster < 4) {
                _this = _super.call(this, config.Game.ASSETS.getResult("monsterC"), new objects.Vector2(), true) || this;
                _this.name = "MonsterC";
            }
            else {
                _this = _super.call(this, config.Game.ASSETS.getResult("monsterD"), new objects.Vector2(), true) || this;
                _this.name = "MonsterD";
            }
            _this.position = new objects.Vector2(_this.width, _this.height);
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Monster.prototype._checkBounds = function () {
            if (this.position.y > config.Game.SCREEN_HEIGHT + this.height) {
                this.Reset();
            }
            // check horizontal boundary
            if (this.position.x < this.width ||
                this.position.x > config.Game.SCREEN_WIDTH - this.width) {
                this.velocity = new objects.Vector2(-this._horizontalSpeed, this._verticalSpeed);
            }
        };
        Monster.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        // PUBLIC METHODS
        Monster.prototype.Start = function () {
            this.name = "Monster";
            this.alpha = 0.7; // transparency set to 70%
            this.Reset();
        };
        Monster.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Monster.prototype.Reset = function () {
            this._verticalSpeed = util.Mathf.RandomRange(2, 5); // speed ranges from 2 to 5 px per frame
            this._horizontalSpeed = util.Mathf.RandomRange(-1, 1); // random horizontal drift
            this.velocity = new objects.Vector2(this._horizontalSpeed, this._verticalSpeed);
            var randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            var randomY = util.Mathf.RandomRange(-this.height * 2, -this.height);
            this.position = new objects.Vector2(randomX, randomY, this);
        };
        return Monster;
    }(objects.GameObject));
    objects.Monster = Monster;
})(objects || (objects = {}));
//# sourceMappingURL=Monster.js.map