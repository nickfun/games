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

        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <button type="button" class="btn btn-default btn-toggle-creation-view">Create Something!</button>
                </div>
            </div>
        </div>

        <div class="container-fluid creation-container hidden well">
            <div id="create-forms-container" class="row">
            </div>
        </div>

        <h2>System List</h2>
        <div id="system-list"></div>

        <div id="system-info"></div>

        <h2>Games</h2>
        <div id="game-list"></div>

	 	<p>&nbsp;</p>

        <script>
            var __bootstrap = {};
            __bootstrap.systems = <?= $bootstrap_systems ?>;
            __bootstrap.games = <?= $bootstrap_games ?>;
            app.start();
        </script>

    </body>
</html>
