<?php

include("dbconfig.php");
//已发活动
$arr=json_decode($_GET['data'],true);
$name=$arr['name'];
$sql="select * from participate where activity_name='$name'";
$obj=mysqli_query($link,$sql);
$array = array();
while($rows=mysqli_fetch_array($obj,MYSQLI_ASSOC))
{
    $pp=$rows["activity"];
    $sql="select * from activity where act_name='$pp'";
    $obj=mysqli_query($link,$sql);
    $qq=mysqli_fetch_array($obj);
    $array[] = $qq;
}
// print_r($array);
echo json_encode($array);