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
        // CONSTRUCTOR
        function Monster() {
            var _this = this;
            // random generate different monster
            var randomMonster = util.Mathf.RandomRange(1, 4);
            if (randomMonster < 2) {
                _this = _super.call(this, config.Game.ASSETS.getResult("monsterA"), new objects.Vector2(), true) || this;
                _this.type = enums.GameObjectTypes.MONSTERA;
                _this._lives = 1;
            }
            else if (randomMonster < 3) {
                _this = _super.call(this, config.Game.ASSETS.getResult("monsterB"), new objects.Vector2(), true) || this;
                _this.type = enums.GameObjectTypes.MONSTERB;
                _this._lives = 1;
            }
            else if (randomMonster < 4) {
                _this = _super.call(this, config.Game.ASSETS.getResult("monsterC"), new objects.Vector2(), true) || this;
                _this.type = enums.GameObjectTypes.MONSTERC;
                _this._lives = 2;
            }
            else {
                _this = _super.call(this, config.Game.ASSETS.getResult("monsterD"), new objects.Vector2(), true) || this;
                _this.type = enums.GameObjectTypes.MONSTERD;
                _this._lives = 2;
            }
            // initial escape is false
            _this._escape = false;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Monster.prototype, "lives", {
            get: function () {
                return this._lives;
            },
            // PUBLIC PROPERTIES
            set: function (v) {
                this._lives = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Monster.prototype, "escape", {
            get: function () {
                return this._escape;
            },
            enumerable: true,
            configurable: true
        });
        // PRIVATE METHODS
        Monster.prototype._checkBounds = function () {
            // check vertical boundary
            if (this.position.y > config.Game.SCREEN_HEIGHT + this.height) {
                this._escape = true;
            }
            // check horizontal boundary
            if (this.position.x < this.halfWidth ||
                this.position.x > config.Game.SCREEN_WIDTH - this.halfWidth) {
                this._horizontalSpeed = -this._horizontalSpeed;
                this.velocity = new objects.Vector2(this._horizontalSpeed, this._verticalSpeed);
            }
        };
        Monster.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        // PUBLIC METHODS
        Monster.prototype.Start = function () {
            this.alpha = 0.8; // transparency set to 80%
            this.Reset();
        };
        Monster.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Monster.prototype.Reset = function () {
            this._verticalSpeed = util.Mathf.RandomRange(2, 4); // speed ranges from 2 to 5 px per frame
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