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
    var Icon = /** @class */ (function (_super) {
        __extends(Icon, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Icon(type) {
            var _this = this;
            switch (type) {
                case enums.GameObjectTypes.LIVEICON:
                    _this = _super.call(this, config.Game.ASSETS.getResult("liveIcon"), new objects.Vector2(), true) || this;
                    break;
                case enums.GameObjectTypes.STARICON:
                    _this = _super.call(this, config.Game.ASSETS.getResult("starIcon"), new objects.Vector2(), true) || this;
                    break;
                case enums.GameObjectTypes.PLANET:
                    _this = _super.call(this, config.Game.ASSETS.getResult("planet"), new objects.Vector2(), true) || this;
                    break;
            }
            _this.type = type;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Icon.prototype._checkBounds = function () {
            if (this.position.y == -1000 ||
                this.position.y > config.Game.SCREEN_HEIGHT + this.height) {
                this.velocity = new objects.Vector2();
                if (this.type == enums.GameObjectTypes.PLANET &&
                    config.Game.CURRENT_PLANET_TICKER + 500 == createjs.Ticker.getTicks()) {
                    this.Reset();
                    config.Game.CURRENT_PLANET_TICKER = createjs.Ticker.getTicks();
                }
                if (this.type == enums.GameObjectTypes.STARICON &&
                    config.Game.CURRENT_STARICON_TICKER + 700 ==
                        createjs.Ticker.getTicks()) {
                    this.Reset();
                    config.Game.CURRENT_STARICON_TICKER = createjs.Ticker.getTicks();
                }
                if (this.type == enums.GameObjectTypes.LIVEICON &&
                    config.Game.CURRENT_LIVEICON_TICKER + 1300 ==
                        createjs.Ticker.getTicks()) {
                    this.Reset();
                    config.Game.CURRENT_LIVEICON_TICKER = createjs.Ticker.getTicks();
                }
            }
        };
        Icon.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        // PUBLIC METHODS
        Icon.prototype.Start = function () {
            switch (this.type) {
                case enums.GameObjectTypes.LIVEICON:
                    config.Game.CURRENT_LIVEICON_TICKER = createjs.Ticker.getTicks();
                    break;
                case enums.GameObjectTypes.STARICON:
                    config.Game.CURRENT_STARICON_TICKER = createjs.Ticker.getTicks();
                    break;
                case enums.GameObjectTypes.PLANET:
                    config.Game.CURRENT_PLANET_TICKER = createjs.Ticker.getTicks();
                    break;
            }
            this._verticalSpeed = 5;
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this.Reset();
        };
        Icon.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Icon.prototype.Reset = function () {
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            var randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            this.position = new objects.Vector2(randomX, -this.height, this);
        };
        Icon.prototype.Collected = function () {
            this.position = new objects.Vector2(-1000, -1000);
            this.velocity = objects.Vector2.zero();
        };
        return Icon;
    }(objects.GameObject));
    objects.Icon = Icon;
})(objects || (objects = {}));
//# sourceMappingURL=Icon.js.map