window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        // Load an image and call it 'logo'.
        game.load.spritesheet( 'number', 'assets/number.png',100,100 );
        game.load.image('background','assets/Background.png' );
        game.load.image('winone','assets/winone.png');
        game.load.image('wintwo','assets/wintwo.png');
        game.load.audio('music','assets/Fully Stacked FINAL MIX.mp3')
        
    }
    
    var number;
    var background;
    var player = 0;
    var playertwo = 0;
    var scoreone;
    var scoretwo;
    var stop;
    var num = 0;
    var turn = 1;
    var winone;
    var wintwo;
    var music;
     
    
    function create() {
    	background = game.add.sprite(0,0,'background');
    	music = game.add.audio('music');
    	music.play();
        // Create a sprite at the center of the screen using the 'logo' image.
        number = game.add.sprite(350, 220, 'number' );
        number.animations.add('cycle',[0,1,2,3,4,5,6],10,true);
        
        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
    scoreone = game.add.text(50,500, '0',{ fontSize: '30px', fill: '#000'});
    scoretwo = game.add.text(710,500, '0',{ fontSize: '30px', fill: '#000'});
    stop = game.input.keyboard.addKey(Phaser.Keyboard.S);
    }
    
    function update() {
        // Accelerate the 'logo' sprite towards the cursor,
        // accelerating at 500 pixels/second and moving no faster than 500 pixels/second
        // in X or Y.
        // This function returns the rotation angle that makes it visually match its
        // new trajectory.
        if(player == 21 && playertwo != 21)
        {
		winone = game.add.sprite(0,0,'winone');
		music.stop();
		game.paused = true;     
        }
        if(playertwo == 21 && player != 21)
        {
        wintwo = game.add.sprite(0,0,'wintwo');
        music.stop();
		game.paused = true;     
        }
       
        number.animations.play('cycle',10);
        if(turn == 1)
        {
        if(stop.isDown)
        {
        if(number.frame == 0)
        {
        if(player < 21)
        {
        player = player + 1;
        }
        }
        else if(number.frame == 1)
        {
        if(player < 21)
        {
        player = player + 2;
        }
        }
        else if(number.frame == 2)
        {
        if(player < 21)
        {
        player = player + 3;
        }
        }
         else if(number.frame == 3)
        {
        if(player < 21)
        {
        player = player + 4;
        }
        }
        else if(number.frame == 4)
        {
        if(player < 21)
        {
        player = player + 5;
        }
        }
         else if(number.frame == 5)
        {
        if(player < 21)
        {
        player = player + 6;
        }
        }
        else if(number.frame == 6)
        {
        if(player < 21)
        {
        player = player + 7;
        }
        }
        scoreone.text = '' + player;
        
        }
        turn = 2;
        }
        else
        {
        if(stop.isDown)
        {
        if(number.frame == 0)
        {
        if(playertwo < 21)
        {
        playertwo = playertwo + 1;
        }
        }
        else if(number.frame == 1)
        {
        if(playertwo < 21)
        {
        playertwo = playertwo + 2;
        }
        }
        else if(number.frame == 2)
        {
        if(playertwo < 21)
        {
        playertwo = playertwo + 3;
        }
        }
         else if(number.frame == 3)
        {
        if(playertwo < 21)
        {
        playertwo = playertwo + 4;
        }
        }
        else if(number.frame == 4)
        {
        if(playertwo < 21)
        {
        playertwo = playertwo + 5;
        }
        }
         else if(number.frame == 5)
        {
        if(playertwo < 21)
        {
        playertwo = playertwo + 6;
        }
        }
        else if(number.frame == 6)
        {
        if(playertwo < 21)
        {
        playertwo = playertwo + 7;
        }
        }
        scoretwo.text = '' + playertwo;
        
        }
        turn = 1;
        }
        
        number.animations.play('cycle');
    }
};
