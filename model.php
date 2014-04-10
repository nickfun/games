<?php

class Model {
	private $pdo;
	
	public function __construct($db) {
		$this->pdo = $db;
	}
	
	public function getAllSystems() {
		$res = $this->pdo->query('select * from systems');
		return $res->fetchAll();
	}
	
	public function getSystem($id) {
		$id = (int) $id;
		$stm = $this->pdo->prepare('select * from systems where id=:id');
		$stm->execute([':id' => $id]);
		return $stm->fetchAll();
	}
	
	public function getAllGames() {
		$res = $this->pdo->query('select * from games');
		return $res->fetchAll();
	}
	
	public function getGame($id) {
		$id = (int) $id;
		$stm = $this->pdo->prepare('select * from games where id=:id');
		$stm->execute(['id' => $id]);
		return $stm->fetchAll();
	}
	
}

