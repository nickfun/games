<!doctype html>
<html>
<head>
  <title>CoolGuy's Games App</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- BOOTSTRAP -->
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">
  <script src="vendor.js"></script>
  <script src="app.js"></script>
  <style>
    .row { 
    border-top: 1px solid black; padding-top: 10px; 
    }

    .row.x { background-color: #ddd; }

    .edit-system-container {
    background-color: #ddd;
    }
  </style>
</head>
<body>

	<h1>My Game Collection!</h1>
	
	<h2>Systems</h2>
	<div id="system-list"></div>

	<h2>Games</h2>
	<div id="game-list"></div>

	<div id="info">info</div>
  
  <?php /*

  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-4"><strong>col-sm-4</strong> Hello World</div>
      <div class="col-sm-4">My name is CoolGuy!</div>
      <div class="col-sm-4">How are you?</div>
    </div>
    <div class="row">
      <div class="col-xs-4"><strong> col-xs-4</strong> Hello World</div>
      <div class="col-xs-4">My name is CoolGuy!</div>
      <div class="col-xs-4">How are you?</div>
    </div>
    <div class="row">
      <div class="col-xs-6"><b>xs-6</b> six is half</div>
      <div class="col-xs-6">double it to make twelve :)</div>
    </div>
  </div>

	<div class="container-fluid">

	<!-- Stack the columns on mobile by making one full-width and the other half-width -->
	<div class="row x">
	  <div class="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>
	  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
	</div>

	<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
	<div class="row x">
	  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
	  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
	  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
	</div>

	<!-- Columns are always 50% wide, on mobile and desktop -->
	<div class="row x">
	  <div class="col-xs-6">.col-xs-6</div>
	  <div class="col-xs-6">.col-xs-6</div>
	</div>

	<div class="row">
	  <div class="col-sm-4">TITLE</div>
	  <div class="col-sm-8">The legend of zelda: the ocarana of time</div>
	  <div class="col-xs-12">A charming story of a boy who likes music :-)</div>
	</div>

	</div>

	*/
	?>


<script>
app.data.systems = new Backbone.Collection( <?= $bootstrap_systems ?> );
app.data.games = new Backbone.Collection( <?= $bootstrap_games ?> );
app.start();
</script>

</body>
</html>
