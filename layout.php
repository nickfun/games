<!doctype html>
<html>
  <head>
    <title>CoolGuy Games App</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">
    
    <link rel="stylesheet" href="/style.css">
    
    <script src="/out/spa.js"></script>
  </head>
  <body>
    
    <h1>My Game Collection!</h1>

    <h2>Creation Station</h2>
    <!-- TODO: this should be a Marionette View -->
    <div class="container-fluid">
      <div id="create-forms-container" class="row">
      </div>
    </div>
    
    <h2>Systems</h2>
    <div id="system-list"></div>
    
    <h2>Games</h2>
    <div id="game-list"></div>
    
    <script>
      var __bootstrap = {};
      __bootstrap.systems = <?= $bootstrap_systems ?> ;
      __bootstrap.games = <?= $bootstrap_games ?>;
      app.start();
    </script>
    
  </body>
</html>
