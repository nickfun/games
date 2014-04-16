<?php

class Model {

    private $pdo;

    public function __construct($db) {
        $this->pdo = $db;
    }

    // Get Many
    // --------

    public function getAllSystems() {
        $res = $this->pdo->query('select * from systems');
        return $res->fetchAll();
    }

    public function getAllGames() {
        $res = $this->pdo->query('select * from games');
        return $res->fetchAll();
    }

    // Get One
    // -------

    public function getSystem($id) {
        $id = (int) $id;
        $stm = $this->pdo->prepare('select * from systems where id=:id');
        $stm->execute([':id' => $id]);
        return $stm->fetchAll();
    }

    public function getGame($id) {
        $id = (int) $id;
        $stm = $this->pdo->prepare('select * from games where id=:id');
        $stm->execute(['id' => $id]);
        return $stm->fetchAll();
    }
    
    // Save New
    // --------
    
    public function saveGame($game) {
        return false;
    }
    
    public function saveSystem($system) {
        $sql = "INSERT INTO systems SET ( id, name, company, comments, release ) ";
        $sql .= "VALUES ( '', :name, :company, :comments, :release );";
        $stm = $this->pdo->prepare($sql);
        $stm->execute(array(
            'name' => $system['name'],
            'company' => $system['company'],
            'comments' => $system['comments'],
            'release' => $system['release'],
        ));
        return $this->pdo->lastInsertId();
        //return false;
    }
    
    // Update existing
    // ---------------
    
    public function updateGame($game) {
        return false;
    }

    public function updateSystem($system) {
        return false;
    }
}
