
/** phpbeginners-base64:/base64.js
 *
 * @created   2023-04-10
 * @version   1.0
 * @package   phpbeginners-base64
 * @author    phpbeginners <phpbeginners@gmail.com>
 * @copyright phpbeginners All right reserved.
 */

//  ...
(function(){
    //  ...
    document.querySelector('#base64').addEventListener('click', function(){
        let mime   = 'image/png';
        let canvas = document.getElementById('canvas');
        let base64 = canvas.toDataURL(mime);
      //let base64 = window.btoa(data);

        //  ...
        document.getElementById('a').href  = base64;
        document.getElementById('img').src = base64;
        document.getElementById('textarea').innerText = base64;

        //  ...
        CarbonCopy(base64);
    });

    //  ...
    function CarbonCopy(base64){
        //  ...
        let carbon  = document.getElementById('carbon');
        let context = carbon.getContext('2d');
        let image   = new Image();
            image.onload = function(){
                context.drawImage(image, 0, 0);
            }
            image.src = base64;
        context.drawImage(image, 0, 0, 800, 200);
    }

    //  ...
    document.getElementById('save').addEventListener('click',function(){
        //  ...
        let type = document.getElementById('type').value;
        console.log(type);

        //  ...
        switch( type ){
            case 'blob':
                SaveToServerBlob();
                break;
            case 'binary':
                SaveToServerBinary();
                break;
            case 'base64':
                SaveToServerBase64();
                break;
        }
    });
})();
