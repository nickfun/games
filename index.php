<?php 

require_once 'vendor/autoload.php';

$db_host = getenv('GAME_DB_HOST');
$db_name = getenv('GAME_DB_DATABASE');
$db_user = getenv('GAME_DB_USER');
$db_pass = getenv('GAME_DB_PASS');

$dsn = "mysql:dbname=$db_name;host=$db_host";
$pdo = new PDO($dsn, $db_user, $db_pass);

$app = new \Slim\Slim();

$app->get('/', function() use ($pdo) {
    echo file_get_contents('front.html');
});

$app->run();
