<?php

include("dbconfig.php");
//参与话题
$arr=json_decode($_GET['data'],true);
$name=$arr['name'];
$sql="select * from topic_post where user_name='$name'";
$obj=mysqli_query($link,$sql);
$array = array();
while($rows=mysqli_fetch_array($obj,MYSQLI_ASSOC))
{
    $pp=$rows["post_name"];
    $sql="select * from community where topic_name='$pp'";
    $obj=mysqli_query($link,$sql);
    $qq=mysqli_fetch_array($obj);
    $array[] = $qq;
}
// print_r($array);
echo json_encode($array);