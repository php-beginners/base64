<?php
/** phpbeginners-base64:/api/blob.php
 *
 * @created   2023-04-11
 * @version   1.0
 * @package   phpbeginners-base64
 * @author    phpbeginners <phpbeginners@gmail.com>
 * @copyright phpbeginners All right reserved.
 */
//  ...
$io     = null;
$errors = [];

//  ...
if(!$blob = $_POST["image"] ?? null ){
    $errors[] = 'Empty $_POST["image"].';
}else{
    $binary = base64_decode($blob);

    //  ...
    $path = "../image/blob.png";
    $io   = file_put_contents($path, $binary);
}

//  ...
$response = [
    'status' => true,
    'errors' => $errors,
    'result' => $io ? 'Success':'Failure',
];
echo json_encode($response);
