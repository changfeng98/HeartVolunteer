<?php
 //活动发布成功a=1,活动发布失败a=0;
include("dbconfig.php");
$arr=json_decode($_GET['data'],true);

date_default_timezone_set('Asia/Shanghai');
$name=$release_date=date('Y-m-d H:i:s',time());

$act_name=$arr["act_name"];
$act_city=$arr["act_city"];
$act_category=$arr["act_category"];
$act_region=$arr["act_region"];
$regional_sponsors=$arr["regional_sponsors"];
$Initiation_time=$arr["Initiation_time"];
$Deadline=$arr["Deadline"];
$Ending_time=$arr["Ending_time"];
$Recruitment=$arr["Recruitment"];
$Rec_ing=$arr["Rec_ing"];
//$introduce=$arr["introduce"];
//$content=$arr["content"];
//$abstract=$arr["abstract"];
$Founder=$arr["Founder"];
$Founder=$arr["Founder"];
//$notes=$arr["notes"];
//$picture;


$allowedExts = array("gif", "jpeg", "jpg", "png");
$temp = explode(".", $_FILES["file"]["name"]);
//echo $_FILES["file"]["size"];
$extension = end($temp);     // 获取文件后缀名
if ((($_FILES["file"]["type"] == "image/gif")
        || ($_FILES["file"]["type"] == "image/jpeg")
        || ($_FILES["file"]["type"] == "image/jpg")
        || ($_FILES["file"]["type"] == "image/pjpeg")
       || ($_FILES["file"]["type"] == "image/x-png")
       || ($_FILES["file"]["type"] == "image/png"))
    && ($_FILES["file"]["size"] < 2048000)   // 小于 2000 kb
    && in_array($extension, $allowedExts))
{
    if ($_FILES["file"]["error"] > 0)
    {
       echo "错误：: " . $_FILES["file"]["error"] . "<br>";//空间不足
    }
    else
    {

        $picture= $_FILES["file"]["$name"];//上传文件的名字
        if (file_exists("images/computers/" . $_FILES["file"]["name"]))
        {
            $jsonstr=array('a' => 0);
            echo json_encode($jsonstr);
           //echo $_FILES["file"]["name"] . " 文件已经存在。 ";

        }
        else
       {
            // 如果 upload 目录不存在该文件则将文件上传到 upload 目录下
            move_uploaded_file($_FILES["file"]["tmp_name"], "images/heart_volunteer/" . $_FILES["file"]["name"]);
           //echo "文件存储在: " . "images/computers/" . $_FILES["file"]["name"];
        }
        //move_uploaded_file($_FILES["file"]["tmp_name"], "images/heart_volunteer/" . $_FILES["file"]["name"]);
    }
}
else
{
    echo "非法的文件格式";

}
$sql="select * from release_date where act_name='$act_name' and Founder='$Founder'";
$obj=mysqli_query($link,$sql);
if($obj&&mysqli_affected_rows($link)){
    $jsonstr=array('a' => 0);
    echo json_encode($jsonstr);
    //该活动已发

}
else{
    $sql="insert into activity(act_id,act_name,act_city,act_category,act_region,regional_sponsors,Initiation_time,Deadline,Ending_time,Recruitment,Rec_ing,look,introduce,content,abstract,Founder,notes,look,picture)
        values (0,'$act_name','$act_city','$act_category','$act_region','$regional_sponsors','$Initiation_time','$Deadline','$Ending_time','$Recruitment','$Rec_ing',0,'$introduce','$content','$abstract','$Founder','$notes','$look','$picture')";
    $obj=mysqli_query($link,$sql);
    $jsonstr=array('a' => 1);
    echo json_encode($jsonstr);
    //活动发布成功
}
