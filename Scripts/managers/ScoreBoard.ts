/**
 * Author: Hang Li
 * Student Number: 300993981
 * File Name: ScoreBoard.ts
 * Modified on: April 01, 2020
 * Game App Description: CreateJS Slot Machine
 * Revision History: available in GitHub
 */
module managers {
  export class ScoreBoard {
    // private instance members
    private _lives: number;
    private _bullets: number;
    private _score: number;
    private _highScore: number;

    private _livesLabel: objects.Label;
    private _bulletsLabel: objects.Label;
    private _scoreLabel: objects.Label;
    private _highScoreLabel: objects.Label;

    // public properties
    public get Lives(): number {
      return this._lives;
    }
    public set Lives(v: number) {
      this._lives = v;
      config.Game.LIVES = this._lives;
      this.LivesLabel.setText("Lives: " + this._lives);
    }

    public get Bullets(): number {
      return this._bullets;
    }
    public set Bullets(v: number) {
      this._bullets = v;
      config.Game.BULLETS = this._bullets;
      this.BulletsLabel.setText("Bullets: " + this._bullets);
    }

    public get Score(): number {
      return this._score;
    }
    public set Score(v: number) {
      this._score = v;
      config.Game.SCORE = this._score;
      this.ScoreLabel.setText("Score: " + this._score);
    }

    public get HighScore(): number {
      return this._highScore;
    }
    public set HighScore(v: number) {
      this._highScore = v;
      config.Game.HIGH_SCORE = this._highScore;
      this.HighScoreLabel.setText("High Score: " + this._highScore);
    }

    public get LivesLabel(): objects.Label {
      return this._livesLabel;
    }

    public get BulletsLabel(): objects.Label {
      return this._bulletsLabel;
    }

    public get ScoreLabel(): objects.Label {
      return this._scoreLabel;
    }

    public get HighScoreLabel(): objects.Label {
      return this._highScoreLabel;
    }

    // constructor
    constructor() {
      this._initialize();
    }

    // private methods
    private _initialize() {
      this._livesLabel = new objects.Label(
        "Lives: 99",
        "20px",
        "Consolas",
        "#FFFF00",
        50,
        20,
        false
      );
      this._bulletsLabel = new objects.Label(
        "Bullets: 999",
        "20px",
        "Consolas",
        "#FFFF00",
        300,
        20,
        false
      );
      this._scoreLabel = new objects.Label(
        "Score: 99999",
        "20px",
        "Consolas",
        "#FFFF00",
        540,
        20,
        false
      );
      this._highScoreLabel = new objects.Label(
        "High Score: 99999",
        "40px",
        "Consolas",
        "#FFFF00",
        320,
        290,
        true
      );

      this.Lives = config.Game.LIVES;
      this.Bullets = config.Game.BULLETS;
      this.Score = config.Game.SCORE;
      this.HighScore = config.Game.HIGH_SCORE;
    }

    // public methods
  }
}
