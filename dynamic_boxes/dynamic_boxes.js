App.extend('App.dynoBox');

App.dynoBox = function(minHeight, maxWidth, totalBoxes){

	var minHeight = minHeight || 3
	var maxWidth = maxWidth || 3
	var totalBoxes = totalBoxes || 14
	var _boxCount = 0

	var _setBoxCount = function(count){
		_boxCount = count || _boxCount;
		return _boxCount;
	}

	var _addColumn = function(container){
		var col = $("<div></div>").addClass('column');
		col.appendTo(container);
		return container;
	}

	var _generateColumns = function(container){
		container = $(container);
		container.find('.column').remove();
		for(var i=0;i<_noOfColumns();i++){
			_addColumn(container);	
		}
		return container;
	}

	var _generateBoxes = function(container){
		//find where the last box is
		var currentCol = container.find('.box:last');
	}

	var _noOfColumns = function(){
		var cols = parseInt(_boxCount / minHeight, 10);

		if(cols < 1){ cols = 1; }
		//check whether there are a valid number of boxes for the next row
		var mod = _boxCount % minHeight
		if( (minHeight - mod) > 1 || (mod == 0) || (cols == 1)) {
			cols = cols
		}
		else {
			cols = cols + 1
		}

		if(cols > maxWidth){
			cols = maxWidth;
		}
		return cols;
	}

	return {
		minHeight : minHeight,
		maxWidth : maxWidth,
		totalColumns : function(){return _noOfColumns()},
		totalBoxes : totalBoxes,
		boxCount : function(setCount){
			return _setBoxCount(setCount);
		},
		addBox : function(){
			//add a box to the screen
			_setBoxCount(_setBoxCount()+1);
			_generateColumns($('#container'));
			_generateBoxes();
			console.log("cols:" + _noOfColumns(), "boxes:" + _boxCount)
		}
	}

}