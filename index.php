<?php 

phpinfo();

echo "<pre>";

print_r($_ENV);

$config = array(
	'GAME_DB_HOST' => getenv('GAME_DB_HOST'),
	'GAME_DB_DATABASE' => getenv('GAME_DB_DATABASE'),
	'GAME_DB_USER' => getenv('GAME_DB_USER'),
	'GAME_DB_PASS' => getenv('GAME_DB_PASS'),
);

print_r($config);

