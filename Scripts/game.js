"use strict";
//IIFE - Immediately Invoked Function Expression
//means -> self-executing anonymous function
var Game = (function () {
    // variable declarations
    var canvas = document.getElementsByTagName("canvas")[0];
    var stage;
    var currentSceneState;
    var currentScene;
    var assets;
    var assetManifest = [
        { id: "placeholder", src: "./Assets/images/placeholder.png" },
        { id: "universe", src: "./Assets/images/background.png" },
        // Logos
        {
            id: "spaceshipFreedomLogo",
            src: "./Assets/images/spaceshipFreedomLogo.png"
        },
        { id: "instructionLogo", src: "./Assets/images/instructionLogo.png" },
        { id: "gameOverLogo", src: "./Assets/images/gameOverLogo.png" },
        // buttons
        { id: "playButton", src: "./Assets/images/playButton.png" },
        { id: "playAgainButton", src: "./Assets/images/playAgainButton.png" },
        { id: "exitButton", src: "./Assets/images/exitButton.png" },
        { id: "exitToMenuButton", src: "./Assets/images/exitToMenuButton.png" },
        { id: "instructionButton", src: "./Assets/images/instructionButton.png" },
        // avatars
        { id: "avatar", src: "./Assets/images/avatarA.png" },
        { id: "bullet", src: "./Assets/images/bulletA.png" },
        { id: "monsterA", src: "./Assets/images/monstorA.png" },
        { id: "monsterB", src: "./Assets/images/monstorB.png" },
        { id: "monsterC", src: "./Assets/images/monstorC.png" },
        { id: "monsterD", src: "./Assets/images/monstorD.png" },
        { id: "planet", src: "./Assets/images/planet.png" },
        { id: "liveIcon", src: "./Assets/images/liveIcon.png" },
        { id: "starIcon", src: "./Assets/images/starIcon.png" },
        // sounds
        { id: "backgroundSound", src: "./Assets/audio/background.mp3" },
        { id: "bulletFireSound", src: "./Assets/audio/bulletFire.wav" },
        { id: "gainPointsSound", src: "./Assets/audio/gainPoints.mp3" },
        { id: "gameOverSound", src: "./Assets/audio/gameOver.mp3" },
        { id: "grabItemSound", src: "./Assets/audio/grabItems.mp3" },
        { id: "lostLivesSound", src: "./Assets/audio/lostLives.wav" },
        { id: "yaySound", src: "./Assets/audio/yay.ogg" }
    ];
    function Preload() {
        assets = new createjs.LoadQueue(); // asset container
        config.Game.ASSETS = assets; // make a reference to the assets in the global config
        assets.installPlugin(createjs.Sound); // supports sound preloading
        assets.loadManifest(assetManifest);
        assets.on("complete", Start);
    }
    /**
     * This method initializes the CreateJS (EaselJS) Library
     * It sets the framerate to 60 FPS and sets up the main Game Loop (Update)
     */
    function Start() {
        console.log("%c Game Started!", "color: blue; font-size: 20px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = config.Game.FPS;
        createjs.Ticker.on("tick", Update);
        stage.enableMouseOver(20);
        currentSceneState = scenes.State.NO_SCENE;
        config.Game.SCENE = scenes.State.START;
    }
    /**
     * This function is triggered every frame (16ms)
     * The stage is then erased and redrawn
     */
    function Update() {
        if (currentSceneState != config.Game.SCENE) {
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    /**
     * This is the main function of the Game (where all the fun happens)
     *
     */
    function Main() {
        console.log("%c Scene Switched...", "color: green; font-size: 16px;");
        // clean up
        if (currentSceneState != scenes.State.NO_SCENE) {
            currentScene.Clean();
            currentScene.removeAllChildren();
            stage.removeAllChildren();
        }
        // switch to the new scene
        switch (config.Game.SCENE) {
            case scenes.State.START:
                console.log("switch to Start Scene");
                currentScene = new scenes.Start();
                break;
            case scenes.State.INSTRUCTION:
                console.log("switch to Instruction Scene");
                currentScene = new scenes.Instruction();
                break;
            case scenes.State.PLAY:
                console.log("switch to Play Scene");
                currentScene = new scenes.Play();
                break;
            case scenes.State.END:
                console.log("switch to End Scene");
                currentScene = new scenes.End();
                break;
        }
        currentSceneState = config.Game.SCENE;
        stage.addChild(currentScene);
    }
    window.addEventListener("load", Preload);
})();
//# sourceMappingURL=game.js.map