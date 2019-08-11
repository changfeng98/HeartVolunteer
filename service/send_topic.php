<?php
    //从前端获取topic_name，topic_class，user_name，topic_content，topic_image
    include("dbconfig.php");
    $arr=json_decode($_GET['data'],true);

    date_default_timezone_set('Asia/Shanghai');
    $name=$release_date=date('Y-m-d H:i:s',time());
    $topic_name=$arr["topic_name"];
    $topic_class=$arr["topic_class"];
    $user_name=$arr["user_name"];
    $topic_content=$arr["topic_content"];
    $look=0;
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
        && in_array($extension, $allowedExts))
    {
    if ($_FILES["file"]["error"] > 0)
    {
        echo "错误：: " . $_FILES["file"]["error"] . "<br>";//空间不足
    }
    else
    {

        $topic_image= $_FILES["file"]["$name"];//上传文件的名字
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
$sql="select * from release_date where topic_name='$topic_name'and user_name='$user_name'";
$obj=mysqli_query($link,$sql);
if($obj&&mysqli_affected_rows($link)){
    $jsonstr=array('a' => 0);
    echo json_encode($jsonstr);
    //该话题已存在

}
else{
    $sql="insert into release_date(topic_name,topic_class,topic_image,user_name,topic_content,look,release_date) values ('$topic_name','$topic_class','$topic_image','$user_name','$topic_content','$link','$release_date')";
    $obj=mysqli_query($link,$sql);
    $jsonstr=array('a' => 1);
    echo json_encode($jsonstr);
    //话题发布成功
}
