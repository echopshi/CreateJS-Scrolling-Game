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
/**
 * Author: Hang Li
 * Student Number: 300993981
 * File Name: Universe.ts
 * Modified on: April 01, 2020
 * Game App Description: CreateJS Slot Machine
 * Revision History: available in GitHub
 */
var objects;
(function (objects) {
    var Universe = /** @class */ (function (_super) {
        __extends(Universe, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Universe() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("universe")) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Universe.prototype._checkBounds = function () {
            if (this.y >= 0) {
                this.Reset();
            }
        };
        Universe.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        // PUBLIC METHODS
        Universe.prototype.Start = function () {
            this.type = enums.GameObjectTypes.UNIVERSE;
            this._verticalSpeed = 5;
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this.Reset();
        };
        Universe.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Universe.prototype.Reset = function () {
            this.position = new objects.Vector2(0, -1200);
        };
        return Universe;
    }(objects.GameObject));
    objects.Universe = Universe;
})(objects || (objects = {}));
//# sourceMappingURL=Universe.js.map