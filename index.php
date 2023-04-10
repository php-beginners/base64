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
</head>
<body>
	<div class="margin">
		<canvas id="canvas" width="800px" height="200px">
			This browser does not support canvas tags.
		</canvas><br/>
		<button id="clear">Clear</button>
        <button id="base64">Base64</button>
        <hr/>
        <a   id="a"   href="">base64</a><br/>
        <img id="img" src=""/>
        <canvas id="carbon" width="800px" height="200px">
            This browser does not support canvas tags.
        </canvas><br/>
	</div>
</body>
</html>
