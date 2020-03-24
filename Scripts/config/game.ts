module config {
  export class Game {
    public static SCREEN_WIDTH: number = 640;
    public static SCREEN_HEIGHT: number = 640;
    public static SCENE: scenes.State;
    public static ASSETS: createjs.LoadQueue;
    public static FPS: number = 60; // 60 Frames per second
    public static MONSTER_NUM: number = 4;
    public static CURREN_BULLET_TICKER: number = 0;
    public static CURREN_PLANET_TICKER: number = 0;
  }
}
