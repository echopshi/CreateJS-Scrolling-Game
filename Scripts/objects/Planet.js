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
    var Planet = /** @class */ (function (_super) {
        __extends(Planet, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Planet() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("planet"), new objects.Vector2(), true) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Planet.prototype._checkBounds = function () {
            if (this.position.y > config.Game.SCREEN_HEIGHT + this.height) {
                this.velocity = new objects.Vector2();
                if (config.Game.CURREN_PLANET_TICKER + 1000 ==
                    createjs.Ticker.getTicks()) {
                    this.Reset();
                    config.Game.CURREN_PLANET_TICKER = createjs.Ticker.getTicks();
                }
            }
        };
        Planet.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        // PUBLIC METHODS
        Planet.prototype.Start = function () {
            this.name = "planet";
            config.Game.CURREN_PLANET_TICKER = createjs.Ticker.getTicks();
            this._verticalSpeed = 5;
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this.Reset();
        };
        Planet.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Planet.prototype.Reset = function () {
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            var randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            this.position = new objects.Vector2(randomX, -this.height, this);
        };
        return Planet;
    }(objects.GameObject));
    objects.Planet = Planet;
})(objects || (objects = {}));
//# sourceMappingURL=Planet.js.map