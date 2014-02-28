<?php 

require_once 'vendor/autoload.php';

// Config
// ======

$db_host = getenv('GAME_DB_HOST');
$db_name = getenv('GAME_DB_DATABASE');
$db_user = getenv('GAME_DB_USER');
$db_pass = getenv('GAME_DB_PASS');

$dsn = "mysql:dbname=$db_name;host=$db_host";
$pdo = new PDO($dsn, $db_user, $db_pass);
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

$app = new \Slim\Slim();

// everything is JSON output
$resp = $app->response();
$resp['Content-Type'] = 'application/json';


// Endpoints
// =========

$app->get('/', function() use ($pdo, $app) {
    // only this route is HTML
    $resp = $app->response();
    $resp['Content-Type'] = 'text/html';
    $resp->body(file_get_contents('front.html'));
});

$app->get('/systems', function() use ($pdo, $app) {
    $res = $pdo->query('select * from systems');
    $systems = [];
    foreach($res as $row) {
      $systems[] = $row;
    }
    
    //return  json_encode($systems);
    echo json_encode($systems);
  });

$app->run();
