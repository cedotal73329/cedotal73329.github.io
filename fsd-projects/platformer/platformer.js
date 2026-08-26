$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();
  
    // TODO 2 - Create Platforms
 createPlatform(10, 700, 100, 10, "darkblue");
    createPlatform(400, 700, 5, 5, "darkblue");
    createPlatform(490, 570, 4, 4, "darkblue");
    createPlatform(200, 450, 100, 10, "darkblue");
    createPlatform(100, 320, 30, 50, "darkblue");
    createPlatform(390, 220, 10, 10, "darkblue");
    createPlatform(700, 499, 2, 2, "red");
    createPlatform(1000, 500, -100, -10, "darkblue");
    createPlatform(600, 0, 50, 400, "darkblue");
    createPlatform(500, 300, 1, 440, "darkblue");
    createPlatform(580, 500, 120, 300, "darkblue");
    createPlatform(700, 400, -50, -400, "darkblue");
    createPlatform(0, 739, 1400, 1,);
    createPlatform(600, 390, 100, 3, "white");
    createPlatform(600, 280, 100, 3, "white");
    createPlatform(600, 140, 100, 1, "darkblue");
    createPlatform(900, 320, 100, 10, "darkblue");
    createPlatform(800, 600, 100, 10, "lightblue");
    createPlatform(1250, 700, 10, 10, "lightblue");
    createCollectable("database", 930, 250, 0, 1);
    createCollectable("database", 660, 50, 0, 1);
    createCollectable("database", 1250,650, 0, 1);
    createPlatform(1200, 100, 1, 380, "darkblue");
    createPlatform(1350, 590, 10, 10, "darkblue");
    createPlatform(1250, 480, 10, 10, "darkblue");
    createPlatform(1350, 360, 10, 10, "darkblue");
    createPlatform(100, 0, 1, 550, "darkblue");
    createPlatform(1250, 240, 10, 10, "darkblue");
    createPlatform(1350, 190, 10, 10, "darkblue");
    createPlatform(1100, 300, 3, 3, "darkblue");
    createCannon( "top", 1360, 1500);



    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons
    createCannon("top", 650, 1300)
    createCannon("top", 970, 900)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
