"use strict";
var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.squaredRadiusCheck = function (object1, object2) {
            // squared radius check
            var radii = object1.halfHeight + object2.halfHeight;
            if (objects.Vector2.sqrDistance(object1.position, object2.position) <
                radii * radii) {
                if (!object2.isColliding) {
                    switch (object2.type) {
                        case enums.GameObjectTypes.MONSTERA:
                        case enums.GameObjectTypes.MONSTERB:
                        case enums.GameObjectTypes.MONSTERC:
                        case enums.GameObjectTypes.MONSTERD:
                            {
                                var lostLiveSound = createjs.Sound.play("lostLivesSound");
                                lostLiveSound.volume = 0.25;
                                config.Game.SCORE_BOARD.Lives -= 1;
                            }
                            break;
                        case enums.GameObjectTypes.BULLET:
                            {
                                //let yaySound = createjs.Sound.play("yaySound");
                                //yaySound.volume = 0.15;
                                config.Game.SCORE_BOARD.Score += 10;
                            }
                            break;
                        case enums.GameObjectTypes.PLANET:
                            {
                                var grabItemSound = createjs.Sound.play("grabItemSound");
                                grabItemSound.volume = 0.25;
                                config.Game.SCORE_BOARD.Bullets += 50;
                                config.Game.PLANET_ICON.Collected();
                            }
                            break;
                        case enums.GameObjectTypes.LIVEICON:
                            {
                                var grabItemSound = createjs.Sound.play("grabItemSound");
                                grabItemSound.volume = 0.25;
                                config.Game.SCORE_BOARD.Lives += 1;
                                config.Game.LIVE_ICON.Collected();
                            }
                            break;
                        case enums.GameObjectTypes.STARICON:
                            {
                                var gainPointsSound = createjs.Sound.play("gainPointsSound");
                                gainPointsSound.volume = 0.25;
                                config.Game.SCORE_BOARD.Score += 50;
                                config.Game.STAR_ICON.Collected();
                            }
                            break;
                    }
                    // update the high score in the score board
                    if (config.Game.SCORE > config.Game.HIGH_SCORE) {
                        config.Game.HIGH_SCORE = config.Game.SCORE;
                    }
                    // go to end scene if lives less zero
                    if (config.Game.LIVES < 1) {
                        var gameOverSound = createjs.Sound.play("gameOverSound");
                        gameOverSound.volume = 0.25;
                        config.Game.SCENE = scenes.State.END;
                    }
                    object2.isColliding = true;
                    return true;
                }
            }
            else {
                object2.isColliding = false;
            }
            return false;
        };
        Collision.AABBCheck = function (object1, object2) {
            var object1Offset = !object1.isCentered
                ? new objects.Vector2(0, 0)
                : new objects.Vector2(object1.halfWidth, object1.halfHeight);
            var object2Offset = !object2.isCentered
                ? new objects.Vector2(0, 0)
                : new objects.Vector2(object2.halfWidth, object2.halfHeight);
            var object1TopLeft = new objects.Vector2(object1.position.x - object1Offset.x, object1.position.y - object1Offset.y);
            var object2TopLeft = new objects.Vector2(object2.position.x - object2Offset.x, object2.position.y - object2Offset.y);
            // AABB Collision Detection
            if (object1TopLeft.x < object2TopLeft.x + object2.width &&
                object1TopLeft.x + object1.width > object2TopLeft.x &&
                object1TopLeft.y < object2TopLeft.y + object2.height &&
                object1TopLeft.y + object1.height > object2TopLeft.y) {
                if (!object2.isColliding) {
                    console.log("Collision!");
                    object2.isColliding = true;
                    return true;
                }
            }
            else {
                object2.isColliding = false;
            }
            return false;
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=Collision.js.map