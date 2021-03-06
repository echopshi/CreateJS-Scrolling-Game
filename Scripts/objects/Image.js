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
 * File Name: Image.ts
 * Modified on: April 01, 2020
 * Game App Description: CreateJS Slot Machine
 * Revision History: available in GitHub
 */
var objects;
(function (objects) {
    var Image = /** @class */ (function (_super) {
        __extends(Image, _super);
        // constructor
        function Image(imagePath, x, y, width, height, isCentered) {
            if (imagePath === void 0) { imagePath = config.Game.ASSETS.getResult("button"); }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, imagePath, x, y, isCentered) || this;
            _super.prototype.CustomSize.call(_this, width, height, isCentered);
            _this.Start();
            return _this;
        }
        // PRIVATE LIFE CYCLE METHODS
        Image.prototype._checkBounds = function () { };
        // PUBLIC LIFE CYCLE METHODS
        Image.prototype.Start = function () {
            this.name = "Image";
        };
        Image.prototype.Update = function () { };
        Image.prototype.Reset = function () { };
        return Image;
    }(objects.GameObject));
    objects.Image = Image;
})(objects || (objects = {}));
//# sourceMappingURL=Image.js.map