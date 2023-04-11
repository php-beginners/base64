<?php
/** phpbeginners-base64:/api/base64.php
 *
 * @created   2023-04-11
 * @version   1.0
 * @package   phpbeginners-base64
 * @author    phpbeginners <phpbeginners@gmail.com>
 * @copyright phpbeginners All right reserved.
 */

//  ...
$base64 = $_POST["image"];

//  ...
$binary = base64_decode($base64);

//  ...
$path = "../image/base64.png";
$file = fopen($path, "wb");
fwrite($file, $binary);
fclose($file);

//  ...
$response = [
    'status' => true,
    'errors' => null,
    'result' => 'Success',
    'origin' => $base64,
];
echo json_encode($response);
