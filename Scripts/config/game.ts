module config {
  export class Game {
    public static SCREEN_WIDTH: number = 640;
    public static SCREEN_HEIGHT: number = 640;
    public static SCENE: scenes.State;
    public static ASSETS: createjs.LoadQueue;
    public static FPS: number = 60; // 60 Frames per second
    public static MONSTER_NUM: number = 4;
    public static CURRENT_BULLET_TICKER: number = 0;
    public static CURRENT_PLANET_TICKER: number = 0;
    public static CURRENT_LIVEICON_TICKER: number = 0;
    public static CURRENT_STARICON_TICKER: number = 0;
    public static LIVES: number = 5;
    public static BULLETS: number = 99;
    public static SCORE: number = 0;
    public static HIGH_SCORE: number = 0;
    public static SCORE_BOARD: managers.ScoreBoard;
    public static PLANET_ICON: objects.Icon;
    public static LIVE_ICON: objects.Icon;
    public static STAR_ICON: objects.Icon;
  }
}
