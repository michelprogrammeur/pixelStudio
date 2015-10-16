/**
 * [Pixel description]
 * @param {[number]} x     [description]
 * @param {[number]} y     [description]
 * @param {[number]} size  [description]
 * @param {[string]} color couleur du pixel
 */
function Pixel(x, y, size, color) {

	this.$el = $('<div class="pixel"></div>');

	this.set_color(color || 'red');
	this.set_size(size || 50);
	this.set_position(x, y);

	$('body').append(this.$el);
}

Pixel.prototype = {
	/**
	 * change la position du pixel
	 * @param {Number} x position horizontale
	 * @param {Number} y position verticale	 
	 * */
	set_position : function(x, y) {
		this.x = x;
		this.y = y;
		this.$el.css({
			left : (this.x -1) * this.size + 'px',
			top  : (this.y -1) * this.size + 'px',
		});
	},
	/**
	 * change la taille du pixel
	 * @param {Number} size Largeur et hauteur du pixel 
	 * */
	set_size : function(size) {
		this.size = size || 50;
		this.$el.css({
			width : this.size + 'px',
			height : this.size + 'px',
		});
	},
	/**
	 * change la couleur du pixel
	 * @param {string} color couleur du pixel 
	 * */
	set_color : function(color) {
		this.color = color;
		this.$el.css('background-color' , this.color);
	}
}

