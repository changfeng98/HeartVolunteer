<?php
//header('Content-type:text/html;charset=utf-8');
//var_dump($_POST["data"]);
//$link=mysqli_connect('localhost:3306','root','root');
//$link->query("SET NAMES UTF8");
//if(!$link){
    //exit('数据库链接失败');
//}
//mysqli_select_db($link,'db_heart volunteer');
     include("dbconfig.php");

$arr=json_decode($_GET['data'],true);
//$arr=json_decode($_POST["data"],true);


$name=$arr["name"];

$password=md5($arr["password"]);


$sql="select * from sign_in where name='$name' and password='$password'";
$obj=mysqli_query($link,$sql);
if($obj&&mysqli_affected_rows($link)){
    $arr=mysqli_fetch_array($obj);
    $p=$arr['identity'];
    if($p="组织用户")
    {
        $jsonstr=array('a' => 1,'b'=>0);
        //登录成功组织用户
    }
    else{
        $jsonstr=array('a' => 1,'b'=>1);
        //登录成功个人用户
    }
    echo json_encode($jsonstr);
}
else{
    $jsonstr=array('a' => 0);
    echo json_encode($jsonstr);
    //登录失败
}
