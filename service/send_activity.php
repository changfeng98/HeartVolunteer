<?php

//从前端获取topic_name，topic_class，user_name，topic_content，topic_image
include("dbconfig.php");
$arr = json_decode($_GET['data'], true);

date_default_timezone_set('Asia/Shanghai');
$name = $release_date = date('Y-m-d H:i:s', time());
$topic_name = $arr["topic_name"];
$topic_class = $arr["topic_class"];
$user_name = $arr["user_name"];
$topic_content = $arr["topic_content"];
$look = 0;
$topic_image;

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
    && in_array($extension, $allowedExts)) {
    if ($_FILES["file"]["error"] > 0) {
        echo "错误：: " . $_FILES["file"]["error"] . "<br>";//空间不足
    } else {

        $topic_image = $_FILES["file"]["$name"];//上传文件的名字
        if (file_exists("images/" . $_FILES["file"]["name"])) {
            $jsonstr = array('a' => 0);
            echo json_encode($jsonstr);
            //echo $_FILES["file"]["name"] . " 文件已经存在。 ";

        } else {
            // 如果 upload 目录不存在该文件则将文件上传到 upload 目录下
            move_uploaded_file($_FILES["file"]["tmp_name"], "images/" . $_FILES["file"]["name"]);
            //echo "文件存储在: " . "images/computers/" . $_FILES["file"]["name"];
        }
        //move_uploaded_file($_FILES["file"]["tmp_name"], "images/heart_volunteer/" . $_FILES["file"]["name"]);
    }
} else {
    echo "非法的文件格式";
}
$sql = "select * from release_date where topic_name='$topic_name'and user_name='$user_name'";
$obj = mysqli_query($link, $sql);
if ($obj && mysqli_affected_rows($link)) {
    $jsonstr = array('a' => 0);
    echo json_encode($jsonstr);
    //该话题已存在

} else {
    $sql = "insert into release_date(topic_name,topic_class,topic_image,user_name,topic_content,look,release_date) values ('$topic_name','$topic_class','$topic_image','$user_name','$topic_content','$link','$release_date')";
    $obj = mysqli_query($link, $sql);
    $jsonstr = array('a' => 1);
    echo json_encode($jsonstr);
    //话题发布成功
}

// //活动发布成功a=1,活动发布失败a=0;
////前端获取活动名字：act_name，活动城市：act_city，活动类别：act_category，活动发布组织负责人regional_sponsors，
////活动时长Deadline，活动截止时间Ending_time，活动所需人数Recruitment，活动已招人数Rec_ing，活动内容content，发布活动的组织Founder，活动图片picture
////后端输出，活动次序：act_id，活动名字：act_name，活动城市：act_city，活动类别：act_category，活动发布组织负责人regional_sponsors，
//////活动时长Deadline，活动截止时间Ending_time，活动所需人数Recruitment，活动已招人数Rec_ing，活动介绍introduce=0，活动内容content，活动摘要abstract=0，发布活动的组织Founder，活动小注notes=0，点赞数，look=0，活动图片picture
////图片存在的目录为images/activity/
//include("dbconfig.php");
//$arr=json_decode($_GET['data'],true);
//
//$act_name=$arr["act_name"];
//$act_city=$arr["act_city"];
//$act_category=$arr["act_category"];
//$act_region=$arr["act_region"];
//$regional_sponsors=$arr["regional_sponsors"];
//date_default_timezone_set('Asia/Shanghai');
//$Initiation_time=$release_date=date('Y-m-d H:i:s',time());//用时间戳获取
//$Deadline=$arr["Deadline"];
//$Ending_time=$arr["Ending_time"];
//$Recruitment=$arr["Recruitment"];
//$Rec_ing=$arr["Rec_ing"];
//$content=$arr["content"];
//$Founder=$arr["Founder"];
//$picture='';
//
//
//
//$allowedExts = array("gif", "jpeg", "jpg", "png");
//$temp = explode(".", $_FILES["file"]["name"]);
////echo $_FILES["file"]["size"];
//$extension = end($temp);     // 获取文件后缀名
//if ((($_FILES["file"]["type"] == "image/gif")
//        || ($_FILES["file"]["type"] == "image/jpeg")
//        || ($_FILES["file"]["type"] == "image/jpg")
//        || ($_FILES["file"]["type"] == "image/pjpeg")
//        || ($_FILES["file"]["type"] == "image/x-png")
//        || ($_FILES["file"]["type"] == "image/png"))
//    && ($_FILES["file"]["size"] < 2048000)   // 小于 2000 kb
//    && in_array($extension, $allowedExts))
//{
//    if ($_FILES["file"]["error"] > 0)
//    {
//        echo "错误：: " . $_FILES["file"]["error"] . "<br>";
//    }
//    else
//    {
//        $picture = $_FILES["file"]["name"];
//        if (file_exists("images/activity/" . $_FILES["file"]["name"]))
//        {
//            echo $_FILES["file"]["name"] . " 文件已经存在。 ";
//        }
//        else
//        {
//            // 如果 upload 目录不存在该文件则将文件上传到 upload 目录下
//            move_uploaded_file($_FILES["file"]["tmp_name"], "images/activity/" . $_FILES["file"]["name"]);
//            //echo "文件存储在: " . "images/computers/" . $_FILES["file"]["name"];
//        }
//    }
//}
//else
//{
//    echo "非法的文件格式";
//}*/
//
//
//$sql="select * from activity where act_name='$act_name'";
//$obj=mysqli_query($link,$sql);
//if($obj&&mysqli_affected_rows($link)){
//    $jsonstr=array('a' => 0);
//    echo json_encode($jsonstr);
//    //该活动已发
//
//}
//else{
//    $sql="insert into activity(act_id,act_name,act_city,act_category,act_region,regional_sponsors,Initiation_time,Deadline,Ending_time,Recruitment,Rec_ing,introduce,content,abstract,Founder,notes,look,picture)
//        values (0,'$act_name','$act_city','$act_category','$act_region','$regional_sponsors','$Initiation_time','$Deadline','$Ending_time','$Recruitment','$Rec_ing',0,'$content','0','$Founder','0','0','$picture')";
//    $obj=mysqli_query($link,$sql);
//    $jsonstr=array('a' => 1);
//    echo json_encode($jsonstr);
//    //活动发布成功
//}
