<?php
	session_save_path("sessions/");
	if(!isset($_SESSION)){
		session_start();
	}
	$host='127.0.0.1';
	$user='root';
	$pwd='';
	$dbname='db_heart_volunteer';
	
	$db=new mysqli($host, $user, $pwd, $dbname);
	if($db -> connect_error <> 0){
		echo "连接失败,";
		echo $db-> connect_error;
		exit;
	}
	//使不出现乱码,$db已经是连接上数据库的指针，直接操作函数使用就行
	$db->query("SET NAMES UTF8");

	/****可以改几个参数，写成志愿者登录时判账号、密码是否错误****/
	function is_password_correct($uphone, $upwd){
		//预先定义连接数据库的参数
		$host='127.0.0.1';
		$user='root';
		$pwd='root';
		$dbname='db_computermalls';
		//通过函数传入参数，与数据库建立连接
		$db=new mysqli($host, $user, $pwd, $dbname);
		if($db -> connect_error <> 0){
			echo "连接失败,";
			echo $db-> connect_error;
			exit;
		}
		//使不出现乱码
		$db->query("SET NAMES UTF8");

		$sql = "SELECT uphone, upwd FROM user where uphone = '$uphone' and upwd = '$upwd'";
		$res = mysqli_query($db, $sql);
	
		if (mysqli_num_rows($res) > 0) {
			mysqli_close($db);
			return true;
			//echo "<script>location.href='cart.php';</script>";
		} else {
			mysqli_close($db);
			return false;
			//echo "<script>alert('账号或密码错误！'); location.href='login.php';</script>";
		}
	}

    /****可以改几个参数，写成组织者者登录时判账号、密码是否错误****/
	function is_password_correct_manager($madmin, $mpaw){
		$host='127.0.0.1';
		$user='root';
		$pwd='root';
		$dbname='db_computermalls';
		//通过函数传入参数，与数据库建立连接
		$db=new mysqli($host, $user, $pwd, $dbname);
		if($db -> connect_error <> 0){
			echo "连接失败,";
			echo $db-> connect_error;
			exit;
		}
		//使不出现乱码
		$db->query("SET NAMES UTF8");

		$sql = "SELECT madmin, mpaw FROM manager where madmin = '$madmin' and mpaw = '$mpaw'";
		//mysqli_query($conn, "set names 'utf8'");
		$res = mysqli_query($db, $sql);
	
		if (mysqli_num_rows($res) > 0) {
			mysqli_close($db);
			return true;
			//echo "<script>location.href='cart.php';</script>";
		} else {
			mysqli_close($db);
			return false;
			//echo "<script>alert('账号或密码错误！'); location.href='login.php';</script>";
		}
	}

    /****判断是否登录****/
	function ensure_logged_in(){
		if(!isset($_SESSION["uiphone"])){
			echo "<script>alert('请先登录！'); location.href='login.html';</script>";
		}else{
			return true;
		}
	}

	function ensure_logged_in_manager(){
		if(!isset($_SESSION["manager"])){
			echo "<script>alert('请先登录管理员账号！'); location.href='manager_login.html';</script>";
		}else{
			return true;
		}
	}

	function redirect($url, $flash_message = NULL){
		if($flash_message){
			$_SESSION["flash"] = $flash_message;
		}
		header("Location: $url");
		die;
	}

	function logoutuser(){
		session_destroy();
		session_regenerate_id(true);
		session_start();
		redirect("index.php","退出登录成功！");
	}
?>

