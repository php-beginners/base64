<!doctype>
<html lang="en">
<head>
	<!-- Charset -->
	<meta charset="utf-8" />

	<!-- Stylesheet -->
	<link href="index.css?<?= date('H') ?>" rel="stylesheet" />

	<!-- JavaScript -->
	<script src="canvas.js?<?= date('H') ?>" defer></script>
</head>
<body>
	<div class="margin">
		<canvas id="canvas" width="800px" height="200px">
			This browser does not support canvas tags.
		</canvas><br/>
		<button id="clear">Clear</button>
	</div>
</body>
</html>
