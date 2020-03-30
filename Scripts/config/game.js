"use strict";
var config;
(function (config) {
    var Game = /** @class */ (function () {
        function Game() {
        }
        Game.SCREEN_WIDTH = 640;
        Game.SCREEN_HEIGHT = 640;
        Game.FPS = 60; // 60 Frames per second
        Game.MONSTER_NUM = 4;
        Game.CURRENT_BULLET_TICKER = 0;
        Game.CURRENT_PLANET_TICKER = 0;
        Game.CURRENT_LIVEICON_TICKER = 0;
        Game.CURRENT_STARICON_TICKER = 0;
        Game.LIVES = 5;
        Game.BULLETS = 99;
        Game.SCORE = 0;
        Game.HIGH_SCORE = 0;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=game.js.map