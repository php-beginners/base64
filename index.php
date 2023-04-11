<!doctype>
<html lang="en">
<head>
	<!-- Charset -->
	<meta charset="utf-8" />

	<!-- Stylesheet -->
	<link href="index.css?<?= date('H') ?>" rel="stylesheet" />

	<!-- JavaScript -->
	<script src="canvas.js?<?= date('H') ?>" defer></script>
    <script src="base64.js?<?= date('H') ?>" defer></script>
    <script src="api.js?<?=    date('H') ?>" defer></script>
</head>
<body>
	<div class="margin">
        <!-- Saved on the Server images -->
        <img src="<?= file_get_contents('./image/binary.txt') ?>" style="width: calc(800px/3)" />
        <img src="./image/base64.png" style="width: calc(800px/3)" />

        <!-- Form -->
		<canvas id="canvas" width="800px" height="200px">
			This browser does not support canvas tags.
		</canvas><br/>
        <button id="clear" >Clear</button>
        <button id="base64">Base64</button>
        <button id="save"  >Save to Server</button>
        <select id="type"  >
            <option value="base64">Base64</option>
            <option value="binary">Binary</option>
            <option value="blob"  >Blob</option>
        </select>
        <hr/>
        <textarea id="textarea" style="width:800px; height: 5em"></textarea><br/>
        <a   id="a"   href="">base64</a><br/>
        <img id="img" src=""/>
        <canvas id="carbon" width="800px" height="200px">
            This browser does not support canvas tags.
        </canvas><br/>
	</div>
</body>
</html>
