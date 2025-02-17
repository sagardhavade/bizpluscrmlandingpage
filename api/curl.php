<?php
// Check if the required POST parameters are set
$name = isset($_POST["name"]) ? $_POST["name"] : '';
$email = isset($_POST["email"]) ? $_POST["email"] : '';
$phone = isset($_POST["phone"]) ? $_POST["phone"] : '';
$address = isset($_POST["address"]) ? $_POST["address"] : '';
$requirement = isset($_POST["requirement"]) ? $_POST["requirement"] : '';
$feedback = isset($_POST["feedback"]) ? $_POST["feedback"] : '';

// URL encode the parameters
$name = urlencode($name);
$email = urlencode($email);
$phone = urlencode($phone);
$address = urlencode($address);
$requirement = urlencode($requirement);

// Construct the URL
$url = "https://sales.triocorporation.in/api/Leads/Website?user=Website&pass=WebsiteAPI&name=$name&phone=$phone&email=$email&address=$address&requirement=$requirement";


// Initialize cURL
$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => $url,
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/x-www-form-urlencoded',
      'Content-Length: 0'
    )
));

// Execute the request
$response = curl_exec($curl);
//echo $response;
// Check for cURL errors
if ($response === false) {
    $error = curl_error($curl);
    // Handle the error as needed
}

// Close cURL session
curl_close($curl);
// Redirect to the thank you page
header("Location: http://localhost/bizpluscrmlandingpage/thankyou.html");
// header("Location: https://triohims.triocorporation.in/ThankYou.html");
exit;
?>
