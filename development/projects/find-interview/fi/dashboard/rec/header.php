<?php 
include "../../configs/config.php" ; 
$user->CheckAuth(True) ; 
$user->OnlyFor("rec","../../auth.php") ; 
$user_files_path = "../" . $user_files_path ; 

?>
<!DOCTYPE html>
<html>

    <head>
        <title>FindInterview - a video says it all</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="./../../resources/font-awesome/css/font-awesome.min.css" rel="stylesheet">

        <link rel="stylesheet" href="./../../resources/fontello/fontello.css">
        <link rel="stylesheet" href="../../../css/animation.css">
        <link href="./../../includes/bootstrap/css/bootstrap.min.css" rel="stylesheet">

        <link type="text/css" href="./../../vendors/MEplayer/mediaelementplayer.min.css" rel="stylesheet" />
        <!-- REVOLUTION BANNER CSS SETTINGS -->
        <link rel="stylesheet" type="text/css" href="./../../vendors/rs-plugin/css/settings.css" media="screen" />
        <link href="./../../vendors/smoothdivscroll/smoothDivScroll.css" rel="stylesheet">
        <link rel="stylesheet" href="./../../vendors/magnific-popup/magnific-popup.css">
        <link rel="stylesheet" href="./../../css/aspect.css">
        <link rel="stylesheet" href="./../../css/style.css">
        <link rel="stylesheet" href="./../../css/responsive.css">

        <script type="text/javascript" src="./../../includes/modernizr/modernizr.custom.27667.js"></script>
                    <!--[if lt IE 9]>
                                <script type="text/javascript" src="./../../includes/html5shiv/html5shiv.js"></script>
                                <script type="text/javascript" src="./../../includes/respond/respond.min.js"></script>
                                <![endif]-->
		<script src="js/jquery-1.11.0.js"></script>
		
		  <!-- Chang URLs to wherever Video.js files will be hosted -->
		  <link href="video-js.css" rel="stylesheet" type="text/css">
		  <!-- video.js must be in the <head> for older IEs to work. -->
		  <script src="video.js"></script>

		  <!-- Unless using the CDN hosted version, update the URL to the Flash SWF -->
		  <script>
			videojs.options.flash.swf = "video-js.swf";
		  </script>
		  
		  <link rel="stylesheet" type="text/css" href="../../includes/DateTimePicker/jquery.datetimepicker.css"/>
    </head>



    <body data-spy="scroll" data-target="#section-nav">
       


            <header class="head-1">
               <div class="container menu-bar" role="navigation">
                    <div class="large-header">
                        <div class="navbar-header">
                            <a class="logo-box" href="#">
                                <img class="img-responsive" alt="findInterview" src="./../../images/metro-logo.png">
                            </a>
                        </div>


 <ul class="nav navbar-nav menu-1">
                               <li class="dropdown closed">
                                    <a href="./index.php">Home<span class="main-text-color light"></span> </a>
                                   
                                </li>




    <li class="dropdown closed">
                                    <a href="../../recorder/recorder.php?vtype=post_job">Post a job<span class="main-text-color light"></span> </a>
                                   
                                </li>

    <li class="dropdown closed">
                                    <a href="job_seekers.php">My Job Seekers<span class="main-text-color light"></span> </a>
                                   
                                </li>

    <li class="dropdown closed">
                                    <a href="search.php">Search for Job Seekers<span class="main-text-color light"></span> </a>
                                   
                                </li>
								
    <li class="dropdown closed">
                                    <a href="../../auth.php?cmd=Logout">Logout<span class="main-text-color light"></span> </a>
                                   
                                </li>
                   
            </header>