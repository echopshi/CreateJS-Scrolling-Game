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
 * File Name: Start.ts
 * Modified on: April 04, 2020
 * Game App Description: CreateJS Slot Machine
 * Revision History: available in GitHub
 */
var scenes;
(function (scenes) {
    var Exit = /** @class */ (function (_super) {
        __extends(Exit, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Exit() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Exit.prototype.Start = function () {
            // Images
            this._titleImage = new objects.Image(config.Game.ASSETS.getResult("spaceshipFreedomLogo"), 320, 220, 600, 100, true);
            this._universe = new objects.Universe();
            this._thankYouLabel = new objects.Label("Thank you for playing this game!", "32px", "Consolas", "#FFFFFF", 50, 320, false);
            this.Main();
        };
        Exit.prototype.Update = function () {
            this._universe.Update();
        };
        Exit.prototype.Main = function () {
            this.addChild(this._universe);
            this.addChild(this._titleImage);
            this.addChild(this._thankYouLabel);
        };
        Exit.prototype.Clean = function () { };
        return Exit;
    }(objects.Scene));
    scenes.Exit = Exit;
})(scenes || (scenes = {}));
//# sourceMappingURL=Exit.js.map