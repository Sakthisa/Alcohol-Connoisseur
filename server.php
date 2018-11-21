<?php

  session_start();

  $username = "";
  $errors = array();

  $host = 'classmysql.engr.oregonstate.edu';
  $db = 'cs340_schutfot';
  $user = 'cs340_schutfot';
  $charset = 'utf8mb4';
  $pass = 'Obama08';
  $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
  $opt = [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
      PDO::ATTR_EMULATE_PREPARES => false,
  ];

  if(isset($_POST['register'])){
    $userVerify = 0;
    $pdo = new PDO($dsn, $user, $pass, $opt); //Uses database information for the PDO
    $res = $pdo->prepare("SELECT Username FROM User WHERE Username = ?");
    $res->execute([$_POST["Username"]]);
    $user = $res->fetch();
    if($_POST["Username"] === $user['Username']){
      array_push($errors, "Username already exists");
      $userVerify = 1;
    }
    if($userVerify == 0){
      $password = password_hash($_POST["Password"], PASSWORD_DEFAULT);
      $stmt = $pdo->prepare('INSERT INTO User(Username, Birthday, First, Last, PasswordHash, Email) VALUES (?,?,?,?,?,?)');
      $stmt->execute([$_POST["Username"], $_POST["Birthday"], $_POST["FirstName"], $_POST["LastName"], $password, $_POST["Email"]]);
      $lower = strtolower($_POST["Username"]);
      $_SESSION['username'] = ucfirst($lower);
      header('location: index.php');
    }

  }

  if(isset($_POST['login'])){
    $pdo = new PDO($dsn, $user, $pass, $opt); //Uses database information for the PDO
    $res = $pdo->prepare("SELECT Username, PasswordHash FROM User WHERE Username = ?");
    $res->execute([$_POST["Username"]]);
    $user = $res->fetch();
    if(password_verify($_POST["Password"], $user['PasswordHash'])){
      $lower = strtolower($_POST["Username"]);
      $_SESSION['username'] = ucfirst($lower);
      header('location: index.php');
    }
    else{
      array_push($errors, "Wrong username or password");
    }
  }

?>