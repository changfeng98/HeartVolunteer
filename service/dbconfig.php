<?php
header('Content-type:text/html;charset=utf-8');
//var_dump($_POST["data"]);
$link=mysqli_connect('localhost:3307','root','root');
$link->query("SET NAMES UTF8");
if(!$link){
    //exit('数据库链接失败');
}
mysqli_select_db($link,'db_heart volunteer');