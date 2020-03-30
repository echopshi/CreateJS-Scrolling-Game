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
                            {
                                console.log("Collision with monsterA!");
                                config.Game.SCORE_BOARD.Lives -= 1;
                            }
                            break;
                        case enums.GameObjectTypes.MONSTERB:
                            {
                                console.log("Collision with monsterB!");
                                config.Game.SCORE_BOARD.Lives -= 1;
                            }
                            break;
                        case enums.GameObjectTypes.MONSTERC:
                            {
                                console.log("Collision with monsterC!");
                                config.Game.SCORE_BOARD.Lives -= 1;
                            }
                            break;
                        case enums.GameObjectTypes.MONSTERD:
                            {
                                console.log("Collision with monsterD!");
                                config.Game.SCORE_BOARD.Lives -= 1;
                            }
                            break;
                        case enums.GameObjectTypes.BULLET:
                            {
                                console.log("Collision between monster and bullet!");
                                config.Game.SCORE_BOARD.Score += 10;
                                if (config.Game.SCORE > config.Game.HIGH_SCORE) {
                                    config.Game.HIGH_SCORE = config.Game.SCORE;
                                }
                            }
                            break;
                        case enums.GameObjectTypes.PLANET:
                            {
                                console.log("Collision with planet!");
                                config.Game.SCORE_BOARD.Bullets += 50;
                            }
                            break;
                    }
                    // go to end scene if lives less zero
                    if (config.Game.LIVES < 1) {
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