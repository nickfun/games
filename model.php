<?php

class Model {
	private $pdo;
	
	public __construct($db) {
		$this->pdo = $db;
	}
	
	public getAllSystems() {
	}
	
	public getAllGames() {
	}
	
	public getGame($id) {}
	
	public getSystem($id) {}
	
}

