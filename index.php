<?php 

require_once 'vendor/autoload.php';
require_once 'model.php';

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

$model = new Model($pdo);


// Routes
// ======

// Serve the front page
// --------------------

$app->get('/', function() use ($pdo, $app, $model) {
    // only this route is HTML
    $resp = $app->response();
    $resp['Content-Type'] = 'text/html';
    $bootstrap_games = json_encode($model->getAllGames());
    $bootstrap_systems = json_encode($model->getAllSystems());
    include('front.php');
});

// Reading data
// ------------

$app->get('/systems', function() use ($pdo, $app) {
    $res = $pdo->query('select * from systems');
    echo json_encode($res->fetchAll());
});

$app->get('/systems/:id', function($id) use ($pdo, $app) {
    $id = (int) $id;
    $stm = $pdo->prepare('select * from systems where id=:id');
    $stm->execute([':id' => $id]);
    $system = $stm->fetchAll();
    echo json_encode($system);
});

$app->get('/games', function() use ($pdo, $app) {
    $res = $pdo->query('select * from games');
    echo json_encode($res->fetchAll());
  });

$app->get('/games/:id', function($id) use ($pdo,$app) {
    $id = (int) $id;
    $stm = $pdo->prepare('select * from games where id=:id');
    $stm->execute(['id' => $id]);
    echo json_encode($stm->fetchAll());
  });

// Save data
// ---------

$app->put('/games/:id', function($id) use ($pdo, $app) {
    $id = (int) $id;
    $body = $app->request()->getBody();
    $row = json_decode($body, true);
    $attributes = ['name','sysid','release','has_case','has_docs','is_ghit','is_limited','is_complete','is_broken','comment','id'];
    $sql = "UPDATE games SET
name = :name,
sysid = :sysid,
`release` = :release,
has_case = :has_case,
has_docs = :has_docs,
is_ghit = :is_ghit,
is_limited = :is_limited,
is_complete = :is_complete,
is_broken = :is_broken,
comment = :comment
WHERE
id = :id";
    $saveData = array();
    foreach( $attributes as $i ) {
        $saveData[$i] = $row[$i];
    }
    $stm = $pdo->prepare($sql);
    $result = $stm->execute($saveData);
    if( !$result ) {
      // error
      $app->response()->setStatus(500);
      $res = ['status'=>'bad','error'=>$stm->errorCode(),'msg'=>print_r($stm->errorInfo(),true)];
    } else {
      $res = ['status'=>'ok','msg'=>'game saved'];
    }
    echo json_encode($res);
});

$app->put('/systems/:id', function($id) use ($pdo, $app) {
    $id = (int) $id;
    $body = $app->request()->getBody();
    $row = json_decode($body, true);
    $sql = "UPDATE systems SET 
name=:name, 
company=:company, 
`release`=:release, 
comments=:comments, 
num=:num 
WHERE 
id=:id";
    $copylist = ['name','company','release','comments','num','id'];
    $sqldata = array();
    foreach( $copylist as $key ) {
	$sqldata[$key] = $row[$key];
    }
    $stm = $pdo->prepare($sql);
    try {
	$result = $stm->execute($sqldata);
    } catch( Exception  $e ) {
	echo "EXCEPTION " . $e->getMessage();
    }
    if( !$result ) {
      // error
      $app->response()->setStatus(500);
      $res = array(
          'status' => 'bad',
	  'error' => $stm->errorCode() . " MSG:" . print_r($stm->errorInfo(), true)
      );
      echo json_encode($res);
			     
    } else {
      // success
      echo json_encode(['status'=>'ok']);
    }
  });

// Done defining routes
// --------------------

$app->run();
