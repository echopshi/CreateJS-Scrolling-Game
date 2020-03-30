module managers {
  export class Collision {
    public static squaredRadiusCheck(
      object1: objects.GameObject,
      object2: objects.GameObject
    ): boolean {
      // squared radius check
      let radii = object1.halfHeight + object2.halfHeight;

      if (
        objects.Vector2.sqrDistance(object1.position, object2.position) <
        radii * radii
      ) {
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
                config.Game.PLANET_ICON.Collected();
              }
              break;
            case enums.GameObjectTypes.LIVEICON:
              {
                console.log("Collision with live icon!");
                config.Game.SCORE_BOARD.Lives += 1;
                config.Game.LIVE_ICON.Collected();
              }
              break;
            case enums.GameObjectTypes.STARICON:
              {
                console.log("Collision with star icon!");
                config.Game.SCORE_BOARD.Score += 20;
                config.Game.STAR_ICON.Collected();
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
      } else {
        object2.isColliding = false;
      }
      return false;
    }

    public static AABBCheck(
      object1: objects.GameObject,
      object2: objects.GameObject
    ): boolean {
      let object1Offset = !object1.isCentered
        ? new objects.Vector2(0, 0)
        : new objects.Vector2(object1.halfWidth, object1.halfHeight);
      let object2Offset = !object2.isCentered
        ? new objects.Vector2(0, 0)
        : new objects.Vector2(object2.halfWidth, object2.halfHeight);

      let object1TopLeft = new objects.Vector2(
        object1.position.x - object1Offset.x,
        object1.position.y - object1Offset.y
      );
      let object2TopLeft = new objects.Vector2(
        object2.position.x - object2Offset.x,
        object2.position.y - object2Offset.y
      );

      // AABB Collision Detection
      if (
        object1TopLeft.x < object2TopLeft.x + object2.width &&
        object1TopLeft.x + object1.width > object2TopLeft.x &&
        object1TopLeft.y < object2TopLeft.y + object2.height &&
        object1TopLeft.y + object1.height > object2TopLeft.y
      ) {
        if (!object2.isColliding) {
          console.log("Collision!");
          object2.isColliding = true;
          return true;
        }
      } else {
        object2.isColliding = false;
      }
      return false;
    }
  }
}
