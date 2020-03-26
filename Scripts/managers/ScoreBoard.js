"use strict";
var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function () {
        // constructor
        function ScoreBoard() {
            this._initialize();
        }
        Object.defineProperty(ScoreBoard.prototype, "Lives", {
            // public properties
            get: function () {
                return this._lives;
            },
            set: function (v) {
                this._lives = v;
                config.Game.LIVES = this._lives;
                this.LivesLabel.setText("Lives: " + this._lives);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Bullets", {
            get: function () {
                return this._bullets;
            },
            set: function (v) {
                this._bullets = v;
                config.Game.BULLETS = this._bullets;
                this.BulletsLabel.setText("Bullets: " + this._bullets);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Score", {
            get: function () {
                return this._score;
            },
            set: function (v) {
                this._score = v;
                config.Game.SCORE = this._score;
                this.ScoreLabel.setText("Score: " + this._score);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScore", {
            get: function () {
                return this._highScore;
            },
            set: function (v) {
                this._highScore = v;
                config.Game.HIGH_SCORE = this._highScore;
                this.HighScoreLabel.setText("High Score: " + this._highScore);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "LivesLabel", {
            get: function () {
                return this._livesLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "BulletsLabel", {
            get: function () {
                return this._bulletsLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "ScoreLabel", {
            get: function () {
                return this._scoreLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScoreLabel", {
            get: function () {
                return this._highScoreLabel;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        ScoreBoard.prototype._initialize = function () {
            this._livesLabel = new objects.Label("Lives: 99", "20px", "Consolas", "#FFFF00", 50, 20, false);
            this._bulletsLabel = new objects.Label("Bullets: 999", "20px", "Consolas", "#FFFF00", 300, 20, false);
            this._scoreLabel = new objects.Label("Score: 99999", "20px", "Consolas", "#FFFF00", 540, 20, false);
            this._highScoreLabel = new objects.Label("High Score: 99999", "40px", "Consolas", "#FFFF00", 320, 290, true);
            this.Lives = config.Game.LIVES;
            this.Bullets = config.Game.BULLETS;
            this.Score = config.Game.SCORE;
            this.HighScore = config.Game.HIGH_SCORE;
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=ScoreBoard.js.map