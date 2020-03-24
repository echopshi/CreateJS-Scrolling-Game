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
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Bullet(x, y, direction) {
            var _this = _super.call(this, config.Game.ASSETS.getResult("bullet"), x, y, true) || this;
            _this._direction = direction;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Bullet.prototype._checkBounds = function () {
            // check horizontal boundary
            if (this.x <= this.halfWidth ||
                this.x >= config.Game.SCREEN_WIDTH - this.halfWidth) {
                this.velocity = objects.Vector2.zero();
            }
        };
        Bullet.prototype._move = function () {
            this.position.add(this.velocity);
            this.position = new objects.Vector2(this.position.x, this.position.y);
        };
        // PUBLIC METHODS
        Bullet.prototype.Start = function () {
            this.name = "bullet";
            var speed = 10;
            this._direction.scale(speed);
            this.velocity = this._direction;
        };
        Bullet.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Bullet.prototype.Reset = function () { };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=Bullet.js.map