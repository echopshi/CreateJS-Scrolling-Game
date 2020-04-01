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
 * File Name: End.ts
 * Modified on: April 01, 2020
 * Game App Description: CreateJS Slot Machine
 * Revision History: available in GitHub
 */
var scenes;
(function (scenes) {
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function End() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        // Initializing and Instantiating
        End.prototype.Start = function () {
            this._universe = new objects.Universe();
            this._scoreBoard = new managers.ScoreBoard();
            // Image
            this._gameOverImage = new objects.Image(config.Game.ASSETS.getResult("gameOverLogo"), 320, 220, 600, 100, true);
            this._monsterAImage = new objects.Image(config.Game.ASSETS.getResult("monsterA"), 140, 100, 60, 75, true);
            this._monsterBImage = new objects.Image(config.Game.ASSETS.getResult("monsterB"), 265, 100, 60, 75, true);
            this._monsterCImage = new objects.Image(config.Game.ASSETS.getResult("monsterC"), 390, 100, 60, 75, true);
            this._monsterDImage = new objects.Image(config.Game.ASSETS.getResult("monsterD"), 515, 100, 60, 75, true);
            // labels
            this._scoreLabel = new objects.Label("Current Score: " + config.Game.SCORE, "24px", "Consolas", "#FFFFFF", 320, 350, true);
            // buttons
            this._restartButton = new objects.Button(config.Game.ASSETS.getResult("playAgainButton"), 140, 560, true);
            this._playEndlessButton = new objects.Button(config.Game.ASSETS.getResult("playEndlessButton"), 320, 560, true);
            this._exitButton = new objects.Button(config.Game.ASSETS.getResult("exitToMenuButton"), 500, 560, true);
            this.Main();
        };
        End.prototype.Update = function () {
            this._universe.Update();
        };
        End.prototype.Main = function () {
            // add images to scene
            this.addChild(this._universe);
            this.addChild(this._monsterAImage);
            this.addChild(this._monsterBImage);
            this.addChild(this._monsterCImage);
            this.addChild(this._monsterDImage);
            this.addChild(this._gameOverImage);
            // add labels to scene
            this.addChild(this._scoreLabel);
            this.addChild(this._scoreBoard.HighScoreLabel);
            // add buttons to scene
            this.addChild(this._restartButton);
            this.addChild(this._playEndlessButton);
            this.addChild(this._exitButton);
            this._restartButton.on("click", function () {
                config.Game.LIVES = 5;
                config.Game.BULLETS = 99;
                config.Game.SCORE = 0;
                config.Game.SCENE = scenes.State.PLAY;
            });
            this._playEndlessButton.on("click", function () {
                config.Game.LIVES = 5;
                config.Game.BULLETS = 99;
                config.Game.SCORE = 0;
                config.Game.SCENE = scenes.State.ENDLESS;
            });
            this._exitButton.on("click", function () {
                config.Game.SCENE = scenes.State.START;
            });
        };
        End.prototype.Clean = function () { };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=End.js.map