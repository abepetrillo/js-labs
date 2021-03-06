App.extend('App.dynoBox');

App.dynoBox = function (minHeight, maxWidth) {
	var _container = $('#container'),
			self = this,
			i = 0,
			colCssWidth;

	minHeight = minHeight || 3;
	maxWidth = maxWidth || 3;

	this.timer = null;

	//create the columns
	_container.find('.column').remove();
	for(i = 0; i < maxWidth; i++) {
		$('<div class="column" index="' + i + '"></div>').appendTo(_container);
	}

	//Could use CSS3 to style this, but won't work in some browsers so resorting to Javascript
	colCssWidth = parseInt(90 / maxWidth, 10);
	_container.find('.column').css('width', colCssWidth+"%")

	var Column = function (column) {

		var self = this;

		this.boxes = function () {
			return column.find('.box');
		}

		this.boxCount = function () {
			return self.boxes().length;
		}

		this.prevColumn = function () {
			var p = $(column).prev('.column');
			var col;
			if(p.length < 1) {
				col = null;
			}
			else{
				col = new Column(p);
			}

			return col;
		}

		this.nextColumn = function () {
			var n = $(column).next('.column');
			var col;
			if(n.length < 1) {
				col = null;
			}
			else{
				col = new Column(n);
			}

			return col;
		}

		this.belowMinHeight = function () {
			return self.boxes().length < minHeight;
		}

		this.boxDifference = function () {
			if(self.nextColumn != null) {
				return (self.boxes().length - self.nextColumn().boxes().length);
			}
			else {
				return 0;
			}
		}


		this.addBox = function (box) {
			box = box || $('<div class="box">'+ (_container.find('.box').length+1) +'</div>')


			switch((((_totalBoxes()+1) % maxWidth) == 0 ) && (_totalBoxes() > minHeight)) {
				case true:
					var colWidth = (_totalBoxes()+1) / maxWidth,
							colHeight;
					if(colWidth > maxWidth) {
						colWidth = maxWidth
					}
					colHeight = (_totalBoxes()+1) / colWidth
					var nextCol = new Column(_container.find('.column:first'))
					$(box).appendTo($('.column:nth-child('+colWidth+')'));
					while(nextCol != null) {
						while(nextCol.boxCount() > colHeight) {
							nextCol.pushBox();
						}

						nextCol = nextCol.nextColumn();
					}
					break;
				default:
					$(box).appendTo(column);
					var prevCol = self.prevColumn();
					while(prevCol != null) {

						if(prevCol.belowMinHeight()) {
							prevCol.pullBox();
						}

						if(prevCol.boxDifference() > 1 ) {
							prevCol.pullBox();
						}

						if(prevCol.boxCount() < prevCol.nextColumn().boxCount()) {
							prevCol.pullBox();
						}

						prevCol = prevCol.prevColumn();
					}
			}

			return box;
		}


		this.pullBox = function () {
			var box = column.next('.column').find('.box').first();
			$(box).appendTo(column);
		}

		this.pushBox = function () {
			var box = column.find('.box').last();
			$(column.next('.column')).prepend(box);
		}

		this.index = function () {
			return column.attr('index');
		}

		return self;
	}

	var lastColumn = function () {
		return _container.find('.column:last');
	}

	var _allBoxes = function () {
		return _container.find('.box');
	}

	var _totalBoxes = function () {
		return _container.find('.box').length;
	}

	var increment = function () {
		lc = new Column(lastColumn());
		b = $('#container').find('.box')
		$('#container').find('.box').remove();
		if(b.length >= 1) {
			b.each(function (ind, box) {
				lc.addBox(box);
			});
			lc.addBox();
		}
		else{
			lc.addBox();
		}
	}

	return {
		reset: function () {
			_container.find('.box').remove();
		},
		autoPlay: function () {
			self.timer = setInterval(increment, 500);
		},
		stopPlay: function () {
			clearInterval(self.timer);
		},
		addBox : function () {
			return increment();
		},
		removeBox : function () {
			_container.find('.box:last').remove();
		}
	}

}