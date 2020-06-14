<?php
if($_POST["message"]) {
    mail("isitwednesday.mydudes@gmail.com", "Form to email message", $_POST["message"], "From: formsubmitwednesday@gmail.com");
}
?>
