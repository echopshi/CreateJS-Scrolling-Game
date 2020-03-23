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
    var Instruction = /** @class */ (function (_super) {
        __extends(Instruction, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Instruction() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Instruction.prototype.Start = function () {
            // Images
            this._titleImage = new objects.Image(config.Game.ASSETS.getResult("spaceshipFreedomLogo"), 320, 80, 600, 100, true);
            this._instructionImage = new objects.Image(config.Game.ASSETS.getResult("instructionLogo"), 150, 150, 60, 75, true);
            // Label
            var instruction = "1. Bullet hits Monster, Score + 10\n\n" +
                "2. Spaceship hits Monster, Live – 1\n\n" +
                "3. Monster escape, Live – 1\n\n" +
                "4. Spaceship interacts Planet, Bullet + 100\n\n" +
                "5. Live = 0 or Bullet = 0, Game Over\n\n";
            this._instructionLabel = new objects.Label(instruction, "24px", "Consolas", "#FFFFFF", 50, 180, false);
            // buttons
            this._playButton = new objects.Button(config.Game.ASSETS.getResult("playButton"), 140, 420, true);
            this._exitButton = new objects.Button(config.Game.ASSETS.getResult("exitToMenuButton"), 500, 420, true);
            this._universe = new objects.Universe();
            this.Main();
        };
        Instruction.prototype.Update = function () {
            this._universe.Update();
        };
        Instruction.prototype.Main = function () {
            this.addChild(this._universe);
            this.addChild(this._titleImage);
            this.addChild(this._instructionImage);
            this.addChild(this._instructionLabel);
            this.addChild(this._playButton);
            this.addChild(this._exitButton);
            this._playButton.on("click", function () {
                config.Game.SCENE = scenes.State.PLAY;
            });
            this._exitButton.on("click", function () {
                config.Game.SCENE = scenes.State.START;
            });
        };
        return Instruction;
    }(objects.Scene));
    scenes.Instruction = Instruction;
})(scenes || (scenes = {}));
//# sourceMappingURL=Instruction.js.map