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
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Start.prototype.Start = function () {
            // Images
            this._titleImage = new objects.Image(config.Game.ASSETS.getResult("spaceshipFreedomLogo"), 320, 220, 600, 100, true);
            this._monsterAImage = new objects.Image(config.Game.ASSETS.getResult("monsterA"), 140, 100, 60, 75, true);
            this._monsterBImage = new objects.Image(config.Game.ASSETS.getResult("monsterB"), 265, 100, 60, 75, true);
            this._monsterCImage = new objects.Image(config.Game.ASSETS.getResult("monsterC"), 390, 100, 60, 75, true);
            this._monsterDImage = new objects.Image(config.Game.ASSETS.getResult("monsterD"), 515, 100, 60, 75, true);
            this._avatarImage = new objects.Image(config.Game.ASSETS.getResult("avatar"), 265, 400, 60, 75, true);
            this._planetImage = new objects.Image(config.Game.ASSETS.getResult("planet"), 390, 400, 60, 75, true);
            this._liveImage = new objects.Image(config.Game.ASSETS.getResult("liveIcon"), 140, 400, 45, 45, true);
            this._starImage = new objects.Image(config.Game.ASSETS.getResult("starIcon"), 515, 400, 45, 45, true);
            // buttons
            this._playButton = new objects.Button(config.Game.ASSETS.getResult("playButton"), 140, 560, true);
            this._instructionButton = new objects.Button(config.Game.ASSETS.getResult("instructionButton"), 320, 565, true);
            this._exitButton = new objects.Button(config.Game.ASSETS.getResult("exitButton"), 500, 560, true);
            this._universe = new objects.Universe();
            this.Main();
        };
        Start.prototype.Update = function () {
            this._universe.Update();
        };
        Start.prototype.Main = function () {
            this.addChild(this._universe);
            this.addChild(this._monsterAImage);
            this.addChild(this._monsterBImage);
            this.addChild(this._monsterCImage);
            this.addChild(this._monsterDImage);
            this.addChild(this._titleImage);
            this.addChild(this._liveImage);
            this.addChild(this._avatarImage);
            this.addChild(this._planetImage);
            this.addChild(this._starImage);
            this.addChild(this._playButton);
            this.addChild(this._instructionButton);
            this.addChild(this._exitButton);
            this._instructionButton.on("click", function () {
                config.Game.SCENE = scenes.State.INSTRUCTION;
            });
            this._playButton.on("click", function () {
                config.Game.LIVES = 5;
                config.Game.BULLETS = 99;
                config.Game.SCORE = 0;
                config.Game.SCENE = scenes.State.PLAY;
            });
            this._exitButton.on("click", function () {
                config.Game.SCENE = scenes.State.END;
            });
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map