<?php
session_start();
@header("Content-type: application/json");
 $json = "";
if (isset($_GET['inicio']) && $_GET['inicio']=='si') {     
    $_SESSION['ruta'] = "img/numeros.png";   
    $json .='{"ruta":"'.$_SESSION['ruta'].'",';
}

if(isset($_GET['pista']) && $_GET['pista']=='si'){
    $_SESSION['pista'] = "Cual es el numero mas grade numericamente y de tamaño?";
     $json .='{"pista":"'.$_SESSION['pista'].'",';
}

if(isset($_GET['respuestas']) && $_GET['respuestas']=='si'){
    $_SESSION['respuestas'] = array(77,99);
     $json .='{"good":'.$_SESSION['respuestas'][0].",".
             '"bad":'.$_SESSION['respuestas'][1].',';
}
$json .= '"":""}';
echo($json);
?>