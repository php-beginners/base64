
/**
 */
(function(){
	/**
	 */
	var canvas, context;
	var _x = _y = null;

	/**
	 */
	function init_canvas(){
		canvas = document.getElementById('canvas');
		if(!canvas ){
			throw 'Does not exist "canvas" id.';
		}

		//	For mouse.
		canvas.addEventListener('mousemove',  on_move, false);
		canvas.addEventListener('mousedown',  on_down, false);
		canvas.addEventListener('mouseup',    on_out,  false);
		canvas.addEventListener('mouseout',   on_out,  false);

		//	For touch.
		canvas.addEventListener('touchstart', on_down, false);
		canvas.addEventListener('touchmove',  on_move, false);
		canvas.addEventListener('touchend',   on_out,  false);
	}

	/**
	 */
	function init_context(){
		context  = canvas.getContext('2d');
		if(!context ){
			throw 'Did not return 2D "context".';
		}

		//	...
		context.beginPath();

		//	...
		context.lineWidth   = 5;
		context.strokeStyle = '#000';
		context.lineJoin    = 'round';
		context.lineCap     = 'round';
		context.globalAlpha = 1.0;

		//	...
		do_fill_rect();
	}

	/**
	 */
	function init_button(){
		//	...
		let clear_button = document.getElementById('clear');
		if(!clear_button ){
			throw 'Does not exist "clear" button.';
		}

		//	...
		clear_button.addEventListener('click', function(){
			context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
			do_fill_rect();
		}, false);
	}

	/**
	 */
	function on_move(e){
		//	...
		do_draw(e.offsetX, e.offsetY);
	}

	/**
	 */
	function on_down(e){
		//	...
		_x = e.offsetX;
		_y = e.offsetY;

		//	...
		do_draw(e.offsetX, e.offsetY);
	}

	/**
	 */
	function on_out(){
		//	...
		_x = _y = null;
	}

	/**
	 */
	function do_draw(x, y){
		//	...
		if( _x === null && _y === null ){
			return;
		}

		//	...
		context.beginPath();
		context.moveTo(_x, _y);
		context.lineTo(x, y);
		context.stroke();

		//	...
		_x = x;
		_y = y;
	}

	/**
	 */
	function do_fill_rect(){
		context.fillStyle = "#f5f5f5";
		context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
	}

	/** Wait for DOM content load.
	 */
	window.addEventListener('DOMContentLoaded', function(){
		try {
			init_canvas();
			init_context();
			init_button();
		} catch (e) {
			console.error(e);
		} finally {

		}
	});
})();
