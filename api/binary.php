<?php
/** phpbeginners-base64:/api/binary.php
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
if(!$binary = file_get_contents('php://input') ){
    $errors[] = 'Empty body.';
}else{
    //  ...
    $path = "../image/binary.txt";
    $io   = file_put_contents($path, $binary);
}

//  ...
$response = [
    'status' => true,
    'errors' => $errors,
    'result' => $io ? 'Success':'Failure',
];
echo json_encode($response);
