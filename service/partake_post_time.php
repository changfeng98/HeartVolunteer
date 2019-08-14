<?php

include("dbconfig.php");
//参与话题
$arr=json_decode($_GET['data'],true);
$name=$arr['name'];
$class=$arr['class'];
if($class=="全部"){
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
}elseif ($class=="月"){
    date_default_timezone_set('Asia/Shanghai');
    $be_time=date('Y-m-d H:i:s',strtotime('-30 days'));//用时间戳获取
    $sql="select * from topic_post where user_name='$name'and release_time> '$be_time' ";
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
}elseif($class=="年"){
    date_default_timezone_set('Asia/Shanghai');
    $be_time=date('Y-m-d H:i:s',strtotime('-365 days'));//用时间戳获取
    $sql="select * from topic_post where user_name='$name'and release_time> '$be_time' ";
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
}elseif($class=="周"){
    date_default_timezone_set('Asia/Shanghai');
    $be_time=date('Y-m-d H:i:s',strtotime('-7 days'));//用时间戳获取
    $sql="select * from topic_post where user_name='$name'and release_time> '$be_time' ";
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
}
//http://127.0.0.1/HeartVolunteer/service/partake_potic_time.php?data={"name":"爱地球","class":"周"}

