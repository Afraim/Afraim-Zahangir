<?php
    $name = $_POST['name'];
    $email  = $_POST['email'];
    $message = $_POST['message'];

    // $email_from = "afraim.zahangir@gmail.com";
    // $email_subject = "Contact";
    $email_Body = "Hi Afraim ,\n $name wanted to say this to you:\n $message.\n\n reply them at $email";

    // $to = "afraim.zahangir@gmail.com";

    mail("afraim.zahangir@gmail.com","Subject",$email_Body);

    header("Location: ../htmls/contact.html");

?>