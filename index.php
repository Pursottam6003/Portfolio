<?php
    $server="localhost";
    $username="root";
    $password="";

    $con = mysqli_connect($server,$username,$password);

    if(!$con)
    {
        die("connection to the database failed due to ". mysqli_connect_error());
    }

    echo "sucess connecting to the db";

    
?>