<?php
    //将社区表中信息传出
   include("dbconfig.php");
   $arr=json_decode($_GET['data'],true);
   $class=$arr["class"];

if($class=="全部"){
    $sql="select * from community";
    $obj=mysqli_query($link,$sql);
    if($obj){
        //$arr=mysqli_fetch_array($obj,MYSQLI_ASSOC);
        $rows=[];
        while($arr=mysqli_fetch_array($obj,MYSQLI_ASSOC)){
            $rows[]=$arr;
        }
        $num=count($rows);
        for($i=0;$i<$num;$i++){
            $jsonstr=array($rows[$i]);
            echo json_encode($jsonstr);
            echo "<br/>";
        }
    }

}else{
    $sql="select * from community where topic_class='$class'";
    $obj=mysqli_query($link,$sql);
    if($obj){
        //$arr=mysqli_fetch_array($obj,MYSQLI_ASSOC);
        $rows=[];
        while($arr=mysqli_fetch_array($obj,MYSQLI_ASSOC)){
            $rows[]=$arr;
        }
        $num=count($rows);
        for($i=0;$i<$num;$i++){
            $jsonstr=array($rows[$i]);
            echo json_encode($jsonstr);
            echo "<br/>";
        }
    }

}

