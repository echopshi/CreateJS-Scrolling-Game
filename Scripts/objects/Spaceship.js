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
    var Spaceship = /** @class */ (function (_super) {
        __extends(Spaceship, _super);
        // PUBLIC PROPERTIES
        // CONTRUCTOR
        function Spaceship() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("avatar"), 0, 0, true) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Spaceship.prototype._checkBounds = function () {
            // left boundary
            if (this.position.x <= this.halfWidth) {
                this.position = new objects.Vector2(this.halfWidth, this.position.y);
            }
            // right boundary
            if (this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth) {
                this.position = new objects.Vector2(config.Game.SCREEN_WIDTH - this.halfWidth, this.position.y);
            }
        };
        Spaceship.prototype._move = function () {
            var newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, 0.05);
            this.position = new objects.Vector2(newPositionX, this._verticalPosition);
        };
        // PUBLIC METHODS
        Spaceship.prototype.Start = function () {
            this.type = enums.GameObjectTypes.SPACESHIP;
            this._verticalPosition = 610; // locked to the bottom of the screen
        };
        Spaceship.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Spaceship.prototype.Reset = function () { };
        Spaceship.prototype.shoot = function (aim) {
            var bulletFireSound = createjs.Sound.play("bulletFireSound");
            bulletFireSound.volume = 0.2;
            return new objects.Bullet(this.position.x, this.position.y - 40, aim);
        };
        return Spaceship;
    }(objects.GameObject));
    objects.Spaceship = Spaceship;
})(objects || (objects = {}));
//# sourceMappingURL=Spaceship.js.map