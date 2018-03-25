

    <?php

    /* Attempt MySQL server connection. Assuming you are running MySQL

    server with default setting (user 'root' with no password) */

    $link = mysqli_connect("localhost", "root", "password", "HACKATHON2K18");

     

    // Check connection

    if($link === false){

        die("ERROR: Could not connect. " . mysqli_connect_error());

    }

     

    // Escape user inputs for security

    $first_name = mysqli_real_escape_string($link, $_REQUEST['fname']);

    $last_name = mysqli_real_escape_string($link, $_REQUEST['lname']);

    $lid = mysqli_real_escape_string($link, $_REQUEST['lid']);

    $address = mysqli_real_escape_string($link, $_REQUEST['address']);
    
    $img = mysqli_real_escape_string($link, $_REQUEST['imdat']);
    
    $dob = mysqli_real_escape_string($link, $_REQUEST['dob']);
     

    // attempt insert query execution

    $sql = "INSERT INTO ENTR (LID,FNAME,LNAME,ADDRESS,DOB,IMG) VALUES ('$lid','$first_name', '$last_name', '$address', '$dob', '$img')";

    if(mysqli_query($link, $sql)){

        echo "Record added successfully.";
	echo "<br><br>";
	echo "<h1>Your estimated quote is $500</h1>";

    } else{

        echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);

    }

     

    // close connection

    mysqli_close($link);

    ?>


