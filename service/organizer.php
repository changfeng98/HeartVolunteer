<?php
//前端不传数据
//后端传org_name：组织名称，org_password：组织登录密码，org_mailbox：组织邮箱，org_phone：组织电话
//org_avatar:组织头像，ad_name：组织负责人名称，ad_mailbox：负责人邮箱，ad_phone：负责人数据号，ad_id：负责人身份证号
include("dbconfig.php");
//$arr=json_decode($_GET['data'],true);

$sql="select * from organizer_user";
$obj=mysqli_query($link,$sql);
$array = array();
while($rows=mysqli_fetch_array($obj,MYSQLI_ASSOC))
{
    $array[] = $rows;
}
// print_r($array);
echo json_encode($array);