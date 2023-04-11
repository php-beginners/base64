
/** phpbeginners-base64:/api.js
 *
 * @created     2023-04-11
 * @version     1.0
 * @package     phpbeginners-base64
 * @author      phpbeginners <phpbeginners@gmail.com>
 * @copyright   phpbeginners All right reserved.
 */

/** Save to server at base64
 *
 * @created     2023-04-11
 * @version     1.0
 * @package     phpbeginners-base64
 * @author      phpbeginners <phpbeginners@gmail.com>
 * @copyright   phpbeginners All right reserved.
 */
function SaveToServerBase64(){
    //  ...
    let base64 = document.getElementById('textarea').value;
        base64 = base64.replace(/^.*,/, '');
    let requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "image=" + encodeURIComponent(base64)
    };

    //  ...
    fetch(`api/base64.php`, requestOptions)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json();
        }).then(data => {
            console.log(data);
        }).catch(error => {
            console.error("Fetch error:", error);
        });
}

//  ...
function SaveToServerBinary(){
    //  ...
    let encoder = new TextEncoder();
    let base64  = document.getElementById('textarea').value;
//  let binary  = encoder.encode('Hello, World!?');
    let binary  = encoder.encode(base64);

    //  ...
    let url     = './api/binary.php';
//  let binary  = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x57, 0x6f, 0x72, 0x6c, 0x64]);
    let xhr     = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.send(binary);
    xhr.onreadystatechange = function() {
        if( xhr.readyState === 4 && xhr.status === 200 ){
            if( this.responseType === 'arraybuffer' ){
                response = new TextDecoder().decode(xhr.response);   
            }else{
                response = this.responseText;
            }
            console.log(response);
        }
    };
}
